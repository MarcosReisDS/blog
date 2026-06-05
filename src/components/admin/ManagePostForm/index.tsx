'use client';

import { Button } from "@/components/Button";
import { InputCheckbox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useState } from "react";

export function ManagePostForm() {
    const [contentValue, setContentValue] = useState('');

    return (
        <form action='' className="mb-16 mt-10">
            <div className="flex flex-col gap-6">

                <InputText labelText="Nome" placeholder="Digite seu nome" />

                <InputCheckbox labelText="Aceito os termos de uso" />

                <MarkdownEditor
                    labelText="Conteúdo"
                    disabled={false}
                    textAreaName="content"
                    value={contentValue}
                    setValue={setContentValue}
                />

                <div className="mt-4">
                    <Button type="submit">Enviar</Button>
                </div>
            </div>
        </form>
    )
}