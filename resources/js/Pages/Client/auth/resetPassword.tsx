import React from 'react';
import {Alert, Button, Form, Input} from "antd";
import Footer from "../../../components/client/includes/footer";
import route from "ziggy-js";
import {Inertia} from "@inertiajs/inertia";
import {usePage} from "@inertiajs/inertia-react";


function ResetPassword() {

  const onFinish = (values: any) => {
    Inertia.post(route('client.forget.password.sent.link'), values, {
      preserveState: false
    })
  };

  const {errors, flash}: any = usePage().props
  return (
    <div>
      <div className={'h-[60vh] flex justify-center items-center'}>
        <div className='my-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg w-[360px]'>
          {errors.email && <Alert className={'my-4'} message={errors.email} type={"warning"} closable/>}
          {flash.message && <Alert className={'my-4'} message={flash.message} type={"success"} closable/>}
          <Form size={'large'} wrapperCol={{span: 24}} onFinish={onFinish}>
            <Form.Item
              name={'email'}
              hasFeedback
              rules={[{required: true, type: "email"}]}
            >
              <Input placeholder={'email address'}/>
            </Form.Item>

            <Form.Item className={'mx-auto'}>
              <Button type="default" className={'uppercase text-black hover:text-black hover:border-black'}
                      htmlType="submit"
                      style={{width: "100%", backgroundColor: "#CD867D"}}>
                send reset link
              </Button>
            </Form.Item>
          </Form>
          <p className="text-center mt-5">
            already got it? <a className="text-blue-500" href={route('client.login')}>Sign in</a>
          </p>
        </div>
      </div>

      <Footer/>
    </div>

  );
}

export default ResetPassword;
