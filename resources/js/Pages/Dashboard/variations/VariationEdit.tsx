import React, {useEffect, useState} from 'react';
import DashboardLayout from "../../../layouts/dashboard";
import {Variation, VariationTypes, VariationTypesValues} from "../../../types/VariationType";
import MediaProductCollection from "../../../components/Lists/MediaProductCollection";
import {Button, Col, Form, Input, Row, Select, Statistic, Table} from 'antd';
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import ImageUploadManually from "../../../components/client/includes/ImageUploadManuallyComponent";
import StockRemoveAndAddComponent from "../../../components/StockRemoveAndAddComponent/StockRemoveAndAddComponent";
import CreateProductVariation from "./create";
import {ColumnsType} from "antd/es/table";
import ToggleRestoreDeleteButton from "../../../components/Forms/Buttons/ToggleDeleteRestoreButton";

interface Props {
  currentVariation: Variation
  variationTypes: VariationTypes[]
  variationTypesValues: VariationTypesValues[]
  locale: string
}

interface DataType extends Variation {
  key?: string;
}

export default function VariationEdit({currentVariation, variationTypesValues, variationTypes, locale}: Props) {

  const [variationTypeId, setVariationTypeId] = useState(0)
  const [openAddStock, setOpenAddStock] = useState(false)
  const [openAddChildVariationDialog, setOpenAddChildVariationDialog] = useState(false);
  const [openSubtractStock, setOpenSubtractStock] = useState(false)
  const [filteredVariationType, setFilteredVariationType] = useState<VariationTypesValues[]>([{
    id: 0,
    value: {
      en: '',
      ar: ''
    },
    variation_type_id: 0
  }])


  const handleOnClickVariationRestore = (data: any) => {
    Inertia.post(route('admin.variations.restore', data.id), undefined, {
      preserveState: false
    })
  };
  const handleOnClickVariationEdit = (data: any) => {
    Inertia.get(route('admin.variations.edit', data.id))
  };
  const handleOnClickVariationDelete = (data: any) => {
    Inertia.post(route('admin.variations.destroy', data.id), undefined, {
      preserveState: false
    })
  };
  const actionVariationBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <ToggleRestoreDeleteButton handleOnClickRestore={handleOnClickVariationRestore}
                                   handleOnClickDelete={handleOnClickVariationDelete}
                                   params={rowData}/>
        <Button className="mr-2"
                onClick={() => handleOnClickVariationEdit(rowData)}>UPDATE</Button>
      </React.Fragment>
    );
  }
  const columns: ColumnsType<DataType> = [
    {title: 'ID', dataIndex: 'id', key: 'id'},
    {
      title: 'Variation Type Value',
      dataIndex: 'variation_type_value',
      key: 'variation_type_value',
      render: (_, record) => <span>{record.variation_type_value?.value.en}</span>
    },
    {
      title: 'Variation Type',
      dataIndex: 'variation_type',
      key: 'variation_type',
      render: (_, record) => <span>{record.variation_type?.type.en}</span>
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Order',
      dataIndex: 'order',
      key: 'order',
      responsive: ['lg'],
    },
    {
      title: 'Deleted at',
      dataIndex: 'deleted_at',
      key: 'deleted_at',
      responsive: ['lg'],
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (_, record) => actionVariationBodyTemplate(record),
    },
  ];

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
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
        <Row gutter={16} className='text-center py-5 border border-b-black border-1 p-1'>
          <Col span={12} className={'flex items-center justify-center'}>
            {currentVariation.variation_type?.is_stockable ?
              <div className={'flex-col items-center justify-center space-y-2 space-x-2'}>
                <h1>Available Stock : {currentVariation.stock_count}</h1>
                <Button size={'large'} onClick={() => setOpenAddStock(true)}>Add Stock</Button>
                <Button size={'large'} onClick={() => setOpenSubtractStock(true)}>Remove Stock</Button>
              </div>
              : <Button size={'large'} onClick={event => setOpenAddChildVariationDialog(true)}>Add Size</Button>
            }
          </Col>
          <Col span={12} className={'flex space-x-2 items-center justify-center'}>
            <Statistic title="Current Type" value={currentVariation.variation_type?.type.en.toUpperCase()}/>
            <Statistic title="Value" value={currentVariation.variation_type_value?.value.en} precision={2}
                       valueStyle={{color: currentVariation.variation_type_value?.value.en.toLowerCase()}}/>
          </Col>
        </Row>
        <StockRemoveAndAddComponent setOpenAddStock={setOpenAddStock} openAddStock={openAddStock}
                                    setOpenSubtractStock={setOpenSubtractStock} openSubtractStock={openSubtractStock}
                                    currentVariationId={currentVariation.id}/>
        <div className={'grid grid-cols-2'}>
          <div className='col-1'>
            <Form form={form} name="horizontal_login" layout="horizontal" onFinish={onFinish} className='py-5 px-5'
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
                         name={'variation_type_value_id'}
              >
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
                  >
                    Update
                  </Button>
                )}
              </Form.Item>
            </Form>
          </div>
          {currentVariation.variation_type?.is_mediable &&
          <div className={'p-2'}>
            <h1 className={''}>Variation Images Max : 6</h1>
            <MediaProductCollection params={currentVariation} media={currentVariation.media}
                                    deleteURL={'admin.delete.media.of.variations'}/>
            <div className={'flex flex-wrap space-x-1'}>
              <ImageUploadManually param={currentVariation} buttonLabel={'Upload Images'}
                                   routeName={'admin.add.media.to.variation'} multiple/>
              <ImageUploadManually param={currentVariation} routeName={'admin.add.color.image.to.variation'}
                                   multiple={false}
                                   buttonLabel={'Color Image'}/>
            </div>
          </div>}
        </div>
        <div>
          <CreateProductVariation handleAddDialog={data => setOpenAddChildVariationDialog(false)}
                                  openAddDialog={openAddChildVariationDialog}
                                  productId={currentVariation.product_id} locale={locale}
                                  variationTypes={variationTypes}
                                  variationTypesValues={variationTypesValues} store_id={currentVariation.store_id}
                                  parentId={currentVariation.id}/>
          {currentVariation.variation_type?.type.en === 'color' &&
          <Table columns={columns} rowKey={"id"} dataSource={currentVariation.children} scroll={{x: true}}/>
          }
        </div>
      </div>
    </DashboardLayout>
  );
}
