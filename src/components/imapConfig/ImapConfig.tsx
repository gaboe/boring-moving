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
import { ImapConfigModal } from "./ImapConfigModal";
import { HAS_COMPLETE_IMAP_CONFIG_QUERY } from "../../gql/queries/users/HasCompleteImapConfig";

type State = {} & FormState;
type Props = MutationProps;

const divStyle = {
  marginLeft: "0",
};

class ImapConfig extends React.Component<Props, State> {
  submitForm = (formState: FormState): void => {
    if (formState.imap) {
      const { userName, password, host, port } = formState.imap;
      if (this.props.mutate) {
        this.props.mutate({
          variables: { userName, password, host, port },
          refetchQueries: [{ query: IMAPCONFIG_QUERY }, { query: HAS_COMPLETE_IMAP_CONFIG_QUERY }]
        });
      }
      toast.success("Imap config saved", { position: toast.POSITION.TOP_RIGHT });
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
          <Col offset={{ sm: 1, md: 2, lg: 3 }} sm={8} md={6} lg={5}>
            <Row style={divStyle}>
              <Header as="h1" icon="setting" content="Imap config" />
              <ImapConfigModal />
            </Row>
            <ImapConfigQueryComponent query={IMAPCONFIG_QUERY}>
              {response => {
                return (
                  <>
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
