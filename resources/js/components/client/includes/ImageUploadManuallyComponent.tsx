import {UploadOutlined} from '@ant-design/icons';
import {Button, Form, message, Upload} from 'antd';
import type {RcFile, UploadChangeParam, UploadFile, UploadProps} from 'antd/es/upload/interface';
import React, {useState} from 'react';
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import {Product} from "../../../types/products";
import {Variation} from "../../../types/VariationType";

interface Props {
  model: Product | Variation
  routeName: string
  multiple: boolean
}

export default function ImageUploadManually({model, routeName, multiple}: Props) {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('images[]', file.originFileObj as RcFile);
    });
    setUploading(true);
    Inertia.post(route(routeName, model), formData, {
      preserveState: false
    })
  };

  const onRemove = (file: any) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
  }

  const onChangeHandler = (file: UploadChangeParam) => {
    setFileList(file.fileList);
  }

  return (
    <div className={'py-2'}>
      <Upload
        onChange={(e) => onChangeHandler(e)}
        listType="picture"
        onRemove={onRemove}
        multiple={multiple}
      >
        {fileList.length < 6 &&  <Button icon={<UploadOutlined />}>Click to Upload</Button>}
      </Upload>
      <Button
        className='flex'
        type="default"

        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{marginTop: 16}}
      >
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
    </div>
  );
};
