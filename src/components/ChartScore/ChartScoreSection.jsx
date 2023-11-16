import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex, Metric, ProgressCircle, Text } from '@tremor/react'

const ChartScoreSection = ({probabilityScore, riskScore}) => {

    const pscore = probabilityScore;
    const rscore = riskScore;

    const [isPhishing, setIsPhishing] = useState();

  return (
    <ScoreSection>
      <Flex justifyContent='evenly' >
       {probabilityScore && 
        <div>
        <ProgressCircle 
        value={pscore} 
        size="xl" 
        radius={128} 
        strokeWidth={26}
        showAnimation={true}
        color="cyan"
        tooltip='Probability Score'>

          <ScoreValue>{pscore}</ScoreValue>

      </ProgressCircle>
      <StyledMetric>Probability Score</StyledMetric>
        </div>
        
      }
        
       {riskScore &&
        <div>
        <div>
        <ProgressCircle 
          value={rscore} 
          size="xl" 
          radius={128} 
          strokeWidth={26}
          showAnimation={true}
          color={pscore > 50 ? 'red' : 'cyan'}
          tooltip='Risk Score'>
 
            <ScoreValue>{rscore}</ScoreValue>
 
        </ProgressCircle>
        <StyledMetric>Risk Score</StyledMetric>
       </div>
        </div>
      }
      </Flex>
    </ScoreSection>
  )
}

export default ChartScoreSection

const ScoreSection = styled.div`
  margin-top: 2.5rem;
`

const ScoreValue = styled(Text)`
  font-size: 6rem;
  color: ${({ theme }) => theme.palette.black};
  font-weight: 500;
  font-style: normal;
  font-style: normal;
  text-align: center;
`

const StyledMetric = styled(Metric)`
  color: ${({ theme }) => theme.palette.black};
  font-size: 1.5rem;
  text-align: center;
  font-weight: 400;
  margin-top: 1.5rem;
`