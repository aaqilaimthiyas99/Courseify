import React from 'react'
import * as Components from '../core/signin_pages'
import { Link } from 'react-router-dom'

export const SignUp = () => {
    const [signIn, toggle] = React.useState(true);
  return (
         <Components.Container>
             <Components.SignUpContainer href = "create_account" signinIn={signIn} id="signup-container">
                 <Components.Form>
                     <Components.Title>Create Your Account</Components.Title>
                     <Components.Input type='text' placeholder='Full Name' />
                     <Components.Input type='email' placeholder='Email' />
                     <Components.Input type='password' placeholder='Password' />
                     <Link to = "/home">
                        <Components.Button>Create Account</Components.Button>
                     </Link>
                     <Components.Paragraph>
                           or
                     </Components.Paragraph>
                     <Components.Button>Sign Up with Google</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>  
            
             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         Stay connected with us for daily updates on free, time-limited courses offered by various websites. Unlock a world of learning opportunities!
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel> 
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
         
     )
}
