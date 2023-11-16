import React from 'react'
import { AnalysedURLSection, CardComponent, ChartScoreSection, ChartTrafficAnalysis } from '../components'
import { Grid, Metric } from '@tremor/react'
import styled from 'styled-components'

const DomainAnalysisPage = () => {
  return (
    <div>
      <AnalysedURLSection />
      <ChartScoreSection probabilityScore={92} riskScore={84} />
      <ChartTrafficAnalysis />

      <AnalysisContainer>
      <StyledMetric>Lexical <br/> Analysis</StyledMetric>
      <StyledGrid numItems={2} className='gap-3' >
        <CardComponent heading={"URL Length"} value={"37"} list={false} />
        <CardComponent heading={"IP Address in URL?"} value={"No"} list={false} />
        <CardComponent heading={"HTTPS Secure ?"} value={"No"} list={false} />
        <CardComponent heading={"URL having @"} value={"No"} list={false} />
        <CardComponent heading={"URL having //"} value={"No"} list={false} />
        <CardComponent heading={"URL seperated by (-)"} value={"Yes"} list={false} />
      </StyledGrid>
      </AnalysisContainer>

      <AnalysisContainer>
      <StyledMetric>Morphological <br/> Analysis</StyledMetric>
      <StyledGrid numItems={2} className='gap-3' >
        <CardComponent heading={"Typosquatted"} value={"No"} list={false} />
        <CardComponent heading={"Prefix or Suffux usage"} value={"Yes"} list={false} />
        <CardComponent heading={"Multiple Subdomain"} value={"No"} list={false} />
        <CardComponent heading={"Top Level Domain Analysis"} value={"No"} list={false} />
        <CardComponent heading={"Query Parameters"} value={"No"} list={false} />
        <CardComponent heading={"Protocol Mismatch"} value={"No"} list={false} />
      </StyledGrid>
      </AnalysisContainer>

      <AnalysisContainer>
      <StyledMetric>Ranking <br/> Analysis</StyledMetric>
      <StyledGrid numItems={2} className='gap-3' >
        <CardComponent heading={"Website Rank "} value={"1,234,567"} list={false} />
        <CardComponent heading={"Google Index Rank"} value={"Not Indexed"} list={false} />
        <CardComponent heading={"Page Rank"} value={"0"} list={false} />
      </StyledGrid>
      </AnalysisContainer>

      <AnalysisContainer>
      <StyledMetric>Security <br/> Analysis</StyledMetric>
      <StyledGrid numItems={2} className='gap-3 mb-12' >
        <CardComponent heading={"SSL Certificate"} value={"No"} list={false} />
        <CardComponent heading={"Age of Domain"} value={"Less than a month"} list={false} />
        <CardComponent heading={"Age of Certificate"} value={"Null"} list={false} />
      </StyledGrid>
      </AnalysisContainer>

    </div>
  )
}

export default DomainAnalysisPage

const StyledMetric = styled(Metric)`
  color: ${({ theme }) => theme.palette.secondary};
  font-size: 2.3rem;
  font-weight: 700;
  margin-top: 2rem;
  line-height: 128%;
`

const StyledGrid = styled(Grid)`
  margin-top: 1.5rem;
`

const AnalysisContainer = styled.div`
  margin-top: 2rem;
`