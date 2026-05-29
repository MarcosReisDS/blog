'use server';

import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { postRepository } from "@/repositories/post";
import { eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {

    if (!id || typeof id !== 'string') {
        return {
            error: 'Dados inválidos',
        }
    }

    const post = await postRepository.findById(id).catch(() => undefined)

    if (!post) {
        return {
            error: 'Post não existe',
        }
    }

    await drizzleDb.delete(postsTable).where(eq(postsTable.id, id))

    // @ts-ignore
    revalidateTag('posts')
    // @ts-ignore
    revalidateTag(`post-${post.slug}`)

    return {
        error: '',
    }
}