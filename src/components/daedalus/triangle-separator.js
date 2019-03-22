import React from 'react'
// import Colors from '../assets/styles/colors.scss'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: -1rem;
`

const Line = styled.div`
  position: relative;
  bottom: 1rem;
  width: 120px;
  height:  1px;
  margin: 0 auto;
  background-color: #2cbb69;
  opacity: 0.5;
`;

const ComplexLine = styled.div`
  & {
    position: relative;
    bottom: 1rem;
    width: 50%;
    height:  1px;
    margin: 0 auto;
    background-color: #2cbb69;
    @media (min-width: 960px) {
      width:80%;
    }
  }
  @media (min-width: 960px) {
    &:before, &:after {
      content: '';
      position: absolute;
      width: 50px;
      height: 3px;
      background-color: #2cbb69;
      top: -1px;
    }
    &:before {
      left: 28%;
    }
    &:after {
      right: 25%;
    }
  }
`;

const Triangle = styled.div`
  & {
    position: relative;
    margin: 0 auto;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 26.0px 15px 0 15px;
    border-color: #2cbb69 transparent transparent transparent;
  }
  &:after {
    content: '';
    position: absolute;
    left: -0.8rem;
    top: -1.55rem;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 24px 13px 0 13px;
    border-color: #131325 transparent transparent transparent;
  }
`;

const TriangleSeparator = (props) => (
  <Wrapper>
    <Triangle />
    {props.style && props.style === `complex` ? <ComplexLine /> : <Line />}
  </Wrapper>
)

export default TriangleSeparator