import { MainLayout } from "../components/MainLayout";
import { useRouter } from "next/router";

interface About {
    title: string;
}

export default function About({title}: About) {
    const router = useRouter();
    return (
        <MainLayout title={title}>
            <h1>{title}</h1>
            <button onClick={() => router.push('/')}>Go back to home</button>
        </MainLayout>
    )
}

About.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/about');
    const data: About = await response.json();
    return {title: data.title};
}