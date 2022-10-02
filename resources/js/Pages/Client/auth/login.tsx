import React from 'react'
import Footer from "../../../components/client/includes/footer";
import {GoogleOutlined} from '@ant-design/icons'
import route from "ziggy-js";
import {Inertia} from "@inertiajs/inertia";
import {Alert, Button, Form, Input} from "antd";
import {usePage} from "@inertiajs/inertia-react";

export default function login() {
  const serverSideErrors: any = usePage().props.flash

  const onFinish = (values: any) => {
    Inertia.post(route('client.postLogin'), values, {
      preserveState: false
    })
  };

  return (
    <div>
      <div className="my-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg max-w-[360px]">
        {serverSideErrors.message && <Alert message={serverSideErrors.message} type={"error"} closable/>}
        <h2 className="mb-5 text-2xl font-semibold text-center">Sign in</h2>
        <Form size={'large'} onFinish={onFinish}>
          <Form.Item
            hasFeedback
            name="login"
            wrapperCol={{span: 24}}
            rules={[{required: true}]}
          >
            <Input placeholder={"Phone or Email"}/>
          </Form.Item>
          <Form.Item
            hasFeedback
            name="password"
            wrapperCol={{span: 24}}
            rules={[{required: true}]}
          >
            <Input.Password placeholder={"Password"}/>
          </Form.Item>
          <Form.Item className={'mx-auto'}>
            <Button type="default" className={'uppercase text-black hover:text-black hover:border-black'}
                    htmlType="submit"
                    style={{width: "100%", backgroundColor: "#CD867D"}}>
              sign in
            </Button>
          </Form.Item>
          {/*<div className="text-center border-b my-5 leading-[0.1rem]">*/}
          {/*  <span className="px-3 bg-white text-gray-400">or</span>*/}
          {/*</div>*/}

          {/*<a href={route('client.social.login')}*/}
          {/*   className="mb-2 px-4 py-2 w-full flex items-center justify-center text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600">*/}
          {/*  <GoogleOutlined/><span className='mx-1'>use Google Account</span>*/}
          {/*</a>*/}
          <div className={'flex justify-between content-center gap-4'}>
            <p className="text-start mt-5">
              <a className="text-blue-500" href={route('client.signup')}>create new account</a>
            </p>
            <a className="text-blue-500 text-end mt-5" href={route('client.forget.password')}>forget password</a>
          </div>
        </Form>
      </div>
      <Footer/>
    </div>

  )
}
