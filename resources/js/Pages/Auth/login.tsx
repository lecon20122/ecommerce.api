import {Inertia} from "@inertiajs/inertia";
import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import route from 'ziggy-js';
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import {usePage} from "@inertiajs/inertia-react";
import Alert from "../../components/shards/alert";

interface IFormProps {
  email: string,
  password: string,
}

export default function AdminLogin() {

  const schema = yup.object({
    email: yup.string().required().email().max(200),
    password: yup.string().required(),
  });
  const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormProps>({
    resolver: yupResolver(schema)
  })

  const serverSideErrors = usePage().props.errors
  console.log('====================================');
  console.log(serverSideErrors);
  console.log('====================================');
  const formAddSubmitHandler: SubmitHandler<IFormProps> = (data, e) => {
    e?.preventDefault()
    const resolveData = {...data}
    Inertia.post(route('admin.postLogin'), resolveData)
    reset()
  }


  return (
    <div>
      <section className="bg-gray-100 py-10 min-h-[86vh]">
        <div className="container max-w-screen-xl mx-auto px-4">
          {/* <!--  COMPONENT: SIGN IN --> */}
          <div className="mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg max-w-[500px]">

            <form onSubmit={handleSubmit(formAddSubmitHandler)}>
              <h2 className="mb-5 text-2xl font-semibold">Sign in</h2>
              {serverSideErrors.email && <Alert text={serverSideErrors.email} type={"red"}/>}
              <div className="mb-4">
                <label className="block mb-1"> Email </label>
                <input
                  {...register('email')}
                  name="email"
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  type="text"
                  placeholder="Type here"
                />
                <span>{errors.email?.message}</span>
              </div>
              <div className="mb-4">
                <label className="block mb-1"> Password </label>
                <input
                  {...register('password')}
                  name="password"
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  type="password"
                  placeholder="Type here"
                />
                <span>{errors.password?.message}</span>
              </div>
              <button
                type="submit"
                className="px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
              >Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
