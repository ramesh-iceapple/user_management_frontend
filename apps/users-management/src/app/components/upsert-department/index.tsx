import { UpsertRoleModal } from "./index.style";
import { useEffect,useRef } from "react";
import UpsertDepartmentForm from "./upsert-departmentinfo-form";
import { IDepartment } from "../../interfaces";

interface IUpsertDepartmentModalProps {
  open: boolean;
  onClose: any;
  department?: IDepartment;
}

export function UpsertDepartment(props: IUpsertDepartmentModalProps) {
  const ref:any = useRef();

  useEffect(() => {
    window.parent.postMessage(
      {
        type: "modal",
        message: props.open,
      },
      "*"
    );
  }, [props.open]);

  
const handleCloseModal = () =>{
  ref.current.resetFormFields();
  props.onClose();
} 

  return (
    <UpsertRoleModal open={props.open} onCancel={handleCloseModal} footer={null}>
      <UpsertDepartmentForm department={props.department} onClose={props.onClose} parentRef={ref} />
    </UpsertRoleModal>
  );
}

export default UpsertDepartment;
