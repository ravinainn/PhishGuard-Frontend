import React from 'react'
import { InputBar, MonitoringDomain, RegisteredDomain, APIKey } from '../components'
import styled from 'styled-components'
import { Grid, Col, Card, Text, Metric } from "@tremor/react"

const DashBoard = () => {
  return (
    <DashBoardHomeSection>

    <InputSection>
    <InputBar placeHolder="Enter the URL" buttonText="Analyse URL" />
    </InputSection>

      <DomainSection>
        <MonitoringDomain />
        <RegisteredDomain />
        <APIKey />
      </DomainSection>




    </DashBoardHomeSection>
  )
}

export default DashBoard

const DashBoardHomeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4rem;
`

const InputSection = styled.div``

const DomainSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`