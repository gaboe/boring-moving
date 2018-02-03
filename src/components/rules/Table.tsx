import * as React from "react";
import { Table, Button } from "semantic-ui-react";
import { Rule } from "../../models/Rule";
import { Link } from "react-router-dom";

type Props = { rules: Rule[] };

const RulesTable: React.SFC<Props> = props => (
  <>
    <Link to="/add-rule">
      <Button color="linkedin">Add rule</Button>
    </Link>
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Sender</Table.HeaderCell>
          <Table.HeaderCell>Subject</Table.HeaderCell>
          <Table.HeaderCell>Content</Table.HeaderCell>
          <Table.HeaderCell>Period</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {props.rules.map(x => {
          return (
            <Table.Row key={x.id}>
              <Table.Cell>{x.sender}</Table.Cell>
              <Table.Cell>{x.subject}</Table.Cell>
              <Table.Cell>{x.content}</Table.Cell>
              <Table.Cell>{x.period}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  </>
);

export { RulesTable as Table };
