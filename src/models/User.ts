type NonAuthenificatedUser = {
  googleID: string;
  email: string;
  firstName: string;
  lastName: string;
};

type User = {
  id: string;
} & NonAuthenificatedUser;

export { User, NonAuthenificatedUser };
