import { findPostBySlugCached } from "@/lib/post/queries"
import { notFound } from "next/navigation";

type PostSlugProps = {
    params: Promise<{ slug: string }>
}

export default async function PostSlugPage({ params }: PostSlugProps) {
    const { slug } = await params

    let post;
    
    try {
        post = await findPostBySlugCached(slug)
    } catch {
        post = undefined
    }

    if(!post) notFound()

    return (
        <div>
            <p>{post.title}</p>
        </div>
    )
}