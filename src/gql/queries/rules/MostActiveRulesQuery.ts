import gql from "graphql-tag";

const MOST_ACTIVE_RULES_QUERY = gql`
  query GetMostActiveRule($id: Int!) {
    mostActiveRules(count: $id) {
      rule {
        id
        sender
        content
        folderName
        period
      }
    }
  }
`;

export { MOST_ACTIVE_RULES_QUERY };
