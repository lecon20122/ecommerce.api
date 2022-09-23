import React from 'react';
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";

interface Props {
  deleteItem: () => void,
  hideDeleteProductDialog: () => void,
  deleteItemDialog: boolean
}

function DeleteConfirmDialog({deleteItem, hideDeleteProductDialog, deleteItemDialog}: Props) {


  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog}/>
      <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteItem}/>
    </React.Fragment>
  );

  return (
    <Dialog visible={deleteItemDialog} style={{width: '450px'}} header="Confirm" modal
            footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
      <div className="confirmation-content">
        <i className="pi pi-exclamation-triangle mr-3" style={{fontSize: '2rem'}}/>
        {'Are you Sure you want to delete this item ?'}
      </div>
    </Dialog>
  );
}

export default DeleteConfirmDialog;
