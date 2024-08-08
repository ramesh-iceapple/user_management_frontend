import { Modal } from "antd";
import UpsertUserForm from "./upsert-user-form";
import { UpsertUserModal } from "./index.style";
import { useEffect, useRef } from "react";
import { fetchRolesWithPermissions } from "../../redux-modules/thunks/role";
import { useAppDispatch } from "../../store";
import { IUserInfo } from "../../interfaces";

interface IUpsertUserModalProps {
  open: boolean;
  onClose: any;
  user?: IUserInfo;
  editUser?: boolean;
}

export function UpsertUser(props: IUpsertUserModalProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.parent.postMessage(
      {
        type: "modal",
        message: props.open,
      },
      "*"
    );
    if (props.open) {
      dispatch(fetchRolesWithPermissions());
    }
  }, [props.open]);

const ref:any = useRef();
const childRef: any = useRef();

const handleCloseModal = () =>{
  ref.current.resetFormStep();
  if(!props.user){
  childRef.current.resetFormFields();
}
  props.onClose();
} 

  return (
    <UpsertUserModal
      edit={!!props.user}
      open={props.open}
      onCancel={handleCloseModal}
      footer={null}
    >
      <UpsertUserForm
        open={props.open}
        user={props.user}
        onClose={props.onClose}
        parentRef={ref}
        childRef={childRef}
        editUser={props.editUser}
      />
    </UpsertUserModal>
  );
}

export default UpsertUser;
