import React from 'react';


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
    <div
      className={`border w-[23px] h-[23px] ${active ? 'border-black' : 'border-gray-300'} flex items-center justify-center`}>
      <button
        style={backgroundFactory()}
        onClick={onClick}
        disabled={active}
        className={`border w-[19px] h-[19px]`}/>
    </div>
  );
}

export default ColoredCircleButton;
