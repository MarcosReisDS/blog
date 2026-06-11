'use client';

import { Button } from "@/components/Button";
import { IMAGE_UPLOADER_MAX_SIZE } from "@/lib/post/constants";
import { ImageUpIcon } from "lucide-react";
import { useRef } from "react";
import { toast } from "react-toastify";

export function ImageUploader() {
    const inputFileRef = useRef<HTMLInputElement>(null)

    function handleChooseFile() {
        if (!inputFileRef.current) return;

        inputFileRef.current.click()
    }

    function handleChange() {
        if (!inputFileRef) return;

        const fileInput = inputFileRef.current
        const file = fileInput?.files?.[0];

        if (!file) return;

        if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
            const readableMaxSize = IMAGE_UPLOADER_MAX_SIZE / 1024;
            toast.error(`Imagem muito grande. Máx: ${readableMaxSize}KB.`)

            fileInput.value = '';
            return;
        }

        const formData = new FormData()
        formData.append('file', file)

        fileInput.value = '';
    }

    return (
        <div className="flex flex-col gap-2">
            <Button onClick={handleChooseFile} type="button" className="self-start">
                <ImageUpIcon />
                Enviar uma imagem
            </Button>
            <input
                onChange={handleChange}
                ref={inputFileRef}
                className="hidden"
                name="file"
                type="file"
                accept="image/*"
            />
        </div>
    )
}