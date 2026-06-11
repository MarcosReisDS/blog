'use server'

import { logColor } from "@/utils/log-color"

export async function uploadImageAction() {
    logColor('Olá sou action upload')

    return {
        user: 'SENHA DO USUARIO',
    }
}