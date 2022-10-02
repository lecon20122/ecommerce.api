import React from 'react';
import route from "ziggy-js";
import Footer from "../../../components/client/includes/footer";
import {Inertia} from "@inertiajs/inertia";
import {Alert, Button, ConfigProvider, Form, Input} from "antd";
import {usePage} from "@inertiajs/inertia-react";

interface RegisterData {
  email: string,
  password: string,
  phone: string,
  name: string
}

function Register() {

  const serverSideErrors = usePage().props.errors


  const onFinish = (values: any) => {
    Inertia.post(route('client.postSignup'), values, {
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

  return (
    <div>
      <div className="my-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg max-w-[360px]">
        <h2 className="mb-5 text-2xl font-semibold text-center">Create New Account</h2>
        <ConfigProvider form={{validateMessages}}>
          <Form
            name="basic"
            size={'large'}
            layout={'vertical'}
            labelCol={{span: 16}}
            wrapperCol={{span: 24}}
            initialValues={{remember: true}}
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              rules={[{required: true, message: 'Please input your username!'}]}
            >
              <Input placeholder={'Name'}/>
            </Form.Item>
            {serverSideErrors.name && <Alert message={serverSideErrors.name} type={"error"} closable/>}
            <Form.Item
              hasFeedback
              name="email"
              rules={[{required: true, type: 'email', message: 'Please input your username!'}]}
            >
              <Input placeholder="Email Address"/>
            </Form.Item>
            {serverSideErrors.email && <Alert message={serverSideErrors.email} type={"error"} closable/>}
            <Form.Item
              hasFeedback
              name="phone"
              wrapperCol={{span: 24}}
              rules={[{required: true, pattern: /^[0-9]{11,}$/, message: 'please provide a valid number'}]}
            >
              <Input placeholder={"Phone Number"}/>
            </Form.Item>
            {serverSideErrors.phone && <Alert message={serverSideErrors.phone} type={"error"} closable/>}
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
            {serverSideErrors.password && <Alert message={serverSideErrors.password} type={"error"} closable/>}

            <Form.Item
              name="confirm"
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
                create new account
              </Button>
            </Form.Item>
          </Form>
        </ConfigProvider>
        <p className="text-center mt-5">
          already have an account? <a className="text-blue-500" href={route('client.login')}>Sign in</a>
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default Register;
