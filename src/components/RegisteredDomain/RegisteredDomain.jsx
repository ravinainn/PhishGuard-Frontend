import React from 'react'
import { Card, Text, Metric, Title, Subtitle, List, ListItem, Legend } from '@tremor/react'
import styled from 'styled-components'

const RegisteredDomain = () => {

    const registeredDomain = [
        {
            name: "securebank-login.com",
        },
        {
            name: "official-microsoft-support.net",
        },
        {
            name: "amazon-login-update.org",
        },
        {
            name: "google-account-verification.xyz",
        },
        {
            name: "linkedin-verification-page.net",
        },
        {
            name: "apple-id-login-verification.org",
        },
        {
            name: "educonnect-learning.com",
        },
        {
            name: "eduquest-learning.com",
        },
        {
            name: "learnit-online.edu",
        },
        {
            name: "globalcommercehub.org",
        },
        {
            name: "apexenterprise.net",
        },
        {
            name: "elitebizconsultants.org",
        },
        {
            name: "nextgenbizconsulting.net",
        },
    ]

  return (
    <div>
      <Card>
        <StyledMetric>Newly Registered Domains</StyledMetric>
        <StyledList>
        {registeredDomain.map((item) => {
            return (
                <StyledListItem>
                    <StyledListItemName>{item.name}</StyledListItemName>
                </StyledListItem>
            )
        })}
        </StyledList>
        <StyledText>Daily updated using WHOIS Database</StyledText>
      </Card>
    </div>
  )
}

export default RegisteredDomain

const StyledMetric = styled(Metric)`
  color: ${({ theme }) => theme.palette.black};
  font-size: 1.5rem;
  font-weight: 500;
`

const StyledList = styled(List)`
  margin-top: 1rem;
`

const StyledListItem = styled(ListItem)`
  padding-left: 0.5rem;
  padding-top: 0.5rem;
  
`

const StyledListItemName = styled(Text)`
color: ${({ theme }) => theme.palette.gray};
font-size: 1rem;
font-style: normal;
font-weight: 300;
line-height: normal;
`

const StyledText = styled(Text)`
  margin-top: 0.8rem;
  font-size: 0.75rem;
  font-weight: 400;
  color: ${({ theme} ) => theme.palette.lightgray};
`

