import React, {useState} from 'react';

import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import ModalWithChildren from "../variations/ModalWithChildren";
import {Form, Input, Button, Upload, InputNumber} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {UploadChangeParam, UploadFile} from "antd/es/upload/interface";
import Helpers from "../../../utils/Helpers";


interface Props {
  handleAddDialog: () => void,
  openAddDialog: boolean
  store_id: number
}

export default function CreateProduct({handleAddDialog, openAddDialog, store_id}: Props) {

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const helpers = new Helpers()


  const storeProductAction = (values: any) => {
    Inertia.post(route('admin.products.store'), values, {
      preserveState: false
    })
  }

  const onFinish = (values: any) => {
    console.log(values)
    if (!values.images) {
      storeProductAction(values)
    } else {
      values.images = helpers.appendImageToFormData(fileList)
      storeProductAction(values)
    }
  };

  const onChangeHandler = (file: UploadChangeParam) => {
    setFileList(file.fileList);
  }

  const onRemove = (file: any) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
  }

  return (
    <ModalWithChildren openModal={openAddDialog} onOk={handleAddDialog}
                       onCancel={handleAddDialog} title={"Create New Variation"}>
      <Form
        name="basic"
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="store_id"
          hidden
          initialValue={store_id}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Title EN"
          name="en"
          rules={[{required: true}]}
        >
          <Input/>
        </Form.Item>


        <Form.Item
          label="Title AR"
          name="ar"
          rules={[{required: true}]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{required: true}]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[{required: true, type: "integer" , min : 0 , max : 100000}]}
        >
          <InputNumber/>
        </Form.Item>

        <Form.Item
          label="Product Image"
          name="images"
          valuePropName='images'
        >
          <Upload listType="picture-card" onRemove={onRemove} onChange={(e) => onChangeHandler(e)}>
            <div>
              <PlusOutlined/>
              <div style={{marginTop: 8}}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{offset: 8, span: 16}}>
          <Button type="default" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </ModalWithChildren>
  )

};
