import React from 'react';


interface Props {
  color?: string
  onClick?: () => void
  backgroundImage?: string
  onMouseOver?: () => void
}

function ColoredCircleButton({color, onClick, backgroundImage, onMouseOver}: Props) {

  const backgroundFactory = () => {
    if (backgroundImage) {
      return {backgroundImage: `url(${backgroundImage})`, backgroundPosition: "center", backgroundSize: "cover"}
    } else {
      return {backgroundColor: color}
    }
  }
  return (
    <button
      onMouseOver={onMouseOver}
      style={backgroundFactory()}
      // onClick={onClick}
      className={`border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none`}/>
  );
}

export default ColoredCircleButton;
