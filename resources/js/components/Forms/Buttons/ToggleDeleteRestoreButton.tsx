import {Button as PrimeButton} from "primereact/button";
import React from "react";

interface Props {
  handleOnClickRestore: (params: any) => void
  handleOnClickDelete: (params: any) => void
  params: any
}

export default function ToggleRestoreDeleteButton({handleOnClickDelete, handleOnClickRestore, params}: Props) {
  if (params.deleted_at) {
    return (
      <PrimeButton icon="pi pi-undo"
                   className="p-button p-button-info mr-2"
                   onClick={() => handleOnClickRestore(params)}/>
    )
  } else {
    return (
      <PrimeButton icon="pi pi-trash"
                   className="p-button p-button-danger mr-2"
                   onClick={() => handleOnClickDelete(params)}/>
    )
  }
}
