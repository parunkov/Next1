import { MainLayout } from "../components/MainLayout";
import Link from "next/link";
import classes from '../styles/error.module.scss'

export default function ErrorPage() {
    return (
        <MainLayout title={'Error Page'}>
            <h1 className={classes.error}>Error 404</h1>
            <p>Please <Link href="/">go back</Link> to safety</p>
        </MainLayout>
    )
}