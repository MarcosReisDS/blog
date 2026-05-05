import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
import { PostSummary } from "../PostSummary";

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

            <PostSummary
                postHeading="h1"
                postLink={postLink}
                createdAt={"2025-04-08T00:24:38.616Z"}
                title={"Rotina matinal de pessoas altamente eficazes"}
                excerpt={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ducimus esse et necessitatibus maxime consequatur aperiam voluptas quaerat quis. Sunt quisquam nulla in doloribus atque! Totam sequi pariatur laborum placeat!"}
            />
        </section>
    )
}