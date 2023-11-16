import { Card, Flex, Subtitle, Grid, Col, Divider } from '@tremor/react'
import React from 'react'
import styled from 'styled-components'
import { AnalysedURLSection, CardComponent, ChartScoreSection } from '../components'

const InfoAnalysisPage = () => {

  const registrantInfo = {
    Registrant_ID: 'Not Available From Registry',
    Registrant_Name: 'Jewella Privacy - c4d76',
    Registrant_Email: 'Jewella Privacy LLC Privacy ID# 986669',
    Registrant_Phone: '5043550545',
    Registrant_Country: '70123',
    Registrant_PostalCode: 'US',
  }

  const adminInfo = {
    Admin_Name: 'Jewella Privacy',
    Admin_Organisation: 'Jewella Privacy LLC Privacy ID# 986669',
    Admin_State: 'LA',
    Admin_Country: 'US',
    Admin_PostalCode: '70123',
    Admin_Phone: '5043550545',
    Admin_Email: 'onlinsbi.com@fab.jewellaprivacy.com',
  }

  const domainStatus = {
    domainStatus1: 'clientDeleteProhibited (https://www.icann.org/epp#clientDeleteProhibited)',
    domainStatus2: 'clientTransferProhibited (https://www.icann.org/epp#clientTransferProhibited)',
    domainStatus3: 'clientUpdateProhibited (https://www.icann.org/epp#clientUpdateProhibited)',
  }

  return (
    <div>
      <AnalysedURLSection />
      <ChartScoreSection probabilityScore={92} riskScore={84} />
      <StyledGrid numItems={2} className='gap-3' >
        <CardComponent heading={"Phishing"} value={"Yes"} isPhishing={true} list={false} />
        <CardComponent heading={"Suspicious"} value={"Yes"} isPhishing={true} list={false} />
        <CardComponent heading={"Malicious"} value={"No"} isPhishing={false} list={false} />
        <CardComponent heading={"Unsafe"} value={"Yes"} isPhishing={true} list={false} />
        <CardComponent heading={"Creation Date"} value={"2006-06-21T13:32:14Z"} list={false} />
        <CardComponent heading={"Updation Date"} value={"2022-08-26T23:07:09Z"} list={false} />
        <CardComponent heading={"IP Address"} value={"157.240.251.60"} list={false} />
        <CardComponent heading={"Domain Age"} value={"15 days ago"} isPhishing={true} list={false} />
        <CardComponent heading={"Categorisation"} value={"Login Page"} list={false} />
        </StyledGrid>

        <Divider></Divider>

        
      <StyledGrid numItems={2} className='gap-3 mt-3 mb-12'>
        <CardComponent heading={"Registrant Information"} objInfo={registrantInfo} list={true} />
        <CardComponent heading={"Admin Information"} objInfo={adminInfo} list={true} />
      </StyledGrid>

    </div>
  )
}

export default InfoAnalysisPage

const StyledGrid = styled(Grid)`
  &:not(:last-child) {
    margin-top: 3rem;
  }

`

