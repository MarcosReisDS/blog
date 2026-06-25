'use server';

import { makePartialPublicPost, PublicPost } from "@/dto/post/dto";
import { PostCreateSchema } from "@/lib/post/validations";
import { PostModel } from "@/models/post/post-model";
import { getZodErrorMessage } from "@/utils/get-zod-error-messages";

type CreatePostActionState = {
    formState: PublicPost;
    erros: string[];
}

export async function createPostAction(
    prevState: CreatePostActionState,
    formData: FormData
): Promise<CreatePostActionState> {

    if (!(formData instanceof FormData)) {
        return {
            formState: prevState.formState,
            erros: ['Dados inválidos']
        }
    }

    const formDataObj = Object.fromEntries(formData.entries());
    const zodParseObj = PostCreateSchema.safeParse(formDataObj)

    if (!zodParseObj.success) {
        const errors = getZodErrorMessage(zodParseObj.error.format());
        return {
            erros: errors,
            formState: makePartialPublicPost(formDataObj)
        }
    }

    const validPostData = zodParseObj.data;
    const newPost: PostModel = {
        ...validPostData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        id: Date.now().toString(),
        slug: Math.random().toString(36)
    }

    return {
        formState: newPost,
        erros: []
    }
}