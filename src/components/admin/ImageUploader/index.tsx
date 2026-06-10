'use client';

import { Button } from "@/components/Button";
import { ImageUpIcon } from "lucide-react";
import { useRef } from "react";

export function ImageUploader() {
    const inputFileRef = useRef<HTMLInputElement>(null)

    function handleChooseFile() {
        if (!inputFileRef.current) return;

        inputFileRef.current.click()
    }

    return (
        <div className="flex flex-col gap-2">
            <Button onClick={handleChooseFile} type="button" className="self-start">
                <ImageUpIcon />
                Enviar uma imagem
            </Button>
            <input
                ref={inputFileRef}
                className="hidden"
                name="file"
                type="file"
                accept="image/*"
            />
        </div>
    )
}