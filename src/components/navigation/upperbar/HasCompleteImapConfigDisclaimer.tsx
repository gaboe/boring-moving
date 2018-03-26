import * as React from "react";
import { HasCompleteImapConfigComponent, HAS_COMPLETE_IMAP_CONFIG_QUERY }
    from "../../../gql/queries/users/HasCompleteImapConfig";
import { HasCompleteImapConfigQuery } from "../../../generated/types";
import { QueryResult } from "react-apollo";
import styled from "styled-components";

const Style = styled.div`
color: white;
margin: 1em;
`;

const render = (response: QueryResult<HasCompleteImapConfigQuery, {}>) => {
    if (response.data && response.data.user && !response.data.user.hasCompleteImapConfig) {
        return (
            <>
                <Style>
                    It looks like your ImapConfig is not fully configured, yet.
                    Configure it in Imap config section
                 </Style>
            </>
        )
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