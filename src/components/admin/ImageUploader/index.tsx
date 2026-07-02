'use client';

import { uploadImageAction } from "@/actions/upload/upload-image-action";
import { Button } from "@/components/Button";
import { IMAGE_UPLOADER_MAX_SIZE } from "@/lib/post/constants";
import { ImageUpIcon } from "lucide-react";
import { useRef, useState, useTransition } from "react";
import { toast } from "react-toastify";

type ImageUploaderProps = {
    disabled?: boolean;
}

export function ImageUploader({ disabled = false }: ImageUploaderProps) {
    const inputFileRef = useRef<HTMLInputElement>(null)
    const [isUploading, startTransition] = useTransition()
    const [imgUrl, setImgUrl] = useState('')

    function handleChooseFile() {
        if (!inputFileRef.current) return;

        inputFileRef.current.click()
    }

    function handleChange() {
        toast.dismiss();

        if (!inputFileRef) {
            setImgUrl('')
            return;
        };

        const fileInput = inputFileRef.current
        const file = fileInput?.files?.[0];

        if (!file) {
            setImgUrl('')
            return;
        };

        if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
            const readableMaxSize = IMAGE_UPLOADER_MAX_SIZE / 1024;
            toast.error(`Imagem muito grande. Máx: ${readableMaxSize}KB.`)

            fileInput.value = '';
            setImgUrl('')
            return;
        }

        const formData = new FormData()
        formData.append('file', file)

        startTransition(async () => {
            const result = await uploadImageAction(formData);

            if (result.error) {
                toast.error(result.error)
                fileInput.value = '';
                return;
            }

            console.log('result', result)

            setImgUrl(result.url)
            toast.success('Imagem enviada')
        })

        fileInput.value = '';
    }

    console.log(imgUrl)

    return (
        <div className="flex flex-col gap-2">
            <Button
                onClick={handleChooseFile}
                type="button"
                className="self-start"
                disabled={isUploading || disabled}
            >
                <ImageUpIcon />
                Enviar uma imagem
            </Button>

            {!!imgUrl && (
                <div className="flex flex-col gap-4">
                    <p>
                        <b>URL:</b> {imgUrl}
                    </p>

                    <img className="rounded-lg" src={imgUrl} />
                </div>
            )}

            <input
                onChange={handleChange}
                ref={inputFileRef}
                className="hidden"
                name="file"
                type="file"
                accept="image/*"
                disabled={isUploading || disabled}
            />
        </div>
    )
}