import React from 'react';
import styled from 'styled-components';

const Btn=styled.button``;
const Container=styled.div``;

const WidgetLarge = () => {
    const Button=(props:any)=>{
        const {type}=props;
        return <Btn type={type}>{type}</Btn>
    }
  return (
    <Container>
      
    </Container>
  )
}

export default WidgetLarge
