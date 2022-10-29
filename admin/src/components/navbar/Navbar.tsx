import React from 'react';
import styled from 'styled-components';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import Badge from '@mui/material/Badge';

const Container=styled.div`
    width:100%;
    height:50px;
    background-color:white;
    position:sticky;
    top:0;
    z-index:999;
`
const Wrapper=styled.div`
    height:100%;
    padding:0px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const Left=styled.div`

`
const Right=styled.div`
    display:flex;
    align-items:center;
    gap:10px;
`
const Logo=styled.span`
    font-weight:bold;
    font-size:30px;
    cursor:pointer;
`;

const Icon=styled.div`
    color:#555;
    position:relative;
`
const Image=styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
    cursor:pointer;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Logo>TWEEK.</Logo>
        </Left>
        <Right>
            <Icon>
                <Badge badgeContent={2} color='primary'>
                    <NotificationsNoneIcon/>
                </Badge>
            </Icon>
            <Icon>
                <Badge badgeContent={2} color='primary'>
                    <LanguageIcon/>
                </Badge>
            </Icon>
            <Icon>
                <SettingsIcon/>
            </Icon>
            <Icon>
                <Image src='https://media-exp1.licdn.com/dms/image/D5603AQGij1OMmM4ZXA/profile-displayphoto-shrink_200_200/0/1665811799424?e=1672272000&v=beta&t=w8aErdWoaCo_EUYKvbJuYHfePbnZPczTZ7A_HJv8vRs'/>
            </Icon>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
