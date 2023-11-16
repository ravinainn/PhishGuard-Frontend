import React from 'react'
import { AnalysedURLSection, ChartScoreSection, CardComponent } from '../components'
import styled from 'styled-components'
import { Grid, Metric } from '@tremor/react'

const WebContentAnalysisPage = () => {
  return (
    <div>
      <AnalysedURLSection />
      <ChartScoreSection probabilityScore={96} />

      <AnalysisContainer>
      <StyledMetric>Script <br/> Analysis</StyledMetric>
      <StyledGrid numItems={2} className='gap-3' >
        <CardComponent heading={"Links in <script>"} value={"Yes"} list={false} />
        <CardComponent heading={"Right Click disabled ?"} value={"Yes"} list={false} />
        <CardComponent heading={"State Change on Mouse Over"} value={"Yes"} list={false} />
        <CardComponent heading={"Valid DNS Record ?"} value={"No"} list={false} />
      </StyledGrid>
      </AnalysisContainer>

      <AnalysisContainer>
      <StyledMetric>PHP <br/> Analysis</StyledMetric>
      <StyledGrid numItems={2} className='gap-3' >
        <CardComponent heading={"Submiting to 'mailto' "} value={"Yes"} list={false} />
      </StyledGrid>
      </AnalysisContainer>

      <AnalysisContainer>
      <StyledMetric>Form <br/> Analysis</StyledMetric>
      <StyledGrid numItems={2} className='gap-3' >
        <CardComponent heading={"Sending Data to Suspicious Website"} value={"Yes"} list={false} />
        <CardComponent heading={"Website Link"} value={"http://sus.login.tk"} list={false} />
        <CardComponent heading={"Asking for Confidential Credential Data"} value={"Yes"} list={false} />
      </StyledGrid>
      </AnalysisContainer>

      <AnalysisContainer>
      <StyledMetric>Content <br/> Analysis</StyledMetric>
      <StyledGrid numItems={2} className='gap-3 mb-12' >
        <CardComponent heading={"Suspicious Anchor Tag"} value={"Yes"} list={false} />
        <CardComponent heading={"Popup contains text fields"} value={"Yes"} list={false} />
        <CardComponent heading={"No. of Redirected Pages"} value={"0"} list={false} />
        <CardComponent heading={"Importing Images "} value={"No"} list={false} />
        <CardComponent heading={"Uses Iframe "} value={"No"} list={false} />
        <CardComponent heading={"No. of links pointing to pages "} value={"1"} list={false} />
      </StyledGrid>
      </AnalysisContainer>

      
    </div>
  )
}

export default WebContentAnalysisPage

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