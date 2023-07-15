import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { variables } from "../components/styles/Variables";
import { pBase, pSmall, pXSmall } from "../components/styles/Type";
import { containerStyles } from "../components/styles/Utilities";

const Nav = styled.nav`
  height: 100px;
  ${pXSmall};
  width: 100%;
  color: white;
  display: flex;
  position: fixed;
  background-color: ${variables.color2};
  border-bottom: solid 2px ${variables.black};
  justify-content: space-between;
  align-items: center;
  ${containerStyles}
`;

const Logo = styled.img`
  max-width: 60px;
  width: 100%;
`;

const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px;
  gap: 100px;
`;

const Navigation = ({ data }) => {
  const navItems = data.attributes.navLinks;
  console.log(data);
  return (
    <Nav>
      <div className="logo-container">
        <Link href="/">
          <Logo
            src={
              "http://localhost:1337" + data.attributes.logo.data.attributes.url
            }
            alt=""
          />
        </Link>
      </div>
      <NavLinksContainer>
        {navItems.map((items, i) => {
          return (
            <Link href={items.href} key={i}>
              {items.text}
            </Link>
          );
        })}
      </NavLinksContainer>
    </Nav>
  );
};

export default Navigation;
