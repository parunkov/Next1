import { NextPageContext } from "next";
import { MainLayout } from "../../components/MainLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MyPost } from "../../interfaces/post";

interface PostPageProps {
    post: MyPost
}

export default function Post({ post: serverPost }: PostPageProps) {
    const [post, setPost] = useState(serverPost);
    const router = useRouter();

    useEffect(() => {
        async function load() {
            const response = await fetch(`${process.env.API_URL}/posts/${router.query.id}`);
            const data = await response.json();
            setPost(data);
        };
        if (!serverPost) load();
    }, [router.query.id, serverPost]);

    if (!post) {
        return <MainLayout><p>Loading...</p></MainLayout>
    }

    return (
        <MainLayout title={post?.title}>
            <h1>{post?.title}</h1>
            <hr />
            <p>{post?.text}</p>
            <hr />
            <Link href="/posts">Back to all posts</Link>
        </MainLayout>
    )
}

interface PoctNextPageContext extends NextPageContext {
    query: {
        id: string;
    }
}

Post.getInitialProps = async ({ query, req }: PoctNextPageContext) => {
    if (!req) return { post: null };
    const { id } = query;
    const response = await fetch(`http://localhost:4200/posts/${id}`);
    const post: MyPost = await response.json();
    return { post };
}

// export async function getServerSideProps({ query, req }) {
//     // if (!req) return { props: { post: null } };
//     const { id } = query;
//     const response = await fetch(`http://localhost:4200/posts/${id}`);
//     const post = await response.json();
//     return { props: { post } };
// }
