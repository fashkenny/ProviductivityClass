import React from 'react'
import { styled } from 'styled-components'
import ChartDone from './ChartDone'

const MostTAsk = () => {
  return (
    <div>
        <Container>
        <ChartDone/>
        </Container>
        </div>
  )
}

export default MostTAsk
const Container = styled.div`
display:flex;
width: calc(100% - 20%);
height: 300px;
padding-top: 50px;
margin-left: 260px;
`
