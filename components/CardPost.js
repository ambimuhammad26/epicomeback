import Link from "next/link"
import InfoPost from "./InfoPost"

export default function CardPost({ thumbnail, ...infoPost}) {
    return (
        <article>
            <Link href="/details">
                <img src={thumbnail} className="w-full rounded cursor-pointer"/>
            </Link>
            <InfoPost 
                {...infoPost}
            />
        </article>
    )
}
