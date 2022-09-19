import React, {useState} from 'react';
import {Button, Form, Input, Modal, Select} from "antd";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";


interface Props {
  openModal: boolean
  onOk: () => void
  onCancel: () => void
  children: React.ReactNode
}

function ModalWithChildren({openModal, onOk, onCancel, children}: Props) {


  return (
    <Modal
      title="20px to Top"
      centered
      onOk={onOk}
      onCancel={onCancel}
      open={openModal}
    >
      {children}
    </Modal>
  );
}

export default ModalWithChildren;
