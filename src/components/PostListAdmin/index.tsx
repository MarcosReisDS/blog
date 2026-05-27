import { findAllPostAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";

export default async function PostListAdmin() {
    const posts = await findAllPostAdmin();

    return (
        <div className="py-16">
            {posts.map(post => {
                return (
                    <div
                        className={clsx('py-2 px-2', !post.published && 'bg-slate-300')}
                        key={post.id}
                    >
                        <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

                        {!post.published && (
                            <span className="text-xs text-slate-600 italic">
                                (Não publicado)
                            </span>
                        )}

                        <button className={clsx(
                            'text-red-500 cursor-pointer transition',
                            '[&_svg]:w-4 [&_svg]:h-4',
                            'hover:scale-120 hover:text-red-700'
                        )}
                            aria-label={`Apagar o post: ${post.title}`}
                            title={`Apagar o post: ${post.title}`}
                        >
                            <Trash2Icon />
                        </button>
                    </div>
                )
            })}
        </div>
    )
}