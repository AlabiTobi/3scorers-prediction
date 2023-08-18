import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/animation_llfy7blv.json";
import { AnimationContainer, HomePageButton, LogoLink, NPInner } from "../GlobalStyles";

const NoPage = () => {
  return (
    <>
      <div style={{width: "100%", height: "100vh", display: "flex", flexDirection: "column",
          justifyContent: "center", alignItems: "center", textAlign: "center",
      }}>
        <AnimationContainer style={{ width: "300px", height: "100px" }}>
          <Lottie animationData={animationData} loop={true}/>
        </AnimationContainer>
        <NPInner>
          <p style={{ margin: "3%" }}>
            The page you are looking for might have been removed,
            <br />
            had its name changed, or is temporarily unavailable.
          </p>
          <LogoLink to="/">
            <HomePageButton>HomePage</HomePageButton>
          </LogoLink>
        </NPInner>
      </div>
    </>
  );
};

export default NoPage;
