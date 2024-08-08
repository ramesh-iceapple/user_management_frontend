import { UpsertRoleModal } from "./index.style";
import { useEffect, useRef, useState } from "react";
import UpsertRoleForm from "./upsert-userinfo-form";
import { IRole } from "../../interfaces";
import Permissions from "../permissions";

interface IUpsertUserModalProps {
  open: boolean;
  onClose: any;
  role?: IRole;
}

export function UpsertRole(props: IUpsertUserModalProps) {
  const ref: any = useRef();
  const [openPermisisons, setOpenPermissions] = useState(false);

  const [role, setRole] = useState<IRole>();

  useEffect(() => {
    window.parent.postMessage(
      {
        type: "modal",
        message: props.open,
      },
      "*"
    );
  }, [props.open]);

  const handleCloseModal = () => {
    ref.current.resetFormFields();
    props.onClose();
  };

  const handlePermissions = (role: IRole) => {
    ref.current.resetFormFields();
    props.onClose();
    setRole(role);
    setOpenPermissions(true);
  };

  return (
    <>
      <UpsertRoleModal
        open={props.open}
        onCancel={handleCloseModal}
        footer={null}
      >
        <UpsertRoleForm
          role={props.role}
          onClose={props.onClose}
          childRef={ref}
          handlePermissions={handlePermissions}
        />
      </UpsertRoleModal>
      {role && (
        <Permissions
          role={role}
          open={openPermisisons}
          onClose={() => setOpenPermissions(false)}
        />
      )}
    </>
  );
}

export default UpsertRole;
