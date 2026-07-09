import { hashPassword } from "@/lib/login/manage-login";

(async () => {
    const minhaSenha = 'criacao de secret key'; // NÃO ESQUECER DE APAGAR O VALOR AQUI
    const hashDaSuaSenhaEmBase64 = await hashPassword(minhaSenha)

    console.log({ hashDaSuaSenhaEmBase64 })
})()