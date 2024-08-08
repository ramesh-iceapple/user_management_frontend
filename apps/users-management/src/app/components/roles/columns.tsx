/* eslint-disable react/jsx-no-useless-fragment */
import { Col, Popconfirm, Row, Tooltip } from "antd";
import { ColumnsType } from "antd/lib/table";
import { MemberActionButton, MemberDataText } from "./index.style";
import { IRole } from "../../interfaces";
import {
  DeleteOutlined,
  EditOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import UpsertRole from "../upsert-role";
import { useAppDispatch } from "../../store";
import { deleteRole, fetchRoles } from "../../redux-modules/thunks/role";
import { toastSuccess, toastError } from "@users-platform/iceapple";
import { FormattedMessage, useIntl } from "react-intl";
import Permissions from "../permissions";
import HasPermission from "../userPermission";
import { PERMISSION_TYPE } from "../../enums";

export const ActionCol = ({ role }: { role: IRole }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openPermisisons, setOpenPermissions] = useState(false);
  const dispatch = useAppDispatch();
  const intl = useIntl();
  const deleteRoleRequest = async () => {
    const result = await dispatch(deleteRole(role.id || 0));
    if (deleteRole.fulfilled.match(result)) {
      toastSuccess({
        content: intl.formatMessage(
          { id: "role.delete.successMessage" },
          { name: role.name }
        ),
      });
      dispatch(fetchRoles());
    } else if (deleteRole.rejected.match(result)) {
      toastError({
        content: intl.formatMessage({ id: result.payload?.message }),
      });
    }
  };

  const handlePermissions = () => {
    setOpenPermissions(true);
  };

  return (
    <>
      <Row wrap={false} gutter={[6, 6]} align={"middle"} justify={"end"}>
        <HasPermission permissions={[PERMISSION_TYPE.ROLE_UPDATE]}>
          <Col>
            <Tooltip title={<FormattedMessage id="um.role.permissions.edit" />}>
              <MemberActionButton
                size={"small"}
                icon={<SolutionOutlined />}
                onClick={handlePermissions}
                id="permissions"
              />
            </Tooltip>
          </Col>
        </HasPermission>
        <HasPermission permissions={[PERMISSION_TYPE.ROLE_UPDATE]}>
          <Col>
            <Tooltip title={<FormattedMessage id="um.role.edit" />}>
              <MemberActionButton
                size={"small"}
                icon={<EditOutlined />}
                onClick={() => setOpenEdit(true)}
                id="editRole"
              />
            </Tooltip>
          </Col>
        </HasPermission>
        <HasPermission permissions={[PERMISSION_TYPE.ROLE_DELETE]}>
          <Col>
            <Popconfirm
              title={
                <FormattedMessage
                  id="role.delete.text"
                  values={{ name: role.name }}
                />
              }
              onConfirm={deleteRoleRequest}
              id="deleteRequestBtn"
              okButtonProps={{
                title: "confirmRoleDelete",
              }}
              cancelButtonProps={{
                title: "cancelRoleDelete",
              }}
            >
              <Tooltip title={<FormattedMessage id="um.role.delete" />}>
                <MemberActionButton
                  size={"small"}
                  id="deleteRole"
                  icon={<DeleteOutlined />}
                />
              </Tooltip>
            </Popconfirm>
          </Col>
        </HasPermission>
      </Row>
      <UpsertRole
        role={role}
        open={openEdit}
        onClose={() => setOpenEdit(false)}
      />
      <Permissions
        role={role}
        open={openPermisisons}
        onClose={() => setOpenPermissions(false)}
      />
    </>
  );
};

export const roleListColumns: ColumnsType<IRole> = [
  {
    title: <FormattedMessage id="common.name" />,
    dataIndex: "name",
    sorter: false,
    render: (text: string, record: IRole) => (
      <MemberDataText id="roleName">{text}</MemberDataText>
    ),
  },
  {
    title: <FormattedMessage id="common.description" />,
    dataIndex: "description",
    sorter: false,
    render: (text: string, record: IRole) => (
      <MemberDataText id="roleDescription">{text}</MemberDataText>
    ),
  },
  {
    title: <FormattedMessage id="common.table.actionColumn" />,
    render: (text, record) => <ActionCol role={record} />,
    align: "right",
  },
];
