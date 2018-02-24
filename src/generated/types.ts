/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface SaveImapConfigMutationVariables {
  userName?: string | null,
  password?: string | null,
  host?: string | null,
  port?: number | null,
};

export interface SaveImapConfigMutation {
  saveImapConfig:  {
    userName: string | null,
    password: string | null,
    host: string | null,
    port: string | null,
    userID: string | null,
    id: string | null,
  } | null,
};

export interface AddRuleMutationVariables {
  sender?: string | null,
  subject?: string | null,
  content?: string | null,
  folderName?: string | null,
  period?: number | null,
};

export interface AddRuleMutation {
  addRule:  {
    id: string | null,
    sender: string | null,
    subject: string | null,
    content: string | null,
    folderName: string | null,
    period: number | null,
    userID: string | null,
  } | null,
};

export interface AuthentificateMutationVariables {
  googleID?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
};

export interface AuthentificateMutation {
  authentificate:  {
    id: string | null,
    email: string | null,
    firstName: string | null,
    lastName: string | null,
    googleID: string | null,
  } | null,
};

export interface LogoutMutation {
  logout:  {
    id: string | null,
  } | null,
};

export interface RegisterMutationVariables {
  email?: string | null,
  password?: string | null,
};

export interface RegisterMutation {
  signup:  {
    id: string | null,
    email: string | null,
  } | null,
};

export interface UserQuery {
  user:  {
    id: string | null,
    email: string | null,
    firstName: string | null,
    lastName: string | null,
    googleID: string | null,
  } | null,
};

export interface ImapConfigQuery {
  imapConfig:  {
    id: string | null,
    userName: string | null,
    password: string | null,
    host: string | null,
    port: string | null,
  } | null,
};

export interface GetRuleByIDQueryVariables {
  id: string,
};

export interface GetRuleByIDQuery {
  rule:  {
    id: string | null,
    sender: string | null,
    subject: string | null,
    content: string | null,
    folderName: string | null,
    period: number | null,
  } | null,
};

export interface RulesOnUserQuery {
  user:  {
    id: string | null,
    rules:  Array< {
      id: string | null,
      sender: string | null,
      subject: string | null,
      content: string | null,
      period: number | null,
      folderName: string | null,
      userID: string | null,
    } | null > | null,
  } | null,
};
