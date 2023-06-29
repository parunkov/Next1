import { MainLayout } from "@/components/MainLayout";
import Head from "next/head";
import { useRouter } from "next/router";

export default function About() {
    const router = useRouter();
    return (
        <MainLayout>
            <Head>
                <title>About</title>
            </Head>
            <h1>About</h1>
            <button onClick={() => router.push('/')}>Go back to home</button>
        </MainLayout>
    )
}