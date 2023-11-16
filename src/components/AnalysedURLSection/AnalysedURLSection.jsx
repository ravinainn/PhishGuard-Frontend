import React from 'react'
import styled from 'styled-components'
import { Card, Flex, Subtitle } from '@tremor/react'

const AnalysedURLSection = () => {
  return (
    <MonitorSection>
     <Flex>
      <StyledCard>
        <Subtitle>social-media-account-check.net</Subtitle>
        </StyledCard>
        <InputButton>Add URL to Monitoring</InputButton>
     </Flex>
    </MonitorSection>
  )
}

export default AnalysedURLSection

const MonitorSection = styled.div`
  margin-top: 2.88rem;
`

const StyledCard = styled(Card)`
  border-radius: 1rem;
  width: 59%;
  padding: 0.8rem 0 0.8rem 1.5rem;
`

const InputButton = styled.button`
  width: 40%;
  text-align: center;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.secondary};
  padding: 0.45rem;
  border-radius: 1rem;
`