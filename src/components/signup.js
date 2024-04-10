// // Signup.js

// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
// import example from '../images/s4.png'; // Import your image
// import './signup.css'
// const Signup = () => {
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const handleSignup = () => {
//     // Perform signup actions

//     // Redirect to the profile page after sign-up
//     navigate('/profile');
//   };

//   return (
//     <div className="container">
//       <div className="left-section">
//         <h4>dripple</h4>
//         <h2>Discover the world top designers &creatives</h2>
//         <img src={example} alt="Example" />
//         Left Section
//       </div>
//       <div className="right-section">
//         {/* Content for the right section */}
//         <h2>Sign up to Dribble</h2>
//         <form>
//           <div className="input-group">
//             <label htmlFor="username">Username:</label>
//             <input type="text" id="username" name="username" />
//           </div>
//           <div className="input-group">
//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" name="email" />
//           </div>
//           <div className="input-group">
//             <label htmlFor="password">Password:</label>
//             <input type="password" id="password" name="password" />
//             <div>
//               <p>creating an account means you are okay with our terms of services privacy policy and our default Notification settings</p>
//             </div>
//           </div>
//           <button type="button" onClick={handleSignup}>Sign Up</button> {/* Use onClick event to trigger sign-up */}
//           <div>
//             <p>this site is protected by reCaptcha and the google Privacy policy and terms of service apply </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// import React from 'react';
// import "./signup.css" // Import CSS file for styling
// import { useNavigate } from 'react-router-dom';
// import example from '../images/s4.png';
// const Signup = () => {
  
//       const navigate = useNavigate(); // Initialize useNavigate hook
    
//       const handleSignup = () => {
//         // Perform signup actions
    
//         // Redirect to the profile page after sign-up
//         navigate('/profile');
//       };
    
//   return (
//     <div className="cont1">
//       <div className="left-section">
//         <h1>dribble</h1>
//         <h2>Discover the world top designers & creatives</h2>
//         <img src={example} alt="Image" />
//         <p className="small-text">Art by Peter Tarka</p>
//       </div>
//       <div className="right-section">
//       <div className='already'>
//           <p>Already a member? Sign in</p>
//           </div>
//         <div className="right-top">
//         <h2 className='sign'>Sign up to Dribble</h2>
//         </div>
       
       
//         <form>
//           <div className="input-group2">
//             <label htmlFor="name" className='label'>Name:</label>
//             <input type="text" id="name" name="name" />
//             <label htmlFor="username" className='label2'>Username:</label>
//             <input type="text" id="name" name="name" />
//           </div>
//           <div className="input-group">
//             <label htmlFor="email" className='label'>Email:</label>
//             <input type="email" id="email" name="email" />
//           </div>
//           <div className="input-group">
//             <label htmlFor="password" className='label'>Password:</label>
//             <input type="password" id="password" name="password" />
//           </div>
//           <div className="terms">
//             <input type="checkbox" id="terms-checkbox" />
//             <p htmlFor="terms-checkbox"> Creating an account means you are okay with our <span className='change-color'>terms of services privacy policy</span> and our default Notification settings</p>
//           </div>
//           <button type="submit" onClick={handleSignup}>Create Account</button>
//           <div className="captcha-text">
//             <p>This site is protected by reCaptcha and the Google Privacy Policy and Terms of Service apply</p>
//           </div>
         
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;




import React, { useState } from 'react';
import "./signup.css"; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';
import example from '../images/s4.png';

const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [username, setUsername] = useState('');
  const [usernameTaken, setUsernameTaken] = useState(false);

  const handleSignup = () => {
    // Perform signup actions

    // Redirect to the profile page after sign-up
    navigate('/profile');
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    // Check if the username is already taken (you need to implement this logic)
    const isUsernameTaken = checkIfUsernameTaken(event.target.value);
    setUsernameTaken(isUsernameTaken);
  };

  const checkIfUsernameTaken = (newUsername) => {
    // Example logic to check if the username is taken
    const existingUsernames = ['john_doe', 'jane_smith']; // Array of existing usernames
    return existingUsernames.includes(newUsername);
  };

  return (
    <div className="cont1">
      <div className="left-section">
        <h1>dribbble</h1>
        <h2>Discover the world top designers & creatives</h2>
        <img src={example} alt="Image" />
        <p className="small-text">Art by Peter Tarka</p>
      </div>
      <div className="right-section">
        <div className="already">
          <p>Already a member?{' '}
              <span className="change-color">
              Sign in
              </span>{' '} </p>
        </div>
        <div className="right-top">
          <h2 className="sign">Sign up to Dribble</h2>
        </div>

        <form>
        {usernameTaken && (
              <p className="error">Username is already taken.</p>
            )}
          <div className="input-group2">
            <label htmlFor="name" className="label">
              Name:
            </label>
            <input type="text" id="name" name="name" />
            <label htmlFor="username" className="label2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
           
          </div>
          <div className="input-group">
            <label htmlFor="email" className="label">
              Email:
            </label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="label">
              Password:
            </label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="terms">
            <input type="checkbox" id="terms-checkbox" />
            <p htmlFor="terms-checkbox">
              Creating an account means you are okay with our{' '}
              <span className="change-color">
                terms of services privacy policy
              </span>{' '}
              and our default {' '}
              <span className="change-color">
              Notification settings
              </span>{' '}
            </p>
          </div>
          <button type="submit" onClick={handleSignup}>
            Create Account
          </button>
          <div className="captcha-text">
            <p>
              This site is protected by reCaptcha and the Googler{' '}
              <span className="change-color">
              Privacy Policy
              </span>{' '} 
              and {' '}
              <span className="change-color">
              Terms of Service
              </span>{' '}  apply
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
