import { findPostBySlugCached } from "@/lib/post/queries"

type PostSlugProps = {
    params: Promise<{ slug: string }>
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