import React from 'react';

function ImageGen() {
  const handleGenerateImage = (e) => {
    e.preventDefault();
    // Add your image generation logic here
  };

  return (
    <div className="image-gen">
      <h1>AI Image Generation</h1>
      <form onSubmit={handleGenerateImage}>
        <label>
          Enter descriptive text:
          <input type="text" placeholder="A sunset over mountains..." />
        </label>
        <button type="submit">Generate Image</button>
      </form>
      {/* Display generated image here */}
    </div>
  );
}

export default ImageGen;
