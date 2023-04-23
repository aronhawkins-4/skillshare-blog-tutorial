import Image from 'next/image'
import Header from '@/components/Header'
import { graphcms } from '@/lib/GraphQLClient';
import { getAllCategories } from '@/services';

export default function Home({categories}) {

  return (
    <>
    <Header categories={categories}/>
     
    </>
  )
}

// //  fetch  our posts
export async function getStaticProps() {
  const categories = (await getAllCategories()) || [];

  return {
    props: { categories },
  };
}