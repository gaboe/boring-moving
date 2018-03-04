import * as React from "react";
import { Header } from "semantic-ui-react";
import {
  IMAPCONFIG_QUERY,
  ImapConfigQueryComponent
} from "../../gql/queries/imapConfig/imapConfig";
import { ImapConfigForm, State as FormState } from "./ImapConfigForm";
import {
  withSaveImapConfigMutation,
  Props as MutationProps
} from "../../gql/mutations/imapConfig/SaveImapConfigMutation";
import { ToastContainer, toast } from "react-toastify";
import { SaveImapConfigMutation, ImapConfigQuery } from "../../generated/types";
import { Row, Col } from "react-grid-system";

type State = {} & FormState;
type Props = MutationProps;

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

  renderForm = (response?: ImapConfigQuery) => {
    if (response && response.imapConfig) {
      return (
        <ImapConfigForm
          submitForm={this.submitForm}
          imapConfig={
            response.imapConfig as SaveImapConfigMutation["saveImapConfig"]
          }
        />
      );
    }
    return <ImapConfigForm submitForm={this.submitForm} />;
  };

  render() {
    return (
      <>
        <Row>
          <Col offset={{ sm: 1 }} sm={10}>
            <ImapConfigQueryComponent query={IMAPCONFIG_QUERY}>
              {response => {
                return (
                  <>
                    <Header as="h1" content="Imap config" />
                    {this.renderForm(response.data)}
                  </>
                );
              }}
            </ImapConfigQueryComponent>
          </Col>
        </Row>
        <ToastContainer autoClose={2000} />
      </>
    );
  }
}

const withMutation = withSaveImapConfigMutation(ImapConfig);
export { withMutation as ImapConfig, State };
