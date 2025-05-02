import Link from "next/link";

export default function MenuBar() {
    return (
        <div className="flex justify-around bg-blue-200 p-5 text-3xl text-bold">
            <Link href="/" className="ibm-plex-sans-thai-bold" >Home</Link>
            <Link href="/state" className="ibm-plex-sans-thai-bold">State</Link>
        </div>
    
    )
}