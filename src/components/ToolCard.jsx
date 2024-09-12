function ToolCard({ title, description, link }) {
    return (
      <div className="tool-card">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link}>Try it now</a>
      </div>
    );
  }
  
  export default ToolCard;
  