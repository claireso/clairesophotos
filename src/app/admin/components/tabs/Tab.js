/* eslint indent: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
import styled from 'styled-components'

const getProps = ({ isCurrent, isPartiallyCurrent }) => {
  return isCurrent || isPartiallyCurrent
    ? {
        style: {
          background: 'var(--hightlight)',
          color: 'var(--text)'
        }
      }
    : null
}

const StyledTab = styled.li`
  a {
    background: var(--secondary);
    border-bottom: none;
    color: var(--text);
    display: inline-block;
    font-size: 1.4rem;
    padding: 2rem;
    text-decoration: none;
  }
`

const Tab = (props = {}) => {
  return (
    <StyledTab>
      <Link to={props.to} getProps={getProps}>
        {props.children}
      </Link>
    </StyledTab>
  )
}

Tab.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Tab
