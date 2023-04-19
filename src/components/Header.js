import Link from "next/link"
import Style from "../styles/Header.module.css"
import { useState } from "react"
import {useQuery, gql} from "@apollo/client"

export default function Header() {
    const [categoryLinks, setCategoryLinks] = useState([]);
   const GET_CATEGORIES = gql`
    query Categories {
        categories {
        color {
            css
        }
        name
        }
    }
   `;
   const {data} = useQuery(GET_CATEGORIES);
   setCategoryLinks(data.categories);
   console.log(data);
  return (
    <header className={Style.header}>
        <div className={`container ` + Style.container}>
            <Link href="/" className={Style.logo}>ShareIt.</Link>
            <ul>
                {categoryLinks.map((link) => {
                    <li key={Link.name}>
                        <Link href={`/${link.name}`}>{link.name}</Link>
                    </li>
                })}
            </ul>
        </div>
    </header>
  )
}
