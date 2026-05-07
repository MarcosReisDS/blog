import { findPostBySlugCached } from "@/lib/post/queries"
import { Metadata } from "next"

type PostSlugProps = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PostSlugProps): Promise<Metadata> {
    const { slug } = await params
    const post = await findPostBySlugCached(slug)

    return {
        title: post.title,
        description: post.excerpt
    }
}

export default async function PostSlugPage({ params }: PostSlugProps) {
    const { slug } = await params
    const post = await findPostBySlugCached(slug)

    return (
        <div>
            <p>{post.title}</p>
        </div>
    )
}