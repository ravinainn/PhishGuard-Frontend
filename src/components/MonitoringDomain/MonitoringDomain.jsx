import React from 'react'
import { Card, Text, Metric, Title, List, ListItem, Subtitle } from '@tremor/react'
import styled from 'styled-components';

const MonitoringDomain = () => {
    
    const phishing = [
        {
            name: "apple-id-verification-login.net",
            value: "90%"
        },
        {
            name: "bank-security-update.biz",
            value: "89%"
        },
        {
            name: "social-network-login.net", 
            value: "91%"
        },
        {
            name: "online-security-check.net",
            value: "92%"
        },
        {
            name: "email-password-reset-login.biz",
            value: "88%"
        },
    ];
    
    const safe = [
        {
            name: "fakebank-login.com",
            value: "7%"
        },
        {
            name: "bank-account-update.com",
            value: "8%"
        }
    ];

    const suspicious = [
        {
            name: "bank-security-update.net",
            value: "70%",
        },
        {
            name: "social-media-verification.biz",
            value: "68%",
        },
        {
            name: "email-login-alert.com",
            value: "72%",
        },
        {
            name: "tech-support-assistance.net",
            value: "69%",
        }
      ];
      
    

  return (
    <div>
    <Card borderRadius="tremor-full" >
      <StyledMetric>Currently Monitoring Domain</StyledMetric>
      <StyledSubtitle color='yellow' >Suspicious</StyledSubtitle>
      <StyledList>
      {suspicious.map((item) => (
        <StyledListItem key={item.city}>
          <StyledListItemName>{item.name}</StyledListItemName>
          <StyledListItemValue color='yellow' >{item.value}</StyledListItemValue>
        </StyledListItem>
      ))}
    </StyledList>

    <StyledSubtitle color='red' >Phishing</StyledSubtitle>
      <StyledList>
      {phishing.map((item) => (
        <StyledListItem key={item.city}>
          <StyledListItemName>{item.name}</StyledListItemName>
          <StyledListItemValue color='red' >{item.value}</StyledListItemValue>
        </StyledListItem>
      ))}
    </StyledList>

    <StyledSubtitle color='green' >Identified & Blocked</StyledSubtitle>
      <StyledList>
      {safe.map((item) => (
        <StyledListItem key={item.city}>
          <StyledListItemName>{item.name}</StyledListItemName>
          <StyledListItemValue color='green' >{item.value}</StyledListItemValue>
        </StyledListItem>
      ))}
    </StyledList>
    </Card>
    </div>
  )
}

export default MonitoringDomain


const StyledSubtitle = styled(Subtitle)`
  font-size: 1.125rem;
  margin-top: 1rem;
  font-weight: 400;
`;

const StyledMetric = styled(Metric)`
  color: ${({ theme }) => theme.palette.black};
  font-size: 1.5rem;
  font-weight: 500;
`

const StyledListItem = styled(ListItem)`
  padding-left: 0.5rem;
  padding-top: 0.5rem;
`

const StyledList = styled(List)``

const StyledListItemName = styled(Text)`
color: ${({ theme }) => theme.palette.gray};
font-size: 1rem;
font-style: normal;
font-weight: 300;
line-height: normal;
`

const StyledListItemValue = styled(Text)`
font-size: 1rem;
font-weight: 300;
`