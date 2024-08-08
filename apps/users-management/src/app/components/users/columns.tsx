/* eslint-disable react/jsx-no-useless-fragment */
import { Col, Popconfirm, Row } from "antd";
import { ColumnsType } from "antd/lib/table";
import {
  MemberActionButton,
  MemberDataText,
  MemberSuccessStatus,
} from "./index.style";
import { IRole, IUserInfo } from "../../interfaces";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Gender, PERMISSION_TYPE, Status } from "../../enums";
import { toastSuccess, toastError } from "@users-platform/iceapple";
import { useState } from "react";
import role from "../../redux-modules/slices/role";
import { useAppDispatch, useAppSelector } from "../../store";
import UpsertUser from "../upsert-user";
import { deleteUser, fetchUsers } from "../../redux-modules/thunks/user";
import { FormattedMessage, useIntl } from "react-intl";
import HasPermission from "../userPermission";
import { setCurrentPage } from "../../redux-modules/slices/user";
import { getUsersInfoSelector } from "../../redux-modules/selectors/user";

export const ActionCol = ({ user }: { user: IUserInfo }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useAppDispatch();
  const intl = useIntl();
  const {
    data,
    currentPage,
  } = useAppSelector(getUsersInfoSelector);

  const deleteUserRequest = async () => {
    const result = await dispatch(deleteUser(user.id || 0));
    if (deleteUser.fulfilled.match(result)) {
      toastSuccess({
        content: intl.formatMessage(
          { id: "um.users.tableRow.deletePopUp.successMessage" },
          { firstName: user.firstName, lastName: user.lastName }
        ),
      });
      if(data.length == 1){
        dispatch(setCurrentPage(currentPage - 1));
      }else{
        dispatch(fetchUsers());
      }
    } else if (deleteUser.rejected.match(result)) {
      toastError({
        content: intl.formatMessage({ id: result.payload?.message }),
      });
    }
  };

  return (
    <>
      <Row wrap={false} gutter={[6, 6]} align={"middle"} justify={"end"}>
        <HasPermission permissions={[PERMISSION_TYPE.USER_UPDATE]}>
          <Col>
            <MemberActionButton
              size={"small"}
              icon={<EditOutlined />}
              onClick={() => setOpenEdit(true)}
              id="editBtn"
            />
          </Col>
        </HasPermission>
        <HasPermission permissions={[PERMISSION_TYPE.USER_DELETE]}>
          <Col>
            <Popconfirm
              title={
                <FormattedMessage
                  id="um.users.tableRow.deletePopUp.text"
                  values={{
                    firstName: user.firstName,
                    lastName: user.lastName,
                  }}
                />
              }
              onConfirm={deleteUserRequest}
              id="deleteRequestBtn"
              okButtonProps={{
                title: "confirmUserDelete",
              }}
              cancelButtonProps={{
                title: "cancelUserDelete",
              }}
            >
              <MemberActionButton
                size={"small"}
                id="deleteBtn"
                icon={<DeleteOutlined />}
              />
            </Popconfirm>
          </Col>
        </HasPermission>
      </Row>
      <UpsertUser
        user={user}
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        editUser={true}
      />
    </>
  );
};

export const memberListColumns: ColumnsType<IUserInfo> = [
  {
    title: <FormattedMessage id="common.firstName" />,
    dataIndex: "firstName",
    sorter: false,
    render: (text: string, record: IUserInfo) => (
      <MemberDataText id="firstName">{text}</MemberDataText>
    ),
  },
  {
    title: <FormattedMessage id="common.lastName" />,
    dataIndex: "lastName",
    sorter: false,
    render: (text: string, record: IUserInfo) => (
      <MemberDataText id="lastName">{text}</MemberDataText>
    ),
  },
  {
    title: <FormattedMessage id="common.mobile" />,
    dataIndex: "mobile",
    render: (text) => <MemberDataText id="mobile">{text}</MemberDataText>,
    sorter: false,
  },
  {
    title: <FormattedMessage id="common.email" />,
    dataIndex: "email",
    render: (text) => <MemberDataText id="email">{text}</MemberDataText>,
    sorter: false,
  },
  {
    title: <FormattedMessage id="common.gender" />,
    dataIndex: "gender",
    render: (text) => (
      <MemberDataText id="gender">
        {text === Gender.MALE ? "Male" : "Female"}
      </MemberDataText>
    ),
    sorter: false,
  },
  {
    title: <FormattedMessage id="common.status" />,
    dataIndex: "statusCode",
    render: (text) => (
      <MemberSuccessStatus id="status">
        {text === Status.ACTIVE ? "Active" : "Deleted"}
      </MemberSuccessStatus>
    ),
    sorter: false,
    responsive: ["md", "lg"],
  },
  {
    title: <FormattedMessage id="common.roles" />,
    dataIndex: "roles",
    render: (text: IRole[]) => (
      <MemberDataText id="roles">
        {text && text.length > 0 && text.map((x) => x.name).join(",")}
      </MemberDataText>
    ),
    sorter: false,
    responsive: ["md", "lg"],
  },
  {
    title: <FormattedMessage id="common.sites" />,
    dataIndex: "sites",
    render: (text: IRole[]) => (
      <MemberDataText id="sites">
        {text && text.length > 0 && text.map((x) => x.name).join(",")}
      </MemberDataText>
    ),
    sorter: false,
    responsive: ["md", "lg"],
  },
  {
    title: <FormattedMessage id="common.table.actionColumn" />,
    render: (text, record) => <ActionCol user={record} />,
    align: "right",
  },
];
