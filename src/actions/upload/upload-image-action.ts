'use server'

import error from "@/app/error";
import { IMAGE_UPLOADER_MAX_SIZE } from "@/lib/post/constants";

type UploadImageActionResult = {
    url: string;
    error: string;
}

export async function uploadImageAction(formData: FormData): Promise<UploadImageActionResult> {
    const makeResult = ({ url = '', error = '' }) => ({ url, error });

    if (!(formData instanceof FormData)) {
        return makeResult({ error: 'Dados inválidos' })
    }

    const file = formData.get('file');

    if (!(file instanceof File)) {
        return makeResult({ error: 'Arquivo inválido' })
    }

    if(file.size > IMAGE_UPLOADER_MAX_SIZE) {
        return makeResult({ error: 'Arquivo muito grande' })
    }

    if(!file.type.startsWith('image/')) {
        return makeResult({ error: 'Imagem inválida' })
    }

    return makeResult({ url: 'URL' })
}