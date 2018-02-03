// import * as React from "react";
// // import { Header } from "semantic-ui-react";
// // import { Table } from "./Table";
// import Query from "react-apollo/Query";
// import { USER_QUERY as query, Response } from "./../../gql/queries/UserQuery";

// import {
//   RULES_ON_USER_QUERY as query,
//   Response
// } from "./../../gql/queries/rules/RulesOnUserQuery";

// const Rules: React.SFC<{}> = props => {
//   return (
//     // <Query query={query}>
//     //   {(result: Response) => {
//     //     return (
//     //       <>
//     //         <Header as="h1" icon="options" content="Rules" />
//     //         <Header
//     //           as="h5"
//     //           content="You can see yours predifined rules, which will be executed periodicaly"
//     //         />
//     //         <Table />
//     //       </>
//     //     );
//     //   }}
//     // </Query>
//     <Query query={query}>
//       {(result: Response) => {
//         return <div>Hello! </div>;
//       }}
//     </Query>
//   );
// };

// export { Rules };

import * as React from "react";
import { Query } from "react-apollo";
// import { USER_QUERY as query, Response } from "./../../gql/queries/UserQuery";
import { Header } from "semantic-ui-react";
import { Table } from "./Table";

import {
  RULES_ON_USER_QUERY as query,
  Response
} from "./../../gql/queries/rules/RulesOnUserQuery";

const Rules: React.SFC<{}> = props => {
  return (
    <Query query={query}>
      {(response: Response) => {
        console.log(response);
        return (
          <>
            <Header as="h1" icon="options" content="Rules" />
            <Header
              as="h5"
              content="You can see yours predifined rules, which will be executed periodicaly"
            />
            <Table />
          </>
        );
      }}
    </Query>
  );
};
export { Rules };
