import { Container } from "@/components/Container";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {

    return (
        <Container>
            <header>
                <h1 className="text-6xl font-bold text-center py-8">Aqui é header</h1>
                <p className="text-justify py">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque debitis voluptates alias amet veritatis porro nesciunt error consequatur, reiciendis qui nisi aliquam sit? Voluptas exercitationem blanditiis harum quidem similique sapiente.</p>
            </header>

            <Suspense fallback={<SpinLoader />}>
                <PostsList />
            </Suspense>

            <footer>
                <p className="text-6xl font-bold text-center py-8">Footer</p>
            </footer>
        </Container>
    )
}
