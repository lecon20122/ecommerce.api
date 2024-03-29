import React, {useState} from 'react';
import {Button, Form, Input, Modal, Select} from "antd";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";


interface Props {
  openModal: boolean
  onOk?: () => void
  onCancel?: () => void
  children: React.ReactNode
  title?: string
}

function ModalWithChildren({openModal, onOk, onCancel, children, title}: Props) {

  return (
    <Modal
      okButtonProps={{
        type : "default"
      }}
      title={title}
      centered
      onOk={onOk}
      onCancel={onCancel}
      open={openModal}
      footer={null}
    >
      {children}
    </Modal>
  );
}

export default ModalWithChildren;
