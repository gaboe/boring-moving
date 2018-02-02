import { Rule } from "./Rule";

type User = {
  email: string;
  id: string;
  rules: Rule[];
};

export { User };
