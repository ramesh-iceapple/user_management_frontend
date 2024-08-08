import { Col, Table } from "antd";
import {
  AddNewUserButton,
  AddNewUserCol,
  Container,
  HeaderRow,
  MemberHeader,
} from "./index.style";
import { useEffect, useState } from "react";
import { roleListColumns } from "./columns";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchRoles } from "../../redux-modules/thunks/role";
import { getRoles } from "../../redux-modules/selectors/role";
import UpsertRole from "../upsert-role";
import { FormattedMessage } from "react-intl";
import { PlusOutlined } from "@ant-design/icons";
import HasPermission from "../userPermission";
import { PERMISSION_TYPE } from "../../enums";

const Roles = () => {
  const dispatch = useAppDispatch();
  const roles = useAppSelector(getRoles);
  const [openAdd, setOpenAdd] = useState(false);

  useEffect(() => {
    dispatch(fetchRoles());
  }, []);

  return (
    <Container>
      <HeaderRow align={"middle"}>
        <Col xs={24} lg={12} md={12} sm={24}>
          <MemberHeader>
            <FormattedMessage id="common.roles" />
          </MemberHeader>
        </Col>
        <HasPermission permissions={[PERMISSION_TYPE.ROLE_CREATE]}>
          <AddNewUserCol xs={24} lg={12} md={12} sm={24}>
            <AddNewUserButton
              id="addRole"
              onClick={() => setOpenAdd(true)}
              icon={<PlusOutlined />}
            >
              <FormattedMessage id="um.addNewRoleBtn" />
            </AddNewUserButton>
          </AddNewUserCol>
        </HasPermission>
      </HeaderRow>

      <Table
        rowKey="_id"
        columns={roleListColumns}
        dataSource={roles}
        pagination={false}
      />
      <UpsertRole open={openAdd} onClose={() => setOpenAdd(false)} />
    </Container>
  );
};

export default Roles;
