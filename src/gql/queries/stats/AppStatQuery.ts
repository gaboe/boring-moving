import gql from "graphql-tag";
import { Query } from "react-apollo";
import { AppStatQuery } from "../../../generated/types";

const APP_STAT_QUERY = gql`
query AppStat {
    appStat {
      emailCount
    }
  }
  `

class AppStatQueryComponent extends Query<AppStatQuery> { }

export { APP_STAT_QUERY, AppStatQueryComponent }