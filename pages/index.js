import { MainLayout } from "@/components/MainLayout";
import Head from "next/head";
import Link from "next/link";

export default function Index() {
    return (
        <MainLayout title={'Home Page'}>
            <h1>Hello</h1>
            <p><Link href="/about">About</Link></p>
            <p><Link href="/posts">Posts</Link></p>

        </MainLayout>
    )
}