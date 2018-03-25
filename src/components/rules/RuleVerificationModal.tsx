import * as React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { RuleType } from '../../gql/queries/rules/RuleQuery';
import { EmailsMovedByRuleComponent, EMAILS_MOVED_BY_RULE } from '../../gql/queries/stats/EmailsMovedByRule';
import { EmailsMovedByRuleQueryVariables } from '../../generated/types';

type Props = {
    rule?: RuleType;
    close: () => void;
    isOpened: boolean;
    onContinue: () => void;
}

type State = {
}

class RuleVerificationModal extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        if (!this.props.isOpened || !this.props.rule) {
            return null;
        }
        const { sender, subject, content, folderName, period } = this.props.rule;
        const variables: EmailsMovedByRuleQueryVariables = { sender, subject, content, folderName, period }
        return (
            <Modal
                open={this.props.isOpened}
                onClose={() => this.props.close()}
                basic={true}
                size='small'
            >
                <EmailsMovedByRuleComponent
                    query={EMAILS_MOVED_BY_RULE}
                    variables={variables}
                    fetchPolicy="network-only"
                >
                    {
                        response => {
                            if (response.loading || !response.data || !response.data.appStat) {
                                return <Header icon='mail' content='We are counting emails' />;
                            }
                            return (
                                <>
                                    <Header icon='mail' content='Do you wish to continue?' />
                                    <Modal.Content>
                                        <p> This rule will affect {response.data.appStat.emailsMovedByRule}
                                            {response.data.appStat.emailsMovedByRule === 1 ? " email" : " emails"}.</p>
                                        <p>Do you with to continue?</p>
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button color='red' inverted={true} onClick={this.props.close}>
                                            <Icon name='times rectangle' /> No, stop. I don't want to continue.
                                         </Button>
                                        <Button color='green' inverted={true} onClick={this.props.onContinue}>
                                            <Icon name='checkmark' /> Yes, let's continue.
                                         </Button>
                                    </Modal.Actions>
                                </>
                            )

                        }
                    }
                </EmailsMovedByRuleComponent>
            </Modal>
        );
    }
}

export { RuleVerificationModal }