/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface SaveImapConfigMutationVariables {
  userName: string,
  password: string,
  host: string,
  port: number,
};

export interface SaveImapConfigMutation {
  saveImapConfig:  {
    __typename: "ImapConfigType",
    userName: string,
    password: string,
    host: string,
    port: string,
    userID: string,
    id: string,
  },
};

export interface AddRuleMutationVariables {
  sender: string,
  subject?: string | null,
  content?: string | null,
  folderName: string,
  period: number,
};

export interface AddRuleMutation {
  addRule:  {
    __typename: "RuleType",
    id: string,
    sender: string,
    subject: string | null,
    content: string | null,
    folderName: string,
    period: number,
    userID: string,
  } | null,
};

export interface DeleteRuleMutationVariables {
  id: string,
};

export interface DeleteRuleMutation {
  deleteRule:  {
    __typename: "RuleType",
    id: string,
  } | null,
};

export interface AuthentificateMutationVariables {
  googleID: string,
  firstName: string,
  lastName: string,
  email: string,
};

export interface AuthentificateMutation {
  authentificate:  {
    __typename: "UserType",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    googleID: string,
  } | null,
};

export interface LogoutMutation {
  logout:  {
    __typename: "UserType",
    id: string,
  } | null,
};

export interface RegisterMutationVariables {
  email: string,
  password: string,
};

export interface RegisterMutation {
  signup:  {
    __typename: "UserType",
    id: string,
    email: string,
  } | null,
};

export interface UserQuery {
  user:  {
    __typename: "UserType",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    googleID: string,
  } | null,
};

export interface ImapConfigQuery {
  imapConfig:  {
    __typename: "ImapConfigType",
    id: string,
    userName: string,
    password: string,
    host: string,
    port: string,
  } | null,
};

export interface MostActiveRulesQueryVariables {
  count: number,
};

export interface MostActiveRulesQuery {
  mostActiveRules:  {
    __typename: "MetaStatType",
    userID: string,
    // Count of all emails moved by all rules
    count: number,
    rules:  Array< {
      __typename: "RuleStatType",
      ruleID: string,
      count: number,
      rule:  {
        __typename: "RuleType",
        id: string,
        folderName: string,
      },
    } >,
  },
};

export interface GetRuleByIDQueryVariables {
  id: string,
};

export interface GetRuleByIDQuery {
  rule:  {
    __typename: "RuleType",
    id: string,
    sender: string,
    subject: string | null,
    content: string | null,
    folderName: string,
    period: number,
  } | null,
};

export interface RulesOnUserQuery {
  user:  {
    __typename: "UserType",
    id: string,
    rules:  Array< {
      __typename: "RuleType",
      id: string,
      sender: string,
      subject: string | null,
      content: string | null,
      period: number,
      folderName: string,
      userID: string,
    } > | null,
  } | null,
};

export interface AppStatQuery {
  appStat:  {
    __typename: "AppStatType",
    // Count of all emails moved by all application
    emailCount: number,
  },
};
