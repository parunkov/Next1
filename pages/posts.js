import { MainLayout } from "@/components/MainLayout";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Posts({posts: serverPosts}) {
    const [posts, setPosts] = useState(serverPosts);
    useEffect(() => {
        async function load() {
            const response = await fetch('http://localhost:4200/posts');
            const json = await response.json();
            setPosts(json);
        };
        if (!serverPosts) load();
    }, [posts, serverPosts]);

    if (!posts) {
        return <MainLayout><p>Loading...</p></MainLayout>
    }

    return (
        <MainLayout title={'Posts Page'}>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/post/[id]`} as={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
            {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
        </MainLayout>
    )
}

Posts.getInitialProps = async ({req}) => {
    if (!req) return { posts: null};
    const response = await fetch('http://localhost:4200/posts');
    const posts = await response.json();
    return {posts};
}