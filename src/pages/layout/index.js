import React, { useContext } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { navContext as navigationContext } from "@/pages/_app";

const Layout = styled.div``;

const index = (props) => {
  const navData = useContext(navigationContext).nav.data;
  const footerData = useContext(navigationContext).footer.data;
  //   console.log(navData.attributes.navLinks);
  return (
    <>
      <Navigation data={navData} />
      <main id="main">{props.children}</main>
      <Footer data={footerData} />
    </>
  );
};

export default index;
