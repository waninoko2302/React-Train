import React from 'react';

class FormAction extends React.Component {
  state = { open: false }

  closeConfigShow = (closeOnEscape) => () => {
    this.setState({ closeOnEscape, open: true })
  }

  close = () => this.setState({ open: false })

  render() {
    const { open, closeOnEscape } = this.state

    return (
      <div>
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          onClose={this.close}
        >
          <Modal.Header>Delete Your Account</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              No
            </Button>
            <Button
              onClick={this.close}
              positive
              labelPosition='right'
              icon='checkmark'
              content='Yes'
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
export default FormAction;