import { createContext } from "react";
import "@/styles/globals.css";
import Layout from "./layout/index";
import { fetchStrapi } from "../../utilities/fetchStrapi";

export const navContext = createContext({});

function App({ Component, pageProps, navigationProps }) {
  return (
    <navContext.Provider value={navigationProps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </navContext.Provider>
  );
}

App.getInitialProps = async (context) => {
  const nav = await fetchStrapi("navigation", { populate: "deep" });

  const footer = await fetchStrapi("footer", { populate: "deep" });

  return {
    navigationProps: { nav, footer },
  };
};

export default App;
