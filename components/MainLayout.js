import Head from "next/head";
import Link from "next/link";

export function MainLayout({ children, title = 'Next App' }) {
    return (
        <>
            <Head>
                <title>{title} | Next Course</title>
                <meta name="keywords" content="nxt, js" />
                <meta charSet="utf-8" />
            </Head>
            <nav>
                <Link href="/"><span>Home</span></Link>
                <Link href="/about"><span>About</span></Link>
                <Link href="/posts"><span>Posts</span>s</Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
                nav {
                    position: fixed;
                    height: 60px;
                    left: 0;
                    right: 0;
                    top: 0;
                    background: darkblue;
                    color: white;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                nav span {
                    display: inline-block;
                    color: white;
                }
                main {
                    margin-top: 60px;
                    padding: 1rem;
                }
            `}</style>
        </>
    )
}