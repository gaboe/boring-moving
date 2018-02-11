import { Rule } from "./Rule";

type NonAuthenificatedUser = {
  googleID: string;
  email: string;
  firstName: string;
  lastName: string;
};

type User = {
  id: string;
  rules: Rule[];
} & NonAuthenificatedUser;

export { User, NonAuthenificatedUser };
