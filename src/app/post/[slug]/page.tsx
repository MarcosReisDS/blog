import { SinglePost } from "@/components/SinglePost"
import { SpinLoader } from "@/components/SpinLoader"
import { findAllPublicPostsCached, findPostBySlugCached } from "@/lib/post/queries"
import { Metadata } from "next"
import { Suspense } from "react"

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

export async function generateStaticParams() {
    const posts = await findAllPublicPostsCached();

    return posts.map(post => {
        return {
            slug: post.slug
        }
    })
}

export default async function PostSlugPage({ params }: PostSlugProps) {
    const { slug } = await params

    return (
        <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
            <SinglePost slug={slug} />
        </Suspense>
    )
}