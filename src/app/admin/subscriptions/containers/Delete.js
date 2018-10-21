import { connect } from 'react-redux'
import { navigate } from '@reach/router'
import qs from 'qs'

import Delete from '../views/modals/Delete'

import {
  deleteSubscription,
  DELETE_SUBSCRIPTION_SUCCESS
} from '@common/actions/subscriptions'
import { displaySuccessMessage } from '@common/actions/messages'

const mapStateToProps = state => ({
  isProcessing: state.subscriptions.isProcessing
})

const mapDispatchToProps = dispatch => ({
  deleteSubscription(id) {
    dispatch(deleteSubscription(Number(id))).then(action => {
      if (action.type === DELETE_SUBSCRIPTION_SUCCESS) {
        const query = qs.parse(window.location.search.substring(1))
        const search = qs.stringify({
          ...query,
          action: undefined,
          id: undefined
        })
        navigate(`?${search}`)
        dispatch(
          displaySuccessMessage({
            message: 'Your subscription has been deleted successfully',
            key: 'CRUD_PHOTO'
          })
        )
        window.scrollTo(0, 0)
        return
      }

      document.querySelector('#modal').scrollTo(0, 0)
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Delete)
