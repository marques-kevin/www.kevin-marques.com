import { RouteComponentProps, Router } from "@reach/router";
import React from "react";
import { HomeRoute } from "./home";

export const Routes: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Router>
        <HomeRoute path="/" />
      </Router>
    </>
  );
};
