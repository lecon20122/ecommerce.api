import React, {useEffect, useState} from 'react';
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import {VariationTypes, VariationTypesValues} from "../../../types/VariationType";
import ModalWithChildren from "./ModalWithChildren";
import {Button, Divider, Form, Input, InputNumber, Select, Upload} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {UploadChangeParam, UploadFile} from "antd/es/upload/interface";
import Helpers from "../../../utils/Helpers";


interface Props {
  locale: string
  handleAddDialog: (data?: any) => void,
  openAddDialog: boolean
  productId: number
  parentId?: number
  store_id: number,
  variationTypes: VariationTypes[]
  variationTypesValues: VariationTypesValues[]
}

export default function CreateProductVariation({
                                                 handleAddDialog,
                                                 openAddDialog,
                                                 productId,
                                                 variationTypesValues,
                                                 variationTypes,
                                                 locale,
                                                 parentId,
                                                 store_id
                                               }: Props) {
  const [isMediable, setIsMediable] = useState(false)
  const [variationTypeId, setVariationTypeId] = useState(0)
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [filteredVariationType, setFilteredVariationType] = useState<VariationTypesValues[]>([{
    id: 0,
    value: {
      en: '',
      ar: ''
    },
    variation_type_id: 0
  }])
  const helpers = new Helpers()


  const selectVariationTypeOnClick = (type: any) => {
    setIsMediable(type.is_mediable)
    setVariationTypeId(type.id)
  }

  const selectVariationTypeItems = variationTypes?.map((type) => {
    return (
      <Select.Option key={type.id} value={type.id}>
        <div onClick={(e) => selectVariationTypeOnClick(type)}>{type.type[locale as keyof typeof type.type]}</div>
      </Select.Option>
    )
  })


  useEffect(() => {
    const data = variationTypesValues.filter(type => type.variation_type_id == variationTypeId)
    setFilteredVariationType(data)
  }, [variationTypeId])

  const selectVariationTypeValueItems = filteredVariationType?.map((value) => {
    return (
      <Select.Option key={value.id} value={value.id}>
        <div className='flex flex-row content-center'>
        <span style={{backgroundColor: `${value.value.en.toLowerCase()}`}}
              className={`rounded w-[23px] h-[23px] inline-block mr-2 border border-3 border-black`}/>
          <span>{value.value[locale as keyof typeof value.value]}</span>
        </div>
      </Select.Option>
    )
  })

  const storeVariationAction = (values: any) => {
    Inertia.post(route('admin.variations.store'), values, {
      preserveState: false
    })
  }

  const onFinish = (values: any) => {
    console.log(values)
    if (!values.images) {
      storeVariationAction(values)
    } else {
      values.images = helpers.appendImageToFormData(fileList)
      storeVariationAction(values)
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
    <div id='add'>
      <Divider/>
      <ModalWithChildren openModal={openAddDialog} onOk={handleAddDialog}
                         onCancel={handleAddDialog} title={'CREATE NEW VARIATION'}>
        <Form
          name="basic"
          labelCol={{span: 8}}
          wrapperCol={{span: 16}}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="parent_id"
            hidden
            initialValue={parentId}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            name="product_id"
            hidden
            initialValue={productId}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            name="store_id"
            hidden
            initialValue={store_id}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="Type (ex:color,size)"
            name="variation_type_id"
            rules={[{required: true, message: 'Please fill type in EN!'}]}
          >
            <Select>
              {selectVariationTypeItems}
            </Select>
          </Form.Item>

          <Form.Item
            label="Value (ex :red,xl,xs)"
            name="variation_type_value_id"
            rules={[{required: true, message: 'Please fill type in AR!'}]}
          >
            <Select
              placeholder="this type will have image ?"
              allowClear
            >
              {selectVariationTypeValueItems}
            </Select>
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{required: true, type: "integer", min: 0, max: 100000}]}
          >
            <InputNumber/>
          </Form.Item>
          <Form.Item
            hidden={!isMediable}
            label="Category Image"
            name="images"
            valuePropName='images'
          >
            <Upload multiple listType="picture-card" onRemove={onRemove} onChange={(e) => onChangeHandler(e)}>
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
    </div>
  )

};
