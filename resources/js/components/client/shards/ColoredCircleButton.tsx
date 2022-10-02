import React from 'react';
import {bool} from "yup";


interface Props {
  color?: string
  onClick?: () => void
  backgroundImage?: string
  onMouseOver?: () => void
  active?: boolean
}

function ColoredCircleButton({color, onClick, backgroundImage, onMouseOver, active}: Props) {

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
      className={`border-2 rounded-full w-[19px] h-[19px] focus:outline-none ${active ? 'border-black' : 'border-gray-300'}`}/>
  );
}

export default ColoredCircleButton;
