import * as React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { RulesType } from "../../gql/queries/rules/RulesOnUserQuery";

type Props = { rules: RulesType; onDelete: (ruleID: string) => void };

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
          <Table.HeaderCell>Period [minutes]</Table.HeaderCell>
          <Table.HeaderCell>Folder name</Table.HeaderCell>
          <Table.HeaderCell />
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
              <Table.Cell>{x.folderName}</Table.Cell>
              <Table.Cell>
                <Link to={`/edit-rule/${x.id}`}>
                  <Icon name="pencil" size="large" color="black" link={true} />
                </Link>
                <Icon
                  name="trash"
                  onClick={() => props.onDelete(x.id)}
                  size="large"
                  link={true}
                />
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  </>
);

export { RulesTable as Table };
