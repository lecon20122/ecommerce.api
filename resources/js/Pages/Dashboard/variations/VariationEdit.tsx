import React, {useEffect, useState} from 'react';
import DashboardLayout from "../../../layouts/dashboard";
import {Variation, VariationTypes, VariationTypesValues} from "../../../types/VariationType";
import MediaProductCollection from "../../../components/Lists/MediaProductCollection";
import {Button, Col, Form, Input, Row, Select, Statistic} from 'antd';
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import ImageUploadManually from "../../../components/client/includes/ImageUploadManuallyComponent";

interface Props {
  currentVariation: Variation
  variationTypes: VariationTypes[]
  variationTypesValues: VariationTypesValues[]
}

interface MediaForm {
  images: string
}

export default function VariationEdit({currentVariation, variationTypesValues, variationTypes}: Props) {
  console.log(currentVariation)
  const [variationTypeId, setVariationTypeId] = useState(0)
  const [filteredVariationType, setFilteredVariationType] = useState<VariationTypesValues[]>([{
    id: 0,
    value: {
      en: '',
      ar: ''
    },
    variation_type_id: 0
  }])

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values)
    Inertia.post(route('admin.variations.update', currentVariation), values, {
      preserveState: false
    })
  };

  const SelectTypesOptions = variationTypes.map((type) => {
    return (
      <Select.Option value={type.id} key={type.id}>{type.type.en}</Select.Option>
    )
  })

  const SelectTypeValuesOptions = filteredVariationType.map((value) => {
    return (
      <Select.Option value={value.id} key={value.id}>{value.value.en}</Select.Option>
    )
  })

  const selectVariationTypeOnClick = (typeId: any) => {
    setVariationTypeId(typeId)
  }

  useEffect(() => {
    const data = variationTypesValues.filter(type => type.variation_type_id == variationTypeId)
    setFilteredVariationType(data)
  }, [variationTypeId])

  return (
    <DashboardLayout>
      <div className='container mx-auto'>
        {/*<div>current Variation Values <span>{currentVariation.type}</span> : <span>{currentVariation.title}</span></div>*/}
        <Row gutter={16} className='text-center py-5 border border-b-black border-1'>
          <Col span={12}>
            <Statistic title="Current Type" value={currentVariation.type.toUpperCase()}/>
          </Col>
          <Col span={12}>
            <Statistic title="Value" value={currentVariation.title} precision={2}
                       valueStyle={{color: currentVariation.title.toLowerCase()}}/>
          </Col>
        </Row>
        <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish} className='py-5 px-5'
              size={'large'}>
          <Form.Item
            initialValue={currentVariation.order}
            label={'Order'}
            name="order"
          >
            <Input placeholder="Title" type={'number'}/>
          </Form.Item>
          <Form.Item
            initialValue={currentVariation.price}
            label={'Price EN'}
            name="price"
          >
            <Input placeholder="Title" type={'number'} prefix={"EGP"}/>
          </Form.Item>
          <Form.Item label="Type List"
                     name={'variation_type_id'} initialValue={currentVariation.variation_type?.id}>
            <Select allowClear
                    onSelect={(value: any) => selectVariationTypeOnClick(value)}>
              {SelectTypesOptions}
            </Select>
          </Form.Item>
          <Form.Item initialValue={currentVariation.variation_type_value?.id} label="Type Value List"
                     name={'variation_type_value_id'}>
            <Select allowClear>
              {SelectTypeValuesOptions}
            </Select>
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <Button

                type="default"
                size={'large'}
                htmlType="submit"
                // disabled={
                //   !form.isFieldsTouched(true)
                // }
              >
                Update
              </Button>
            )}
          </Form.Item>
        </Form>
        <ImageUploadManually model={currentVariation} routeName={'admin.add.media.to.variation'} multiple/>
        <ImageUploadManually model={currentVariation} routeName={'admin.add.color.image.to.variation'} multiple={false} buttonLabel={'Choose Variation Color'}/>
        <MediaProductCollection product={currentVariation} deleteURL={'admin.delete.media.of.variations'}/>
      </div>
    </DashboardLayout>
  );
}
