import { gql } from "graphql-request";
import { graphcms } from "@/lib/GraphQLClient";

export async function getAllCategories() {
    const query = gql`
        query GetCategories {
            categories {
            name
            id
            }
        }
        `;
  
    const {categories} = await graphcms.request(query);
    return categories;
  }