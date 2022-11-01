import React, {useState} from 'react';
import {Button, Form, Input, Radio, Select} from "antd";
import ModalWithChildren from "../../Pages/Dashboard/variations/ModalWithChildren";
import {City} from "../../types/LocationTypes";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";

interface Props {
  open: boolean,
  setOpen: any,
  cities: City[],
}


function CreateAddressComponent({open, setOpen, cities}: Props) {
  const [currentCity, setCurrentCity] = useState<City | undefined>({
    name: '',
    id: 1,
    districts: [{id: 1, name: '', city_id: 1}]
  })

  const districtsOptions = currentCity?.districts.map((district) => {
    return (
      <Select.Option key={district.id} value={district.id}>
        {district.name}
      </Select.Option>
    )
  })

  const citiesOptions = cities.map((city) => {
    return (
      <Select.Option key={city.id} value={city.id}>
        {city.name}
      </Select.Option>
    )
  })

  const setSelectedCityAsCurrentCity = (cityId: number) => {
    const city = cities.find((city) => city.id == cityId)
    setCurrentCity(city)
  }

  const onFinish = (values: any) => {
    Inertia.post(route('client.add.address'), values, {
      preserveState: false
    })
  }

  return (
    <ModalWithChildren openModal={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}
                       title={'Add New Address'}>
      <Form onFinish={onFinish}>
        <Form.Item label={'Name'} name={'name'}
                   rules={[{required: true, type: 'string'}]}>
          <Input/>
        </Form.Item>
        <Form.Item label={'Phone'} name={'phone'}
                   rules={[{required: true, type: 'string', max: 20}]}>
          <Input maxLength={20}/>
        </Form.Item>
        <Form.Item label={'Street Name'} name={'street'}
                   rules={[{required: true, type: 'string'}]}>
          <Input/>
        </Form.Item>
        <Form.Item label={'Building name/no'} name={'building'}
                   rules={[{required: true, type: 'string'}]}>
          <Input/>
        </Form.Item>
        <Form.Item label={'Floor no'} name={'floor'}
                   rules={[{required: true, type: 'string'}]}>
          <Input/>
        </Form.Item>
        <Form.Item label={'Apartment no'} name={'apartment_number'}
                   rules={[{required: true, type: 'string'}]}>
          <Input/>
        </Form.Item>
        <Form.Item label={'City/Area'} name={'city'}
                   rules={[{required: true}]}>
          <Select onSelect={(value: any) => setSelectedCityAsCurrentCity(value)} allowClear>
            {citiesOptions}
          </Select>
        </Form.Item>
        <Form.Item label={'District'} name={'district_id'}
                   rules={[{required: true}]}>
          <Select allowClear>
            {districtsOptions}
          </Select>
        </Form.Item>
        <Form.Item label={'Nearest LandMark'} name={'nearby_landmark'}
                   rules={[{required: true, type: 'string'}]}>
          <Input/>
        </Form.Item>

        <Form.Item label={'Address Type'} name={'type'}
                   rules={[{required: true}]}>
          <Radio.Group>
            <Radio value="home"> Home (7am-9pm , all week days) </Radio>
            <Radio value="office"> Office (9am - 6pm) Business days </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="default" htmlType="submit">
            Add New Address
          </Button>
        </Form.Item>
      </Form>
    </ModalWithChildren>
  )
}

export default CreateAddressComponent;
