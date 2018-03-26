import * as React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class ImapConfigModal extends React.Component {
    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    render() {
        return (
            <Modal
                open={this.state.modalOpen}
                onClose={this.handleClose}
                trigger={<Icon onClick={this.handleOpen} link={true} name="question circle" size="large" />}
                basic={true}
                size='small'
                dimmer="blurring"
            >
                <Header icon='mail' content='Why we need your imap config?' />
                <Modal.Content>
                    <p>Boring Moving need this, to connect to your email server.
                If you are using gmail you need to allow "Less secure apps" to connect to your email.</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' inverted={true} onClick={this.handleClose}>
                        <Icon name='checkmark' /> Now, I understand
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

export { ImapConfigModal }