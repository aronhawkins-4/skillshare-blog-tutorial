import Link from "next/link"
import Style from "../styles/Header.module.css"
import { getAllCategories } from "@/services";
// import { useState } from "react"
// import {ApolloClient, gql, InMemoryCache} from "@apollo/client"
// import client from "@/lib/ApolloClient"


//  const client = new ApolloClient({
//     uri: 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clgltdgt245sp01uj1grc9rzt/master',
//       cache: new InMemoryCache(),
//     });

export default function Header({categories}) {
  return (
    <header className={Style.header}>
        <div className="container flex justify-between items-center">
            <Link href="/" className={Style.logo}>ShareIt.</Link>
        <ul>
        {
      categories.map((category) => {
        return (
            <li key={category.id} className="text-xl">
                <Link href={`/categories/${category.name.toLowerCase()}`}>
                <span>{category.name}</span>
                </Link>
            </li>
        )   
      })
    }
    </ul>
        </div>
        
    </header>
  )
}
