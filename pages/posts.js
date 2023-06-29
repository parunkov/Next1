import { MainLayout } from "@/components/MainLayout";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Posts({posts}) {
    // const [posts, setPosts] = useState([]);
    // useEffect(() => {
    //     async function load() {
    //         const response = await fetch('http://localhost:4200/posts');
    //         const json = await response.json();
    //         setPosts(json);
    //         console.log(posts);
    //     };
    //     load();
    // }, []);

    return (
        <MainLayout title={'Posts Page'}>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
            {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
        </MainLayout>
    )
}

Posts.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/posts');
    const posts = await response.json();
    return {posts};
}