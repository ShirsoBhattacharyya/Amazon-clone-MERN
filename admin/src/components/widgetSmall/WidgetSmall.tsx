import React from 'react'
import styled from 'styled-components';
import { Visibility } from "@mui/icons-material";

const Container=styled.div`
    flex: 1;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
    margin-right: 20px;
`;
const Title=styled.span`
    font-size: 22px;
    font-weight: 600;
`;
const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;
const ListItem=styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
`;
const Image=styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;
const User=styled.div`
    display: flex;
    flex-direction: column;
`;
const Username=styled.span`
    font-weight: 600;
`;
const Usertitle=styled.span`
    font-weight: 300;
`;
const Button=styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #eeeef7;
    color: #555;
    cursor: pointer;
`;
const Icon=styled.div`
    font-size: 16px !important;
    margin-right: 5px;
`;

const WidgetSmall = () => {
  return (
    <Container>
        <Title>New Members</Title>
        <List>
            <ListItem>
                <Image src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
                <User>
                    <Username>Anna Keller</Username>
                    <Usertitle>Software Engineer</Usertitle>
                </User>
                <Button>
                    <Icon>
                        <Visibility/>
                    </Icon>
                    Display
                </Button>
            </ListItem>
            <ListItem>
                <Image src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
                <User>
                    <Username>Anna Keller</Username>
                    <Usertitle>Software Engineer</Usertitle>
                </User>
                <Button>
                    <Icon>
                        <Visibility/>
                    </Icon>
                    Display
                </Button>
            </ListItem>
            <ListItem>
                <Image src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
                <User>
                    <Username>Anna Keller</Username>
                    <Usertitle>Software Engineer</Usertitle>
                </User>
                <Button>
                    <Icon>
                        <Visibility/>
                    </Icon>
                    Display
                </Button>
            </ListItem>
            <ListItem>
                <Image src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
                <User>
                    <Username>Anna Keller</Username>
                    <Usertitle>Software Engineer</Usertitle>
                </User>
                <Button>
                    <Icon>
                        <Visibility/>
                    </Icon>
                    Display
                </Button>
            </ListItem>
            <ListItem>
                <Image src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
                <User>
                    <Username>Anna Keller</Username>
                    <Usertitle>Software Engineer</Usertitle>
                </User>
                <Button>
                    <Icon>
                        <Visibility/>
                    </Icon>
                    Display
                </Button>
            </ListItem>
        </List>
    </Container>
  )
}

export default WidgetSmall
