import React from 'react';


interface Props {
  backgroundColor: string
  onClick?: () => void
  backgroundImage?: string
  onMouseOver: () => void
}

function ColoredCircleButton({backgroundColor, onClick, backgroundImage, onMouseOver}: Props) {
  return (
    <button
      onMouseOver={onMouseOver}
      style={{backgroundImage: `url(${backgroundImage})`, backgroundPosition: "center", backgroundSize: "cover"}}
      // onClick={onClick}
      className={`border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none`}/>
  );
}

export default ColoredCircleButton;
