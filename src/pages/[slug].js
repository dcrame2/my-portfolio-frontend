import ModuleManager from "../../utilities/getModules";
import { fetchStrapi } from "../../utilities/fetchStrapi";
// import { fetchProperties } from "@/utilities/fetchProperties";
// import SEO from "./components/sub_components/SEO";

export default function Page({ page, propertiesData }) {
  //   const seoData = page.data[0].attributes.seo;

  return (
    <>
      {/* {seoData ? <SEO {...seoData} /> : null} */}
      <ModuleManager
        modules={page.data[0].attributes.pageModules}
        propertiesData={propertiesData}
      />
    </>
  );
}

export async function getStaticPaths() {
  const pages = await fetchStrapi("pages", {
    fields: "pageSlug",
  });

  const mainPagePaths = pages.data.map((page) => ({
    params: {
      slug: page.attributes.pageSlug,
    },
  }));

  return {
    paths: [...mainPagePaths],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const page = await fetchStrapi("pages", {
    filters: {
      pageSlug: params.slug,
    },
    populate: "deep",
  });

  if (page.data <= 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
    },
    revalidate: 10,
  };
}
