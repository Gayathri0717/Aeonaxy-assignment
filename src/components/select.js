// // // Profile.js

// import React, { useState } from 'react';
// import './select.css'; // Import CSS file for styling
// import image1 from '../images/s4.png';
// import image2 from '../images/image.jpg';
// import image3 from '../images/image2.jpg';
// import { FaCheckCircle } from 'react-icons/fa'; 
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// const Select = () => {
//   const location = useLocation();
//   const avatarImage = location.state && location.state.avatarImage;
//   const navigate = useNavigate();
//   const handleContinue = () => {
//     // Navigate to Select.js with the avatar image data received from Profile.js
//     navigate('/email', { state: { avatarImage } });
//   };
//     const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image

//     const handleImageClick = (image) => {
//       // Toggle selection of image
//       setSelectedImage(image);
//     };
  
//     // const handleButtonClick4 = () => {
//     //     // Navigate to Select.js
//     //     navigate('/email');
//     //   };
//       console.log(selectedImage);
//   return (
//     <div className="cont3">
//       <div className='dibbble'>
//       <h2>DIbbble</h2>
//       </div>
//       <div className="center-content">
//         <h1 className='wel'>What brings you to dribbble?</h1>
//         <p className='sub'>Select the options that best describe you.Don't worry, you can explore other options later.</p>
//       </div>
  
//       <div className="image-section">
//         <div className={`image-box ${selectedImage === image1 ? 'selected' : ''}`} onClick={() => handleImageClick(image1)}>
//           <img src={image1} alt="Image 1" className="image" />
//           <p className="description">I'm a designer looking to share my work</p>
//           {selectedImage === image1 && <FaCheckCircle className="tick-icon" />}
//         </div>
//         <div className={`image-box ${selectedImage === image2 ? 'selected' : ''}`} onClick={() => handleImageClick(image2)}>
//           <img src={image2} alt="Image 2" className="image" />
//           <p className="description">I'm looking to hire a desginer</p>
//           {selectedImage === image2 && <FaCheckCircle className="tick-icon" />}
//         </div>
//         <div className={`image-box ${selectedImage === image3 ? 'selected' : ''}`} onClick={() => handleImageClick(image3)}>
//           <img src={image3} alt="Image 3" className="image" />
//           <p className="description">I'm looking for design inspiration</p>
//           {selectedImage === image3 && <FaCheckCircle className="tick-icon" />}
//         </div>
//       </div>

//       <button className="finish"onClick={handleContinue}>Finish</button>   
//     </div>
//   );
// };

// export default Select;


import React, { useState } from 'react';
import './select.css'; // Import CSS file for styling
import image1 from '../images/s4.png';
import image2 from '../images/image.jpg';
import image3 from '../images/image2.jpg';
import { FaCheckCircle, FaAngleLeft } from 'react-icons/fa'; // Import the Font Awesome icons
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Select = () => {
  const location = useLocation();
  const avatarImage = location.state && location.state.avatarImage;
  const navigate = useNavigate();
  const handleContinue = () => {
    // Navigate to Select.js with the avatar image data received from Profile.js
    navigate('/email', { state: { avatarImage } });
  };

  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image

  const handleImageClick = (image) => {
    // Toggle selection of image
    setSelectedImage(image);
  };

  return (
    <div className="cont3">
      <div className='dibbble'>
      <h2>dribbble</h2>
        <FaAngleLeft className="back-icon" onClick={() => navigate(-1)} /> {/* Use the Font Awesome icon for the back button */}
        
      </div>
      <div className="center-content">
        <h1 className='wel'>What brings you to dribbble?</h1>
        <p className='sub'>Select the options that best describe you.Don't worry, you can explore other options later.</p>
      </div>

  
      <div className="image-section">
        <div className={`image-box ${selectedImage === image1 ? 'selected' : ''}`} onClick={() => handleImageClick(image1)}>
          <img src={image1} alt="Image 1" className="image" />
          <p className="description">I'm a designer looking to share my work</p>
          {selectedImage === image1 && <FaCheckCircle className="tick-icon" />}
        </div>
        <div className={`image-box ${selectedImage === image2 ? 'selected' : ''}`} onClick={() => handleImageClick(image2)}>
          <img src={image2} alt="Image 2" className="image" />
          <p className="description">I'm looking to hire a desginer</p>
          {selectedImage === image2 && <FaCheckCircle className="tick-icon" />}
        </div>
        <div className={`image-box ${selectedImage === image3 ? 'selected' : ''}`} onClick={() => handleImageClick(image3)}>
          <img src={image3} alt="Image 3" className="image" />
          <p className="description">I'm looking for design inspiration</p>
          {selectedImage === image3 && <FaCheckCircle className="tick-icon" />}
        </div>
      </div>
    
<p className='multiple'>Anything else?You can select multiple</p>
      <button className="finish" onClick={handleContinue}>Finish</button>   
    </div>
  );
};

export default Select;



