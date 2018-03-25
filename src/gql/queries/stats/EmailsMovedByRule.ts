import gql from "graphql-tag";
import { Query } from "react-apollo";
import { EmailsMovedByRuleQuery, EmailsMovedByRuleQueryVariables } from "../../../generated/types";

const EMAILS_MOVED_BY_RULE = gql`
query EmailsMovedByRule($sender: String!, $subject: String, $content: String, $folderName: String!, $period: Int!) {
    appStat {
      emailsMovedByRule(sender: $sender, subject: $subject, content: $content, folderName: $folderName, period: $period)
    }
  }
  `

class EmailsMovedByRuleComponent extends Query<EmailsMovedByRuleQuery, EmailsMovedByRuleQueryVariables> { }

export { EMAILS_MOVED_BY_RULE, EmailsMovedByRuleComponent }