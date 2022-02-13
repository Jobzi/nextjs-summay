import { useRouter } from "next/router"

export default function CatchWithID(){
    const router = useRouter()
    return (
        <div>
            <h1>Catch With ID</h1>
            <p>
                This is the catch with id page.
            </p>
            <pre>{JSON.stringify(router, null, 2)}</pre>
        </div>
    )
}