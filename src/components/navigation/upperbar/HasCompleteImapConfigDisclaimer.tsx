import * as React from "react";
import { Header } from 'semantic-ui-react';
import { Col } from "react-grid-system";
import { HasCompleteImapConfigComponent, HAS_COMPLETE_IMAP_CONFIG_QUERY }
    from "../../../gql/queries/users/HasCompleteImapConfig";
import { HasCompleteImapConfigQuery } from "../../../generated/types";
import { QueryResult } from "react-apollo";

const render = (response: QueryResult<HasCompleteImapConfigQuery, {}>) => {
    if (response.data && response.data.user && !response.data.user.hasCompleteImapConfig) {
        return (
            <Col offset={{ lg: 3, sm: 1 }} lg={6} sm={9}>
                <Header as="h4">
                    It looks like your ImapConfig is not fully configured, yet.
                    You can configure it here
                </Header>
            </Col>)
    }
    return null;
}

const HasCompleteConfigDisclaimer: React.SFC<{}> = props => {
    return (
        <HasCompleteImapConfigComponent query={HAS_COMPLETE_IMAP_CONFIG_QUERY}>
            {
                response => render(response)
            }
        </HasCompleteImapConfigComponent>
    )
}

export { HasCompleteConfigDisclaimer }