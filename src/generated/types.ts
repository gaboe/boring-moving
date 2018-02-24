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
  subject: string,
  content: string,
  folderName: string,
  period: number,
};

export interface AddRuleMutation {
  addRule:  {
    id: string,
    sender: string,
    subject: string,
    content: string,
    folderName: string,
    period: number,
    userID: string,
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
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    googleID: string,
  } | null,
};

export interface LogoutMutation {
  logout:  {
    id: string,
  } | null,
};

export interface RegisterMutationVariables {
  email: string,
  password: string,
};

export interface RegisterMutation {
  signup:  {
    id: string,
    email: string,
  } | null,
};

export interface UserQuery {
  user:  {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    googleID: string,
  } | null,
};

export interface ImapConfigQuery {
  imapConfig:  {
    id: string,
    userName: string,
    password: string,
    host: string,
    port: string,
  } | null,
};

export interface GetRuleByIDQueryVariables {
  id: string,
};

export interface GetRuleByIDQuery {
  rule:  {
    id: string,
    sender: string,
    subject: string,
    content: string,
    folderName: string,
    period: number,
  } | null,
};

export interface RulesOnUserQuery {
  user:  {
    id: string,
    rules:  Array< {
      id: string,
      sender: string,
      subject: string,
      content: string,
      period: number,
      folderName: string,
      userID: string,
    } | null > | null,
  } | null,
};
