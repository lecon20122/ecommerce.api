import React, {useState} from 'react';
import {Button, Form, Upload} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {UploadChangeParam, UploadFile} from "antd/lib/upload/interface";
import Helpers from "../../utils/Helpers";
import {Inertia} from "@inertiajs/inertia";
import route, {RouteParam, RouteParamsWithQueryOverload} from "ziggy-js";
import {ColProps} from "antd/lib/grid/col";

interface Props {
  formClassName?: string,
  buttonLabel?: string
  routeName: string
  params?: RouteParamsWithQueryOverload | RouteParam,
  wrapperCol?: ColProps
  buttonWrapperCol?: ColProps
  labelCol?: ColProps
}

function UploadImageComponent({formClassName, buttonLabel = 'UPLOAD', routeName, params, wrapperCol, labelCol , buttonWrapperCol}: Props) {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const helpers = new Helpers()

  const uploadImageAction = (values: any) => {
    Inertia.post(route(routeName, params), values, {
      preserveState: false
    })
  }

  const onFinish = (values: any) => {
    if (!values.images) {
      uploadImageAction(values)
    } else {
      values.images = helpers.appendImageToFormData(fileList)
      uploadImageAction(values)
    }
  };

  const onChangeHandler = (file: UploadChangeParam) => {
    setFileList(file.fileList);
  }

  const onRemove = (file: any) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
  }

  return (
    <Form className={formClassName} onFinish={onFinish}
          labelCol={labelCol}
          wrapperCol={wrapperCol}
    >
      <Form.Item name="images"
                 valuePropName='images'>
        <Upload listType="picture-card" onRemove={onRemove} onChange={(e) => onChangeHandler(e)}>
          <div>
            <PlusOutlined/>
            <div style={{marginTop: 8}}>Upload</div>
          </div>
        </Upload>
      </Form.Item>
      <Form.Item wrapperCol={buttonWrapperCol}>
        <Button type="default" htmlType="submit">
          {buttonLabel}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UploadImageComponent;
