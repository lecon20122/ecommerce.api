import React from 'react'
import Footer from "../../../components/client/includes/footer";
import {GoogleOutlined} from '@ant-design/icons'
import {InertiaLink} from "@inertiajs/inertia-react";
import route from "ziggy-js";


export default function login() {

  // const Footer = lazy(() => import("../../../components/client/includes/footer"))

  // const [formData, setFormData] = useState<LoginInfo>({email: '', password: ''})

  // const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
  //   console.log(formData)
  //   if (formData) {
  //     setFormData({...formData, [event.currentTarget.name]: event.currentTarget.value})
  //   }
  // }

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   setFormData({email: '', password: ''})
  // }

  return (
    <div>

      <div className="mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg max-w-[360px]">
        <form action="">
          <h2 className="mb-5 text-2xl font-semibold">Sign in</h2>

          <div className="mb-4">
            <label className="block mb-1"> Email </label>
            <input
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="text" placeholder="Type here"/>
          </div>

          <div className="mb-4">
            <label className="block mb-1"> Password </label>
            <input
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="password" placeholder="Type here"/>
          </div>

          <label className="flex items-center w-max mb-5">
            <input name="" type="checkbox" className="h-4 w-4"/>
            <span className="ml-2 inline-block text-gray-500"> Remember me </span>
          </label>

          <button type="submit"
                  className="px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
          > Sign in
          </button>

          <div className="text-center border-b my-5 leading-[0.1rem]">
            <span className="px-3 bg-white text-gray-400">or</span>
          </div>

          <a href={route('client.social.login')}
                       className="mb-2 px-4 py-2 w-full flex items-center justify-center text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600">
            <span className='mx-1'>Continue with</span><GoogleOutlined/>
          </a>
          <p className="text-center mt-5">
            Don’t have an account? <a className="text-blue-500" href="#">Sign up</a>
          </p>
        </form>
      </div>
      <Footer/>
    </div>

  )
}
