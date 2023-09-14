import React from "react";
import * as Components from './Components';

function App() {
    const [signIn, toggle] = React.useState(true);
     return(
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Create Your Account</Components.Title>
                     <Components.Input type='text' placeholder='Full Name' />
                     <Components.Input type='email' placeholder='Email' />
                     <Components.Input type='password' placeholder='Password' />
                     <Components.Button>Create Account</Components.Button>
                     <Components.Paragraph>
                           or
                     </Components.Paragraph>
                     <Components.Button>Sign Up with Google</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Sign In</Components.Title>
                      <Components.Paragraph>
                           Enter the information you entered while registering. 
                     </Components.Paragraph>
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Anchor href='#'><b>Forgot password?</b></Components.Anchor>
                      <Components.Button>Sigin In</Components.Button>
                      <Components.Paragraph>
                           or
                     </Components.Paragraph>
                      <Components.Button>Sign In with Google</Components.Button>
                      <Components.Paragraph>
                           Don’t have an account? <b>Create</b> 
                     </Components.Paragraph>
                  </Components.Form>
             </Components.SignInContainer>

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

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello!</Components.Title>
                       <Components.Paragraph>
                           Enter your personal details and start journey with us.
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sigin Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
     )
}

export default App;