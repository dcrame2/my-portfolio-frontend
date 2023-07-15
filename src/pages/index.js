import { Inter } from "next/font/google";
import { fetchStrapi } from "../../utilities/fetchStrapi";
import ModuleManager from "../../utilities/getModules";
// import SEO from "@/components/sub_components/SEO";

const inter = Inter({ subsets: ["latin"] });

export default function Index({ index }) {
  // console.log(index.data);
  // const seoData = index.data[0].attributes.seo;
  return (
    <>
      {/* {seoData ? <SEO {...seoData} /> : null} */}
      <ModuleManager modules={index.data[0].attributes.pageModules} />
    </>
  );
}

export async function getStaticProps() {
  const index = await fetchStrapi("pages", {
    filters: {
      pageSlug: "home",
    },
    populate: "deep",
  });

  console.log(index.data[0].attributes.pageModules, " index");

  return {
    props: { index },
    revalidate: 10,
  };
}
