import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
    const slug = "titulo-do-post";
    const postLink = `/post/${slug}`;

    return (
        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
            <PostCoverImage
                linkProps={{
                    href: postLink
                }}
                imageProps={{
                    width: 1200,
                    height: 720,
                    src: "/images/bryen_9.png",
                    alt: "Titulo do post",
                    priority: true
                }}
            />

            <div className="flex flex-col gap-4 sm:justify-center">
                <time className="text-slate-600 block text-sm" dateTime="2025-04-20">20/04/2026 10:00</time>

                <PostHeading as="h1" url={postLink}>Blabla</PostHeading>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ducimus esse et necessitatibus maxime consequatur aperiam voluptas quaerat quis. Sunt quisquam nulla in doloribus atque! Totam sequi pariatur laborum placeat!</p>
            </div>
        </section>
    )
}