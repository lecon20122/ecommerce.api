import React from 'react';
import {ProductAttribute} from "../../types/products";
import ModalWithChildren from "../../Pages/Dashboard/variations/ModalWithChildren";
import {Button, Form, Input, Select} from "antd";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";

interface Props {
  productAttribute: ProductAttribute,
  openModal: boolean,
  setOpenModal: any
}


function ProductAttributeUpdateComponent({productAttribute, setOpenModal, openModal}: Props) {

  const onFinish = (values: any) => {
    Inertia.post(route('admin.update.attribute', {attribute: productAttribute}), values, {
      preserveState: false
    })
  };

  return (
    <ModalWithChildren openModal={openModal} onOk={() => setOpenModal(false)}
                       onCancel={() => setOpenModal(false)} title={"Update Product Attribute"}>
      <Form
        name="basic"
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Product Attribute EN"
          name="en"
          initialValue={productAttribute.attribute.en}
          rules={[{required: true, message: 'Please fill Product Attribute in English!'}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="Product Attribute AR"
          initialValue={productAttribute.attribute.ar}
          name="ar"
          rules={[{required: true, message: 'Please fill Product Attribute in Arabic!'}]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="filterable ?"
          initialValue={productAttribute.is_filterable}
          name="is_filterable"
          rules={[{required: true, message: 'Please fill type in AR!'}]}
        >
          <Select
            placeholder="this type will have image ?"
            allowClear
          >
            <Select.Option value={true}>yes</Select.Option>
            <Select.Option value={false}>no</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{offset: 8, span: 16}}>
          <Button type="default" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </ModalWithChildren>
  );
}

export default ProductAttributeUpdateComponent;
