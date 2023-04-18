import Link from "next/link"
import Style from "../styles/Header.module.css"
import { useEffect, useState } from "react"
import { graphCms } from "../lib/graphCms"

export default function Header() {
    const [categoryLinks, setCategoryLinks] = useState([]);
    useEffect(async ()=> {
        const data = await graphCms.request();
    }, [])
  return (
    <header className={Style.header}>
        <div className={`container ` + Style.container}>
            <Link href="/" className={Style.logo}>ShareIt.</Link>
            <ul>
                <li>
                    <Link href="/">Category 1</Link>
                </li>
                <li>
                    <Link href="/">Category 2</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}
