import React from "react";
import {Button} from "antd";

interface Props {
  handleOnClickRestore: (params: any) => void
  handleOnClickDelete: (params: any) => void
  params: any
}

export default function ToggleRestoreDeleteButton({handleOnClickDelete, handleOnClickRestore, params}: Props) {
  if (params.deleted_at) {
    return (
      <Button
        type={'default'}
        onClick={() => handleOnClickRestore(params)}>
        UNDO
      </Button>
    )
  } else {
    return (
      <Button
        type={'default'}
        onClick={() => handleOnClickDelete(params)}>
        DELETE
      </Button>
    )
  }
}
