import React, { useState } from 'react';

function BgRemove() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleRemoveBackground = (e) => {
    e.preventDefault();
    // Add your background removal logic here
  };

  return (
    <div className="bg-remove">
      <h1>AI Background Removal</h1>
      <form onSubmit={handleRemoveBackground}>
        <label>
          Upload an image:
          <input type="file" onChange={handleImageUpload} />
        </label>
        <button type="submit">Remove Background</button>
      </form>
      {image && <img src={image} alt="Uploaded" />}
      {/* Display the image with the background removed here */}
    </div>
  );
}

export default BgRemove;
