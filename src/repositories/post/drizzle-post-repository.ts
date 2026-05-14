import { drizzleDb } from "@/db/drizzle";
import { PostRepository } from "./post-repository";
import { postsTable } from "@/db/drizzle/schemas";
import { desc } from "drizzle-orm";
import { PostModel } from "@/models/post/post-model";

export class DrizzlePostRepository implements PostRepository {
    async findAllPublic(): Promise<PostModel[]> {
        const posts = await drizzleDb.query.posts.findMany({
            orderBy: desc(postsTable.createdAt),
        })

        return posts
    }

    async findBySlugPublic(slug: string): Promise<PostModel> {}

    async findAll(): Promise<PostModel[]> {}

    async findById(id: string): Promise<PostModel> {}
}