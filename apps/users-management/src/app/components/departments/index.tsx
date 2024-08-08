import { Col, Table } from "antd";
import {
  AddNewUserButton,
  AddNewUserCol,
  Container,
  HeaderRow,
  MemberHeader,
} from "./index.style";
import { useEffect, useState } from "react";
import { departmentListColumns } from "./columns";
import { IDepartment } from "../../interfaces";
import { useAppDispatch, useAppSelector } from "../../store";
import { FormattedMessage } from "react-intl";
import { PlusOutlined } from "@ant-design/icons";
import UpsertDepartment from "../upsert-department";
import { fetchDepartments } from "../../redux-modules/thunks/department";
import { getDepartmentsInfoSelector } from "../../redux-modules/selectors/department";
import { PERMISSION_TYPE } from "../../enums";
import HasPermission from "../userPermission";

const Departments = () => {
  const dispatch = useAppDispatch();
  const [openAdd, setOpenAdd] = useState(false);
  const departments = useAppSelector(getDepartmentsInfoSelector);

  useEffect(() => {
    dispatch(fetchDepartments());
  }, []);

  return (
    <Container>
      <HeaderRow align={"middle"}>
        <Col xs={24} lg={12} md={12} sm={24}>
          <MemberHeader>
            <FormattedMessage id="common.departments" />
          </MemberHeader>
        </Col>
        <HasPermission permissions={[PERMISSION_TYPE.DEPARTMENT_CREATE]}>
          <AddNewUserCol xs={24} lg={12} md={12} sm={24}>
            <AddNewUserButton
              id="addDepartment"
              onClick={() => setOpenAdd(true)}
              icon={<PlusOutlined />}
            >
              <FormattedMessage id="um.addNewDepartmentBtn" />
            </AddNewUserButton>
          </AddNewUserCol>
        </HasPermission>
      </HeaderRow>

      <Table
        rowKey="_id"
        columns={departmentListColumns}
        dataSource={departments}
        pagination={false}
      />
      <UpsertDepartment open={openAdd} onClose={() => setOpenAdd(false)} />
    </Container>
  );
};

export default Departments;
