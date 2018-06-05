import React from 'react'
import PropTypes from 'prop-types'

const Pager = (props = {}) => {
  return (
    <ul className="pager">
      {props.first && (
        <li className="pager__item">
          <a
            className="btn btn--gray"
            title="First page"
            href={`/admin/photos/page/${props.first}`}
          >
            ««
          </a>
        </li>
      )}

      {props.prev && (
        <li className="pager__item">
          <a
            className="btn btn--gray"
            title="Previous page"
            href={`/admin/photos/page/${props.prev}`}
          >
            «
          </a>
        </li>
      )}

      {props.next && (
        <li className="pager__item">
          <a
            className="btn btn--gray"
            title="Next page"
            href={`/admin/photos/page/${props.next}`}
          >
            »
          </a>
        </li>
      )}

      {props.last && (
        <li className="pager__item">
          <a
            className="btn btn--gray"
            title="Last page"
            href={`/admin/photos/page/${props.last}`}
          >
            »»
          </a>
        </li>
      )}
    </ul>
  )
}

Pager.propTypes = {
  first: PropTypes.number,
  prev: PropTypes.number,
  next: PropTypes.number,
  last: PropTypes.number
}

export default Pager