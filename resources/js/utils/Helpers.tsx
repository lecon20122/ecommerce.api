import {RcFile, UploadFile} from "antd/es/upload/interface";

export default class Helpers {
  appendImageToFormData(fileList: UploadFile[]) {
    let images: any = []
    fileList.forEach(file => {
      images.push(file.originFileObj as RcFile)
    });
    return images
  }
}
