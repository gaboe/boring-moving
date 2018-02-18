import * as React from "react";
import { Header } from "semantic-ui-react";
import {
  Props as QueryProps,
  Response,
  IMAPCONFIG_QUERY
} from "../../gql/queries/imapConfig/imapConfig";
import { Query } from "react-apollo";
import { ImapConfigForm, State as FormState } from "./ImapConfigForm";
import {
  withSaveImapConfigMutation,
  Props as MutationProps
} from "../../gql/mutations/imapConfig/SaveImapConfigMutation";

type State = {} & FormState;
type Props = QueryProps & MutationProps;

class ImapConfig extends React.Component<Props, State> {
  submitForm = (formState: FormState): void => {
    const { userName, password, host, port } = formState;
    if (this.props.mutate) {
      this.props.mutate({
        variables: { userName, password, host, port },
        refetchQueries: [{ query: IMAPCONFIG_QUERY }]
      });
    }
    console.log("object");
  };

  renderForm = (response: Response) => {
    if (response.data) {
      return (
        <ImapConfigForm
          submitForm={this.submitForm}
          imapConfig={response.data.imapConfig}
        />
      );
    }
    return <ImapConfigForm submitForm={this.submitForm} />;
  };

  render() {
    return (
      <>
        <Query query={IMAPCONFIG_QUERY}>
          {(response: Response) => {
            return (
              <>
                <Header as="h1" content="Imap config" />
                {this.renderForm(response)}
              </>
            );
          }}
        </Query>
      </>
    );
  }
}

const withMutation = withSaveImapConfigMutation(ImapConfig);
export { withMutation as ImapConfig, State };
