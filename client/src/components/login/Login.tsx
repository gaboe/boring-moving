import * as React from "react";
import { Button, Form } from "semantic-ui-react";

const Login = () => (
  <Form>
    <Form.Field>
      <label>Email</label>
      <input placeholder="email" />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input type="password" placeholder="password" />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
);

export { Login };
