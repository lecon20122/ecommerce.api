import React from 'react';
import {Alert, Button, ConfigProvider, Form, Input} from "antd";
import Footer from "../../../components/client/includes/footer";
import route from "ziggy-js";
import {Inertia} from "@inertiajs/inertia";
import {usePage} from "@inertiajs/inertia-react";


function NewPassword() {

  const onFinish = (values: any) => {
    const data = {
      ...values,
      ...route().params
    }
    Inertia.post(route('client.post.new.password'), data, {
      preserveState: false
    })
  };
  const validateMessages = {
    required: "'${name}' is Required!",
    pattern: {
      mismatch: "at least 8 characters, " +
        "one special character, " +
        "one uppercase letter ",
    }
  };

  const {errors, flash}: any = usePage().props
  console.log(usePage().props)
  return (
    <div>
      <div className={'h-[60vh]'}>
        <div className='my-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg w-[360px]'>
          <h2 className="mb-5 text-2xl font-semibold text-center">New Password</h2>
          {errors.email && <Alert className={'my-4'} message={errors.email} type={"warning"} closable/>}
          {flash.message && <Alert className={'my-4'} message={flash.message} type={"success"} closable/>}
          <ConfigProvider form={{validateMessages}}>
            <Form size={'large'} wrapperCol={{span: 24}} onFinish={onFinish}>
              <Form.Item
                hasFeedback
                name="email"
                rules={[{required: true, type: 'email', message: 'Please input your username!'}]}
              >
                <Input placeholder="Email Address"/>
              </Form.Item>
              <Form.Item
                hasFeedback
                name="password"
                rules={[{
                  required: true,
                  pattern: new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))'),
                }]}
              >
                <Input.Password placeholder={'Password'}/>
              </Form.Item>
              <Form.Item
                name="password_confirmation"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({getFieldValue}) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password placeholder={'Confirm Password'}/>
              </Form.Item>

              <Form.Item className={'mx-auto'}>
                <Button type="default" className={'uppercase text-black hover:text-black hover:border-black'}
                        htmlType="submit"
                        style={{width: "100%", backgroundColor: "#CD867D"}}>
                  save new password
                </Button>
              </Form.Item>
            </Form>
          </ConfigProvider>

          <p className="text-center mt-5">
            already got it? <a className="text-blue-500" href={route('client.login')}>Sign in</a>
          </p>
        </div>
      </div>

      <Footer/>
    </div>

  );
}

export default NewPassword;
