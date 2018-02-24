import * as React from "react";
import { Header } from "semantic-ui-react";
import {
  Props as QueryProps,
  IMAPCONFIG_QUERY
} from "../../gql/queries/imapConfig/imapConfig";
import { Query } from "react-apollo";
import { ImapConfigForm, State as FormState } from "./ImapConfigForm";
import {
  withSaveImapConfigMutation,
  Props as MutationProps
} from "../../gql/mutations/imapConfig/SaveImapConfigMutation";
import { ToastContainer, toast } from "react-toastify";
import { SaveImapConfigMutation } from "../../generated/types";

type State = {} & FormState;
type Props = QueryProps & MutationProps;

class ImapConfig extends React.Component<Props, State> {
  submitForm = (formState: FormState): void => {
    if (formState.imap) {
      const { userName, password, host, port } = formState.imap;
      if (this.props.mutate) {
        this.props.mutate({
          variables: { userName, password, host, port },
          refetchQueries: [{ query: IMAPCONFIG_QUERY }]
        });
      }
      toast.success("Data saved", { position: toast.POSITION.TOP_RIGHT });
      console.log("object");
    }
  };

  renderForm = (response: QueryProps) => {
    if (response.data && response.data.imapConfig) {
      return (
        <ImapConfigForm
          submitForm={this.submitForm}
          imapConfig={
            response.data.imapConfig as SaveImapConfigMutation["saveImapConfig"]
          }
        />
      );
    }
    return <ImapConfigForm submitForm={this.submitForm} />;
  };

  render() {
    return (
      <>
        <Query query={IMAPCONFIG_QUERY}>
          {(response: QueryProps) => {
            return (
              <>
                <Header as="h1" content="Imap config" />
                {this.renderForm(response)}
              </>
            );
          }}
        </Query>
        <ToastContainer autoClose={2000} />
      </>
    );
  }
}

const withMutation = withSaveImapConfigMutation(ImapConfig);
export { withMutation as ImapConfig, State };
