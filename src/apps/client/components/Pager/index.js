import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import usePagination from '@common/hooks/usePagination'

import { Button } from '../Button'

const StyledPager = styled.ul`
  margin: 0 0 8.5rem;
  padding: 0;
  text-align: center;

  > li {
    display: inline-block;
    margin: 0 0.5rem;
  }
`

const Pager = ({ navigate, ...props }) => {
  const items = usePagination(props)

  const handleClick = useCallback(page => () => navigate(page), [navigate])

  return (
    <StyledPager>
      {items.map((item, key) => (
        <li key={key}>
          <Button title={item.title} onClick={handleClick(item.page)}>
            {item.label}
          </Button>
        </li>
      ))}
    </StyledPager>
  )
}

Pager.propTypes = {
  navigate: PropTypes.func.isRequired,
  first: PropTypes.number,
  prev: PropTypes.number,
  next: PropTypes.number,
  last: PropTypes.number
}

export default Pager
