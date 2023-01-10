import {UploadOutlined} from '@ant-design/icons';
import {Button, Form, message, Upload} from 'antd';
import type {RcFile, UploadChangeParam, UploadFile, UploadProps} from 'antd/es/upload/interface';
import React, {useState} from 'react';
import {Inertia} from "@inertiajs/inertia";
import route, {RouteParam, RouteParamsWithQueryOverload} from "ziggy-js";
import {Product} from "../../../types/products";
import {Variation} from "../../../types/VariationType";
import {Category} from "../../../types/CategoryType";
import {UploadListType} from "antd/lib/upload/interface";

interface Props {
  param: RouteParamsWithQueryOverload | RouteParam
  routeName: string
  multiple: boolean
  buttonLabel?: string
  listType?: UploadListType;
  className?: string | undefined;
  btnClassName?: string | undefined;
}

export default function ImageUploadManually({
                                              param,
                                              routeName,
                                              multiple,
                                              listType = "picture",
                                              buttonLabel = 'Click to Upload',
                                              className = 'py-2',
                                              btnClassName = 'mt-[16px]'
                                            }: Props) {

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('images[]', file.originFileObj as RcFile);
    });
    setUploading(true);

    Inertia.post(route(routeName, param), formData, {
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
    <div className={className}>
      <Upload
        onChange={(e) => onChangeHandler(e)}
        listType={listType}
        onRemove={onRemove}
        multiple={multiple}
      >
        {fileList.length < 6 && <Button icon={<UploadOutlined/>}>{buttonLabel}</Button>}
      </Upload>
      <Button
        type="default"

        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        className={btnClassName}
      >
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
    </div>
  );
};
