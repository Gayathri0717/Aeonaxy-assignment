// // Profile.js

// import React from 'react';
// import { FaCamera } from 'react-icons/fa'; // Import camera icon from react-icons library
// import './profile.css'; // Import CSS file for styling

// const Profile = () => {
//   return (
//     <div className="container">
//       <div className="top-left-section">
//         <h1>dibble</h1>
//         <div className="centered-text">
//           <p className='welcome'>Welcome, let's create your project</p>
//           <p className='sub'>Let others get to know you better</p>
//           <p className='add'>Add an avatar</p>
//           <div className="avatar-section">
//             <div className="avatar">
//               <FaCamera className="camera-icon" />
//             </div>
//             <div className='img'>
//             <p className="image-text">Image</p>
//             <p>choose an image</p>
//             </div>
//           </div>
//           <p>Add your location</p>
//           <input type="text" placeholder="Your location" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


// import React, { useRef, useState } from 'react';
// import { FaCamera } from 'react-icons/fa'; 
// import './profile.css'; // Import CSS file for styling
// import { useNavigate } from 'react-router-dom';
// const Profile = () => {
//   const fileInputRef = useRef(null); // Reference to file input element
//   const [imagePreview, setImagePreview] = useState(null); // State to store image preview
//   const navigate = useNavigate(); 
//   const handleCameraIconClick = () => {
//     fileInputRef.current.click(); // Trigger click event of file input
//   };

//   const handleFileInputChange = (event) => {
//     const selectedFile = event.target.files[0]; // Get the selected file

//     // Check if selected file is an image
//     if (selectedFile && (selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/png')) {
//       const reader = new FileReader();

//       reader.onload = () => {
//         // Update image preview state with the data URL of the selected image
//         setImagePreview(reader.result);
//       };

//       reader.readAsDataURL(selectedFile); // Read the selected file as a data URL
//     } else {
//       // Handle error if selected file is not an image
//       alert('Please select a valid JPG or PNG image file.');
//     }
//   };
//   const handleButtonClick = () => {
//     // Navigate to Select.js with image preview data as state
//     navigate('/select', { state: { avatarImage: imagePreview } });
//   };
//   // const handleButtonClick2 = () => {
//   //   // Navigate to Select.js
//   //   navigate('/select');  
//   // };
//   return (
//     <div className="cont2">
//       <div className='top-left-section'>
//         <h2>dibble</h2>
//       <div className="centered-text">
//         <h1 className='welcome'>Welcome!Let's create your project</h1>
//         <p className='describe'>Let others get to know you better!You can do these later</p>  
//         <p>Add an avatar</p>
//         <div className="avatar-section">
//           <div className="avatar" onClick={handleCameraIconClick}>
//             {/* Display the image preview if available, otherwise display the camera icon */}
//             {imagePreview ? (
//               <img src={imagePreview} alt="Avatar" className="avatar-image" />
//             ) : (
//               <FaCamera className="camera-icon" />
//             )}
//           </div>
//           <div className='img'>
//             <p className="image-text"> Choose Image</p>
//             <p className="image-text">or choose one of our defaults</p>
//             <input
//               type="file"
//               accept="image/jpeg, image/png" // Accept only JPG and PNG files
//               onChange={handleFileInputChange}
//               ref={fileInputRef} // Connect file input element to ref
//               style={{ display: 'none' }} // Hide the file input element
//             />
//           </div>
//         </div>
//         <p>Add your location</p>
//         <input type="text" placeholder="Enter a location" />
        
//         <button className="next"onClick={handleButtonClick}>Next</button>  
//         <p className='return'>or Press RETURN</p> 
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;




import React, { useRef, useState } from 'react';
import { FaCamera,  FaAngleLeft } from 'react-icons/fa'; // Import the FaArrowLeft icon
import './profile.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const fileInputRef = useRef(null); // Reference to file input element
  const [imagePreview, setImagePreview] = useState(null); // State to store image preview
  const navigate = useNavigate(); 

  const handleCameraIconClick = () => {
    fileInputRef.current.click(); // Trigger click event of file input
  };

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0]; // Get the selected file

    // Check if selected file is an image
    if (selectedFile && (selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/png')) {
      const reader = new FileReader();

      reader.onload = () => {
        // Update image preview state with the data URL of the selected image
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(selectedFile); // Read the selected file as a data URL
    } else {
      // Handle error if selected file is not an image
      alert('Please select a valid JPG or PNG image file.');
    }
  };

  const handleButtonClick = () => {
    // Navigate to Select.js with image preview data as state
    navigate('/select', { state: { avatarImage: imagePreview } });
  };

  return (
    <div className="cont2">
      <div className='top-left-section'>
        <div className="header">
        <h2>dribbble</h2>
          <div className="back-icon" onClick={() => navigate(-1)}>
            < FaAngleLeft className="icon" />
          </div>
         
        </div>
        <div className="centered-text">
          <h1 className='welcome'>Welcome! Let's create your project</h1>
          <p className='describe'>Let others get to know you better! You can do these later</p>  
          <p>Add an avatar</p>
          <div className="avatar-section">
            <div className="avatar" onClick={handleCameraIconClick}>
              {/* Display the image preview if available, otherwise display the camera icon */}
              {imagePreview ? (
                <img src={imagePreview} alt="Avatar" className="avatar-image" />
              ) : (
                <FaCamera className="camera-icon" />
              )}
            </div>
            <div className='img'>
              <p className="image-text"> Choose Image</p>
              <p className="image-text">or choose one of our defaults</p>
              <input
                type="file"
                accept="image/jpeg, image/png" // Accept only JPG and PNG files
                onChange={handleFileInputChange}
                ref={fileInputRef} // Connect file input element to ref
                style={{ display: 'none' }} // Hide the file input element
              />
            </div>
          </div>
          <p>Add your location</p>
          <input type="text" placeholder="Enter a location" />
          
          <button className="next" onClick={handleButtonClick}>Next</button>  
          <p className='return'>or Press RETURN</p> 
        </div>
      </div>
    </div>
  );
};

export default Profile;
