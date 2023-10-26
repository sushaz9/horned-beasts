import { useState } from "react";

export default function HornedBeast({
  title,
  image_url,
  description,
  handleShowHornedBeast,
}) {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h2>{title}</h2>
      <img
        src={image_url}
        onClick={() => handleShowHornedBeast({ title, image_url })}
      />
      <p>{description}</p>
      <span onClick={handleClick}>❤️ {likes}</span>
    </div>
  );
}
