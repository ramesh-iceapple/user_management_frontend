/* eslint-disable react/jsx-no-useless-fragment */
import { Col, Popconfirm, Row } from "antd";
import { ColumnsType } from "antd/lib/table";
import { MemberActionButton, MemberDataText } from "./index.style";
import { IDepartment } from "../../interfaces";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useAppDispatch } from "../../store";
import { toastSuccess, toastError } from "@users-platform/iceapple";
import { values } from "lodash";
import { FormattedMessage, useIntl } from "react-intl";
import {
  deleteDepartment,
  fetchDepartments,
} from "../../redux-modules/thunks/department";
import UpsertDepartment from "../upsert-department";
import { PERMISSION_TYPE } from "../../enums";
import HasPermission from "../userPermission";

export const ActionCol = ({ department }: { department: IDepartment }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useAppDispatch();
  const intl = useIntl();

  const deleteDepartmentRequest = async () => {
    const result = await dispatch(deleteDepartment(department.id || 0));
    if (deleteDepartment.fulfilled.match(result)) {
      toastSuccess({
        content: intl.formatMessage(
          { id: "department.delete.successMessage" },
          { name: department.name }
        ),
      });
      dispatch(fetchDepartments());
    } else if (deleteDepartment.rejected.match(result)) {
      toastError({
        content: intl.formatMessage({ id: result.payload?.message }),
      });
    }
  };

  return (
    <>
      <Row wrap={false} gutter={[6, 6]} align={"middle"} justify={"end"}>
        <HasPermission permissions={[PERMISSION_TYPE.DEPARTMENT_UPDATE]}>
          <Col>
            <MemberActionButton
              size={"small"}
              icon={<EditOutlined />}
              onClick={() => setOpenEdit(true)}
              id="editDepartment"
            />
          </Col>
        </HasPermission>
        <HasPermission permissions={[PERMISSION_TYPE.DEPARTMENT_DELETE]}>
          <Col>
            <Popconfirm
              title={
                <FormattedMessage
                  id="department.delete.text"
                  values={{ name: department.name }}
                />
              }
              onConfirm={deleteDepartmentRequest}
              id="deleteRequestBtn"
              okButtonProps={{
                title: "confirmDepartmentDelete",
              }}
              cancelButtonProps={{
                title: "cancelDepartmentDelete",
              }}
            >
              <MemberActionButton
                size={"small"}
                id="deleteDepartment"
                icon={<DeleteOutlined />}
              />
            </Popconfirm>
          </Col>
        </HasPermission>
      </Row>
      <UpsertDepartment
        department={department}
        open={openEdit}
        onClose={() => setOpenEdit(false)}
      />
    </>
  );
};

export const departmentListColumns: ColumnsType<IDepartment> = [
  {
    title: <FormattedMessage id="common.name" />,
    dataIndex: "name",
    sorter: false,
    render: (text: string, record: any) => (
      <MemberDataText id="departmentName">{text}</MemberDataText>
    ),
  },
  {
    title: <FormattedMessage id="common.description" />,
    dataIndex: "description",
    sorter: false,
    render: (text: string, record: any) => (
      <MemberDataText id="description">{text}</MemberDataText>
    ),
  },
  {
    title: <FormattedMessage id="common.table.actionColumn" />,
    render: (text, record) => <ActionCol department={record} />,
    align: "right",
  },
];
