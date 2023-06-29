import { MainLayout } from "@/components/MainLayout";
import Head from "next/head";
import Link from "next/link";

export default function Index() {
    return <MainLayout>
    <Head>
        <title>Next index</title>
        <meta name="keywords" content="nxt, js" />
        <meta charSet="utf-8" />
    </Head>
        <h1>Hello</h1>
        <p><Link href="/about">About</Link></p>
        <p><Link href="/posts">Posts</Link></p>

    </MainLayout>
}