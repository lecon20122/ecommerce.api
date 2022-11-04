import {Inertia} from "@inertiajs/inertia";
import React from "react";
import route from 'ziggy-js';
import {usePage} from "@inertiajs/inertia-react";
import {Button, Form, Input} from "antd";

interface IFormProps {
  email: string,
  password: string,
}

export default function AdminLogin() {

  const serverSideErrors = usePage().props.errors

  const onFinish = (values: any) => {
    Inertia.post(route('admin.postLogin'), values, {
      preserveState: false
    })
  };

  return (
    <div>
      <section className="bg-gray-100 py-10 min-h-[86vh]">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg max-w-[500px]">
            {serverSideErrors.email && <span className='text-red-600'>{serverSideErrors.email}</span>}
            <h2 className="mb-5 text-2xl font-semibold">Sign in</h2>
            <Form size={'large'} onFinish={onFinish}>
              <Form.Item
                hasFeedback
                name="email"
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
                <Button type="default" className={'uppercase text-white hover:text-white hover:dropshadow-lg hover:border-black'}
                        htmlType="submit"
                        style={{width: "100%", backgroundColor: 'black'}}>
                  sign in
                </Button>
              </Form.Item>
              <div className={'flex justify-between content-center gap-4'}>
                <p className="text-start mt-5">
                  <a className="text-blue-500" href={route('client.signup')}>create new account</a>
                </p>
                <a className="text-blue-500 text-end mt-5" href={route('client.forget.password')}>forget password</a>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}
