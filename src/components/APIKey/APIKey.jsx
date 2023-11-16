import { Card, Legend, Metric, Subtitle, Text } from "@tremor/react"
import styled from "styled-components"


const APIKey = () => {
  return (
    <div>
    <Card >
      <StyledMetric> API Key</StyledMetric>
      <StyledSubtitle>1234567890abcdef1234567890abcdef</StyledSubtitle>
      <StyledLegend categories={["Working Properly"]}
      colors={["emerald"]}></StyledLegend>
    </Card>
    </div>
  )
}

export default APIKey

const StyledMetric = styled(Metric)`
  color: ${({ theme }) => theme.palette.black};
  font-size: 1.5rem;
  font-weight: 500;
`

const StyledLegend = styled(Legend)`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${({ theme} ) => theme.indicator.clean};
  margin-top: 0.5rem;
`

const StyledSubtitle = styled(Subtitle)`
  font-size: 1.125rem;
  font-weight: 400;
  margin-top: 0.5rem;
`;