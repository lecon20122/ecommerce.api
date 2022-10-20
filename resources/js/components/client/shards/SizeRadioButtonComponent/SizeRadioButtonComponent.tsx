import React, {Dispatch, MouseEventHandler, SetStateAction, useState} from 'react';
import {Variation} from "../../../../types/VariationType";
import './SizeRadioButtonComponent.css'

interface Props {
  variation: Variation
  disabled: boolean
  setCurrentSizeVariationId: any,
  setToggleVariationQuantity: any,
  setCurrentMaxStockCount: any,
}


function SizeRadioButtonComponent({variation, disabled, setCurrentSizeVariationId, setToggleVariationQuantity , setCurrentMaxStockCount}: Props) {

  const [check, setCheck] = useState<boolean>(false)

  const onClick = (event: React.ChangeEvent<HTMLInputElement>) => {

    if (event.target.checked) {
      setCurrentMaxStockCount(variation.stock_count)
      setCurrentSizeVariationId(parseFloat(event.target.value))
      setToggleVariationQuantity(false)
    }
  }

  return (
    <div key={variation.id}>
      <input className="hidden" id={`radio${variation.id}`} disabled={disabled} value={variation.id} type="radio"
             name={'radio'}
             onChange={event => onClick(event)}/>
      <label className={`flex flex-col p-1 border-2 ${disabled ? 'text-gray-400' : ''} border-gray-400 cursor-pointer`}
             htmlFor={`radio${variation.id}`}>
        <span className="text-sm grow lg:text-lg font-semibold uppercase">{variation.title}</span>
        <span className="lg:text-lg grow text-sm font-bold">EGP {variation.price}</span>
      </label>
      {disabled && <span className="text-xs text-red-600">OUT OF STOCK</span>}
    </div>
  );
}

export default SizeRadioButtonComponent;
