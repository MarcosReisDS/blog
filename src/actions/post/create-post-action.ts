'use server';

import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { makePartialPublicPost, PublicPost } from "@/dto/post/dto";
import { PostCreateSchema } from "@/lib/post/validations";
import { PostModel } from "@/models/post/post-model";
import { getZodErrorMessage } from "@/utils/get-zod-error-messages";
import { makeSlugFromText } from "@/utils/make-slug-from-text";
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid"

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
        id: uuidv4(),
        slug: makeSlugFromText(validPostData.title)
    }

    await drizzleDb.insert(postsTable).values(newPost);

    // @ts-ignore
    revalidateTag('posts')
    redirect(`/admin/post/${newPost.id}`)
}