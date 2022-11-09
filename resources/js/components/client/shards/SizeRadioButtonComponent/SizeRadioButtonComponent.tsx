import React, {useState} from 'react';
import {Variation} from "../../../../types/VariationType";
import './SizeRadioButtonComponent.css'

interface Props {
  variation: Variation
  disabled: boolean
  setCurrentSizeVariationId: any,
}


function SizeRadioButtonComponent({
                                    variation,
                                    disabled,
                                    setCurrentSizeVariationId,
                                  }: Props) {
  const onClick = (event: React.ChangeEvent<HTMLInputElement>) => {

    if (event.target.checked) {
      setCurrentSizeVariationId(parseFloat(event.target.value))
    }
  }

  return (
    <div key={variation.id}>
      <input className="hidden" id={`radio${variation.id}`} disabled={disabled} value={variation.id} type="radio"
             name={'radio'}
             onChange={event => onClick(event)}/>
      <label className={`flex flex-col p-1 border-2 ${disabled ? 'text-gray-400' : 'cursor-pointer'} border-gray-400`}
             htmlFor={`radio${variation.id}`}>
        <span
          className="text-sm grow lg:text-md font-semibold uppercase">{variation.variation_type_value?.value.en}</span>
        <span className="lg:text-md grow text-sm font-bold">EGP {variation.price}</span>
      </label>
    </div>
  );
}

export default SizeRadioButtonComponent;
