import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { SideBar } from '../components'
import styled from 'styled-components'
import AvatarImg from '../assets/avatar.png'

const RootLayout = () => {
  return (
    <LayoutSection>
      <SideBar />
      <Main>
        <AvatarDashboardIcon>
          <AvatarDashboardHeading>Dashboard</AvatarDashboardHeading>
          <AvatarImage src={AvatarImg} alt='Avatar' />
        </AvatarDashboardIcon>

        <Outlet />
      </Main>
    </LayoutSection>
  )
}

export default RootLayout


const LayoutSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const AvatarDashboardIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
`

const AvatarDashboardHeading = styled.h1`
  color: ${({ theme }) => theme.palette.black};
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;  
`

const AvatarImage = styled.img`
  width: 3.5rem;
  height: 3.5rem;
`

const Main = styled.main`
  margin: 2.37rem 6rem 0 0;
  width: 62%;
`