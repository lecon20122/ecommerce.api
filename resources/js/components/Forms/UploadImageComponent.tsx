import React, {useState} from 'react';
import {Button, Form, Upload} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {UploadChangeParam, UploadFile} from "antd/lib/upload/interface";
import Helpers from "../../utils/Helpers";
import {Inertia} from "@inertiajs/inertia";
import route, {RouteParam, RouteParamsWithQueryOverload} from "ziggy-js";

interface Props {
  formClassName?: string,
  // onRemove: (file: UploadFile) => void
  // onChangeHandler: (e: UploadChangeParam) => void
  buttonLabel?: string
  routeName: string
  params?: RouteParamsWithQueryOverload | RouteParam,
}

function UploadImageComponent({formClassName, buttonLabel, routeName, params}: Props) {
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
    <Form className={formClassName} onFinish={onFinish}>
      <Form.Item name="images"
                 valuePropName='images'>
        <Upload listType="picture-card" onRemove={onRemove} onChange={(e) => onChangeHandler(e)}>
          <div>
            <PlusOutlined/>
            <div style={{marginTop: 8}}>Upload</div>
          </div>
        </Upload>
      </Form.Item>
      <Button type="default" htmlType="submit">
        {buttonLabel}
      </Button>
    </Form>
  );
}

export default UploadImageComponent;
