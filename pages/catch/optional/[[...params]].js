import { useRouter } from "next/router"

export default function OptionalURL(){
    const router = useRouter()
    return (
        <div>
            <h1>Optional URL</h1>
            <p>
                This is the optional url page.
            </p>
            <pre>{JSON.stringify(router, null, 2)}</pre>
        </div>
    )
}