import React from 'react';


interface Props {
  color?: string
  onClick?: () => void
  backgroundImage?: string
  onMouseOver?: () => void
  active?: boolean
}

function SquaredColorButton({color, onClick, backgroundImage, onMouseOver, active}: Props) {

  const backgroundFactory = () => {
    if (backgroundImage) {
      return {backgroundImage: `url(${backgroundImage})`, backgroundPosition: "center", backgroundSize: "cover"}
    } else {
      return {backgroundColor: color}
    }
  }
  return (
    <button
      style={backgroundFactory()}
      onClick={onClick}
      disabled={active}
      className={`border-1 w-[30px] h-[30px] focus:outline-none ${active ? 'border-black' : 'border-gray-300'}`}/>
  );
}

export default SquaredColorButton;
