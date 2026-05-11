import ErrorMessage from "@/components/ErrorMessage";
import clsx from "clsx";

export default function NotFound() {
    return (
        <ErrorMessage
            pageTitle="Página não encontrada"
            contentTitle="404"
            content='Erro 404 - A página que você tentando acessar não existe neste site.'
        />
    )
}