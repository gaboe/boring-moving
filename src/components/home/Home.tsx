import * as React from "react";
import { Query } from "react-apollo";
import { USER_QUERY as query, Props } from "./../../gql/queries/UserQuery";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const getName = (result: Props): string => {
  if (result.data && result.data.user) {
    return result.data.user.firstName;
  }
  return "Anonymous user";
};

const Home: React.SFC<Props> = props => {
  const data = [
    {
      value: 3400,
      name: "Page A"
    },
    {
      value: 2400,
      name: "Page B"
    },
    {
      value: 5400,
      name: "Page C"
    },
    {
      value: 8400,
      name: "Page D"
    }
  ];
  return (
    <Query query={query}>
      {(result: Props) => {
        return (
          <>
            <div>Hello {getName(result)}!</div>
            <LineChart width={800} height={400} data={data}>
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </>
        );
      }}
    </Query>
  );
};
export { Home };
