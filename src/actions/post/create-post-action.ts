'use server';

import { PublicPost } from "@/dto/post/dto";

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

    return {
        formState: prevState.formState,
        erros: []
    }
}