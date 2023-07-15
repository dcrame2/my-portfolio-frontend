import React from "react";
import styled from "styled-components";
import { containerStyles } from "../styles/Utilities";
import { variables } from "../styles/Variables";

const Container = styled.div`
  background-color: ${variables.color2};

  .inner-container {
    height: 100vh;
    ${containerStyles}
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
  }
`;

const MainHero = ({ ...data }) => {
  console.log(data, "look at me mf");
  const { eyebrow, name, image } = data;
  return (
    <Container>
      <div className="inner-container">
        <p>{eyebrow}</p>
        <h1>{name}</h1>
        <img src={"http://localhost:1337" + image.data.attributes.url} alt="" />
      </div>
    </Container>
  );
};

export default MainHero;
