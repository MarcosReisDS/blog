'use client';

import { deletePostAction } from "@/actions/post/delete-post-action";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import { useTransition } from "react";

type DeletePostButtonProps = {
    id: string;
    title: string;
}

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
    const [isPending, startTransition] = useTransition()

    function handleClick() {
        startTransition(async () => {
            const result = await deletePostAction(id)
            alert(`O result é: ${result}`)
        })
    }

    return (
        <button className={clsx(
            'text-red-500 cursor-pointer transition',
            '[&_svg]:w-4 [&_svg]:h-4',
            'hover:scale-120 hover:text-red-700',
            'disabled:text-slate-600 disabled:cursor-not-allowed'
        )}
            aria-label={`Apagar o post: ${title}`}
            title={`Apagar o post: ${title}`}
            disabled={isPending}
            onClick={handleClick}
        >
            <Trash2Icon />
        </button>
    )
}