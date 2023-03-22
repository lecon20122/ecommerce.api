import { Inertia } from "@inertiajs/inertia";
import React from "react";
import route from 'ziggy-js';
import { usePage } from "@inertiajs/inertia-react";
import { Button, Form, Input } from "antd";

interface IFormProps {
  email: string,
  password: string,
}

export default function AdminLogin() {

  const serverSideErrors = usePage().props.errors

  console.log(serverSideErrors)

  const onFinish = (values: any) => {
    Inertia.post(route('admin.postLogin'), values, {
      preserveState: false
    })
  };

  const onSingInWithGoogle = () => {
    Inertia.get(route('admin.googleLogin'))
  }

  return (
    <div>
      <section className="bg-gray-100 py-10 min-h-[86vh]">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg max-w-[500px]">
            {serverSideErrors.email && <span className='text-red-600'>{serverSideErrors.email}</span>}
            <div

              className="flex items-center justify-center gap-4 mt-4">
              <button
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-white border border-gray-300 shadow-sm text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="button"
              >
                {/* // create google logo svg for sign form */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16"> <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" /> </svg>

                <a href={route('admin.googleLogin')}>Sign in with Google</a>
              </button>
            </div>
            {/* <Form size={'large'} onFinish={onFinish}>
              <Form.Item
                hasFeedback
                name="email"
                wrapperCol={{ span: 24 }}
                rules={[{ required: true }]}
              >
                <Input placeholder={"Phone or Email"} />
              </Form.Item>
              <Form.Item
                hasFeedback
                name="password"
                wrapperCol={{ span: 24 }}
                rules={[{ required: true }]}
              >
                <Input.Password placeholder={"Password"} />
              </Form.Item>
              <Form.Item className={'mx-auto'}>
                <Button type="default" className={'uppercase text-white hover:text-white hover:dropshadow-lg hover:border-black'}
                  htmlType="submit"
                  style={{ width: "100%", backgroundColor: 'black' }}>
                  sign in
                </Button>
              </Form.Item>
              <div className={'flex justify-between content-center gap-4'}>
              </div>
            </Form> */}
          </div>
        </div>
      </section>
    </div>
  );
}
