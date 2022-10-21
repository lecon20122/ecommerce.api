import React from 'react';
import ModalWithChildren from "../../Pages/Dashboard/variations/ModalWithChildren";
import {Button, Form, Input, InputNumber} from "antd";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";


interface Props {
  setOpenAddStock: any,
  openAddStock: boolean
  setOpenSubtractStock: any,
  openSubtractStock: boolean
  currentVariationId: number
}

function StockRemoveAndAddComponent({
                                      openAddStock,
                                      openSubtractStock,
                                      setOpenAddStock,
                                      setOpenSubtractStock,
                                      currentVariationId
                                    }: Props) {

  const onFinishAddStock = (values: any) => {
    Inertia.post(route('admin.add.stock'), values, {
      preserveState: false
    })
  }
  const onFinishSubtractStock = (values: any) => {
    Inertia.post(route('admin.subtract.stock'), values, {
      preserveState: false
    })

  }

  return (
    <div>
      <ModalWithChildren title={'Add New Stock'} openModal={openAddStock} onOk={() => setOpenAddStock(false)}
                         onCancel={() => setOpenAddStock(false)}>
        <Form onFinish={onFinishAddStock}>
          <Form.Item label={'New Stock Amount'} name={'amount'}
                     rules={[{required: true, type: 'integer', message: 'Stock Amount is required'}]}>
            <InputNumber prefix={'+'} min={1} max={1000}/>
          </Form.Item>
          <Form.Item hidden name={'variation_id'} initialValue={currentVariationId}>
            <Input/>
          </Form.Item>
          <Form.Item>
            <Button type="default" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </ModalWithChildren>
      <ModalWithChildren title={'Remove Stock Amount'} openModal={openSubtractStock}
                         onOk={() => setOpenSubtractStock(false)}
                         onCancel={() => setOpenSubtractStock(false)}>
        <Form onFinish={onFinishSubtractStock}>
          <Form.Item label={'Remove Stock Amount'} name={'amount'}
                     rules={[{required: true, type: 'integer', message: 'Stock Amount to remove is required'}]}>
            <InputNumber prefix={'-'} min={1} max={1000}/>
          </Form.Item>
          <Form.Item hidden name={'variation_id'} initialValue={currentVariationId}>
            <Input/>
          </Form.Item>
          <Form.Item>
            <Button type="default" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </ModalWithChildren>
    </div>
  );
}

export default StockRemoveAndAddComponent;
