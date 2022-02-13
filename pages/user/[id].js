import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function UserId() {
    const router = useRouter()
    const { id } = router.query
    const [user, setUser] = useState(null)

    useEffect(()=>{
        fetch(`/api/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    })
    
    return (
        <div>
            <h1>User View, /user/{id}</h1>
            <p>Fetch Data</p>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}