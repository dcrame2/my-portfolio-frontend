import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  height: 100px;
  width: 100%;
  color: white;
  display: flex;

  justify-content: space-between;
`;

const Logo = styled.img`
  max-width: 100px;
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
