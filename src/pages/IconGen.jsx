import React from 'react';

function IconGen() {
  const handleGenerateIcon = (e) => {
    e.preventDefault();
    // Add your icon generation logic here
  };

  return (
    <div className="icon-gen">
      <h1>AI Icon Generation</h1>
      <form onSubmit={handleGenerateIcon}>
        <label>
          Enter icon theme or description:
          <input type="text" placeholder="A minimalist home icon..." />
        </label>
        <button type="submit">Generate Icon</button>
      </form>
      {/* Display generated icon here */}
    </div>
  );
}

export default IconGen;
