import React from 'react';

function BgGen() {
  const handleGenerateBackground = (e) => {
    e.preventDefault();
    // Add your background generation logic here
  };

  return (
    <div className="bg-gen">
      <h1>AI Background Generation</h1>
      <form onSubmit={handleGenerateBackground}>
        <label>
          Enter background description:
          <input type="text" placeholder="A futuristic digital landscape..." />
        </label>
        <button type="submit">Generate Background</button>
      </form>
      {/* Display generated background here */}
    </div>
  );
}

export default BgGen;
