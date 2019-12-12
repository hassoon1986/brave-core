import styled from 'styled-components'

export const Indicator = styled('div')`
  position: absolute;
  top: 5px;
  right: 5px;
  visibility: hidden;
  width: 20px;
  color: white;
`

export const Anchor = styled('a')`
  display: block;
  cursor: pointer;
  &:hover ${Indicator} {
    visibility: visible;
  }
`

export const Image = styled('img')`
  width: 170px;
`
