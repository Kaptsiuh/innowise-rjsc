import React from "react";
import { Routing } from "@common/routing/index.js";
import { Header } from "@common/components/index.js";
import { useAuth } from "@common/hooks/index.js";
import { LinearProgress } from "@common/components/index.js";

export const App = () => {
  const { isInitialized } = useAuth();

  if (!isInitialized) {
    return <LinearProgress />;
  }

  return (
    <>
      <Header />
      <main role="main">
        <Routing />
      </main>
    </>
  );
};
