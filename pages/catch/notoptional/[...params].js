import { useRouter } from "next/router"

export default function CatchURL(){
    const router = useRouter()
    return (
        <div>
            <h1>Catch URL - Not Optional</h1>
            <p>
                This is the catch url page.
            </p>
            <pre>{JSON.stringify(router, null, 2)}</pre>
        </div>
    )
}