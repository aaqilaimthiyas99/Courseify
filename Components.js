 import styled from 'styled-components';

 export const Container = styled.div`
 background-color: #ffffff;
 border-radius: 5px;
 box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
 position: relative;
 overflow: hidden;
 width: 1512px;
 max-width: 100%;
 min-height: 982px;
 `;

 export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  margin: 15px 0;
  ${props => props.signinIn !== true ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  ` 
  : null}
 `;
 

 export const SignInContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 z-index: 2;
 margin: 60px 0;
 ${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
 `;
 
 export const Form = styled.form`
 background-color: #ffffff;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 padding: 0 50px;
 height: 100%;
 text-align: center;
 `;
 
 export const Title = styled.h1`
 font-weight: bold;
 margin: 0;
 `;
 
 export const Input = styled.input`
 background-color: #eee;
 border: 1px solid #000000;
 padding: 15px 40px;
 margin: 15px 0;
 width: 75%;
 border-radius: 8px;
 `;
 

 export const Button = styled.button`
    border-radius: 8px;
    border: 1px solid #AC7118;
    background-color: #AC7118;
    margin: 20px;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    transition: transform 80ms ease-in;
    &:active{
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
    }
 `;
 export const GhostButton = styled(Button)`
 background-color: #AC7118;
 border-color: #AC7118;
 `;
 
 export const Anchor = styled.a`
 color: #AC7118;
 font-weight: bold;
 font-size: 14px;
 text-decoration: none;
 margin: 15px 0;
 text-align: right;
 `;
 export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
  props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
background: #text-align: center;;
background: rgb(219,167,90);
background: linear-gradient(90deg, rgba(219,167,90,1) 0%, rgba(219,181,104,1) 50%, rgba(219,197,118,1) 100%);
background: rgb(247,247,245);
background: linear-gradient(90deg, rgba(247,247,245,1) 0%, rgba(171,117,36,1) 50%, rgba(217,217,217,1) 100%);

background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #000000;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;
 
 export const OverlayPanel = styled.div`
     position: absolute;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     padding: 0 40px;
     text-align: center;
     top: 0;
     height: 100%;
     width: 50%;
     transform: translateX(0);
     transition: transform 0.6s ease-in-out;
 `;

 export const LeftOverlayPanel = styled(OverlayPanel)`
   transform: translateX(-20%);
   ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
 `;

 export const RightOverlayPanel = styled(OverlayPanel)`
     right: 0;
     transform: translateX(0);
     ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
 `;

 export const Paragraph = styled.p`
 font-size: 16px;
 font-style: Arial;
   font-weight: 100;
   line-height: 20px;
   letter-spacing: 0.5px;
   margin: 25px 150px 25px;
 `;