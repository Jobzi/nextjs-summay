import Link from "next/link";

export function Header(){
    return(
        <ul>
            <Link href='/'  passHref><li>Home</li></Link>
            <Link href='/second' passHref><li>Second Route</li></Link>
            <Link href='/third' passHref><li>Third Route</li></Link>
            <Link href='/catch' passHref><li>Catch Router</li></Link>
        </ul>
    )
}