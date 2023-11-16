import React, { useState } from 'react'
import styled from 'styled-components'
import { DynamicIcon } from '../../Utils';
import { HomeIcon, AnalyticsIcon, ContactIcon, KeyIcon, SettingsIcon, SubscriptionIcon, ModelIcon, ArrowIcon } from '../../Utils/Icon';
import { Link } from 'react-router-dom';


const SideBar = () => {

    const [isfFocus, setIsFocus] = useState(false);


  return (
    <SideBarContainer>
      <Logo className='logo'><span className='blue'>Phish</span>Guard</Logo>

      <SidebarBtnGroup>
        <SidebarBtn>
          <DynamicIcon svgCode={HomeIcon} /> 
          <SidebarBtnTitle> 
            <Link to='/'>
              Home
            </Link> 
          </SidebarBtnTitle>
        </SidebarBtn>
        <SideBarList>
        <SidebarBtn>
          <DynamicIcon svgCode={AnalyticsIcon} />
          <SidebarBtnTitle>
            <Link to='info'> Analytics & Report </Link>
          </SidebarBtnTitle>
          </SidebarBtn>
          <SideBarListItem> 
            <DynamicIcon svgCode={ArrowIcon} />
            <Link to='info'> Information Based Analysis </Link> 
          </SideBarListItem>
          <SideBarListItem> 
            <DynamicIcon svgCode={ArrowIcon} />
            <Link to='domain'> Domain Based  Analysis </Link> 
          </SideBarListItem>
          <SideBarListItem> 
            <DynamicIcon svgCode={ArrowIcon} />
            <Link to='web-content'> Web Content Based Analysis </Link> 
          </SideBarListItem>
        </SideBarList>
      </SidebarBtnGroup>

      <SidebarBtnGroup>
        <SidebarBtn>
        <DynamicIcon svgCode={KeyIcon} />
        <SidebarBtnTitle>API Keys</SidebarBtnTitle>
        </SidebarBtn>
        <SidebarBtn>
        <DynamicIcon svgCode={ModelIcon} />
        <SidebarBtnTitle>Model</SidebarBtnTitle>
        </SidebarBtn>
      </SidebarBtnGroup>

      <SidebarBtnGroup>
        <SidebarBtn>
        <DynamicIcon svgCode={SubscriptionIcon} />
        <SidebarBtnTitle>Subscription</SidebarBtnTitle>
        </SidebarBtn>
        <SidebarBtn>
        <DynamicIcon svgCode={SettingsIcon} />
        <SidebarBtnTitle>Settings</SidebarBtnTitle>
        </SidebarBtn>
        <SidebarBtn>
        <DynamicIcon svgCode={ContactIcon} />
        <SidebarBtnTitle>Contact</SidebarBtnTitle>
        </SidebarBtn>
      </SidebarBtnGroup>

    </SideBarContainer>
  )
}

export default SideBar


const SideBarContainer = styled.div`
  background: ${({ theme }) => theme.palette.white};
  margin: 2.25rem 6rem;
  border-radius: 2rem;
  width: 20%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.5rem;

  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`

const Logo = styled.h1`
  margin: 2.38rem 0 -0.5rem 1.5rem;
`

const SidebarBtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.06rem;
  position: relative;
  &:not(:last-child)::after{
    content: "";
    background-color: #BBBBBB;
    width: 18rem;
    height: 0.0625rem;
    position: absolute;
    bottom: -1.25rem;
    left: 1.35rem;
  }
`

const SidebarBtnTitle = styled.p`
color: ${({theme}) => theme.palette.black};
font-size: 1.25rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const SidebarBtn = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: 2.31rem;
  cursor: pointer;
`

const SideBarList = styled.ul`
  list-style: none;
`

const SideBarListItem = styled.li`
  margin-left: 2.87rem;
  font-size: 1.1rem;
  width: 70%;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.62rem;

  &:not(:first-child) {
    margin-top: 0.94rem;
  }
`