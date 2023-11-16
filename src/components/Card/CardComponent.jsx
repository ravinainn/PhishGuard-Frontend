import React from 'react'
import { Card, List, ListItem, Metric, Text } from '@tremor/react'
import styled from 'styled-components'

const CardComponent = ({ heading, value, list, objInfo, isPhishing }) => {


  return (
    <div>
      <Card >
        <StyledMetric>{heading}</StyledMetric>
        <StyledText>{value}</StyledText>
        {list && 
            <List>
            {Object.entries(objInfo).map(([key, value]) => (
              <StyledListItem key={key}>{key}: {value}</StyledListItem>
            ))}
          </List>
            }
      </Card>
    </div>
  )
}

export default CardComponent

const StyledMetric = styled(Metric)`
  color: ${({ theme }) => theme.palette.black};
  font-size: 1.5rem;
  font-weight: 600;
  font-style: normal;
  line-height: normal;
`

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.palette.black};
  font-size: 1.125rem;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  margin-top: 1rem;
`

const StyledListItem = styled(ListItem)`
color: ${({ theme }) => theme.palette.black};
font-size: 1.125rem;
font-weight: 400;
padding: 0.5rem;
`