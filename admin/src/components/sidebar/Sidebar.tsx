import React from 'react';
import styled from 'styled-components';
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
  } from "@mui/icons-material";

const Container=styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    background-color: rgb(251, 251, 255);
    position: sticky;
    top: 50px;
`;
const Wrapper=styled.div`
    padding: 20px;
    color: #555;
`
const Menu=styled.div`
    margin-bottom: 10px;
`;
const Title=styled.h3`
    font-size: 13px;
    color: rgb(187, 186, 186);
`;
const List=styled.ul`
    list-style: none;
    padding: 5px;
`;
const ListItem=styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    &.active:{background-color:rgb(240, 240, 255)};
    &:hover:{background-color:rgb(240, 240, 255)};
`;
const Icon=styled.div`
    margin-right: 5px;
    font-size: 20px !important;
`;

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
            <Title>Dashboard</Title>
            <List>
                <ListItem>
                    <Icon>
                        <LineStyle/>
                    </Icon>
                    Home
                </ListItem>
                <ListItem>
                    <Icon>
                        <Timeline/>
                    </Icon>
                    Analytics
                </ListItem>
                <ListItem>
                    <Icon>
                        <TrendingUp/>
                    </Icon>
                    Sales
                </ListItem>
            </List>
        </Menu>
        <Menu>
            <Title>Quick Menu</Title>
            <List>
                <ListItem>
                    <Icon>
                        <PermIdentity/>
                    </Icon>
                    Users
                </ListItem>
                <ListItem>
                    <Icon>
                        <Storefront/>
                    </Icon>
                    Products
                </ListItem>
                <ListItem>
                    <Icon>
                        <AttachMoney/>
                    </Icon>
                    Transactions
                </ListItem>
                <ListItem>
                    <Icon>
                        <BarChart/>
                    </Icon>
                    Reports
                </ListItem>
            </List>
        </Menu>
        <Menu>
            <Title>Notifications</Title>
            <List>
                <ListItem>
                    <Icon>
                        <MailOutline/>
                    </Icon>
                    Mail
                </ListItem>
                <ListItem>
                    <Icon>
                        <DynamicFeed/>
                    </Icon>
                    Feedback
                </ListItem>
                <ListItem>
                    <Icon>
                        <ChatBubbleOutline/>
                    </Icon>
                    Messages
                </ListItem>
            </List>
        </Menu>
        <Menu>
            <Title>Staff</Title>
            <List>
                <ListItem>
                    <Icon>
                        <WorkOutline/>
                    </Icon>
                    Manage
                </ListItem>
                <ListItem>
                    <Icon>
                        <Timeline/>
                    </Icon>
                    Analytics
                </ListItem>
                <ListItem>
                    <Icon>
                        <Report/>
                    </Icon>
                    Reports
                </ListItem>
            </List>
        </Menu>
      </Wrapper>
    </Container>
  )
}

export default Sidebar
