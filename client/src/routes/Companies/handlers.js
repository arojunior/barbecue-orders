import {cancelOrder} from '../../modules/Orders'

const ModalConfirm = ({dispatch, id}) =>
  <Modal.Dialog>
    <Modal.Header>
      <Modal.Title>Cancel Order</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      Do you really want to cancel the Order #{id} ?
    </Modal.Body>

    <Modal.Footer>
      <Button bsStyle="info">No</Button>
      <Button bsStyle="primary" onClick={() => dispatch(cancelOrder(id))}>
        Yes
      </Button>
    </Modal.Footer>
  </Modal.Dialog>

export const cancelOrderConfirm = ({dispatch}) => id =>
  ModalConfirm({dispatch, id})
