import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components"
import {sliderItems} from "../data"
import {mobile} from "../responsive"


const Container=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}

`;
const Arrow=styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${(props)  => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;


`;
const Wrapper=styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=> props.SlideIndex*-100}vw);
    transition: all 1.5s ease;
`;
const Slide=styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color: ${(props) => props.bg};
`;
const ImgContainer=styled.div`
flex: 1;
height: 100%;
`;
const Img=styled.img`
height:80%;
`;

const InfoContainer=styled.div`
flex: 1;
padding: 50px;
`;
const Title=styled.h1`
font-size: 70px;
    
`;
const Desc=styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
    
`;
const Button=styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
    
`;



 const Slider = () => {
    const [SlideIndex,setSlideIndex]=useState(0);
    const handleClick=(direction)=>{
        if (direction=== "left"){
            setSlideIndex(SlideIndex>0 ? SlideIndex-1 :2);
        }
        else{
            setSlideIndex(SlideIndex<2 ? SlideIndex+1 :0);

        }
    };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeft/>
        </Arrow>
          <Wrapper SlideIndex={SlideIndex}>
            {sliderItems.map(item=>(
                 <Slide bg={item.bg} key={item.id}>
                 <ImgContainer>
                 <Img src={item.img}
                            alt=""/>
                    </ImgContainer>
                 <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc} </Desc>
                    <Button>SHOP NOW</Button>
                 </InfoContainer>
                 </Slide> 
            ))}
           
         </Wrapper>        
      <Arrow direction="right"  onClick={()=>handleClick("right")}>
            <ArrowRight/>
        </Arrow>
    </Container>
  )
}
export default Slider; 