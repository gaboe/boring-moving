import gql from "graphql-tag";
import {
  DeleteRuleMutationVariables,
  DeleteRuleMutation
} from "../../../generated/types";
import { ChildProps, graphql } from "react-apollo";

const DELETE_RULE_MUTATION = gql`
  mutation DeleteRule($id: String!) {
    deleteRule(id: $id) {
      id
    }
  }
`;

type Props = ChildProps<DeleteRuleMutationVariables, DeleteRuleMutation>;

const withDeleteRuleMutation = graphql<
  DeleteRuleMutationVariables,
  DeleteRuleMutation
>(DELETE_RULE_MUTATION);

export { Props, withDeleteRuleMutation };
