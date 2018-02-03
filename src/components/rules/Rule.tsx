import * as React from "react";
import { Header } from "semantic-ui-react";

const Rule = (props: {}) => {
  return (
    <>
      <Header as="h1" icon="options" content="Rules" />
      <Header
        as="h5"
        content="You can see yours predifined rules, which will be executed periodicaly"
      />
    </>
  );
};

export { Rule };
