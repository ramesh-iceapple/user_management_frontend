import { CheckboxProps, Col, Row, Table, TablePaginationConfig } from "antd";
import {
  AddNewUserButton,
  AddNewUserCol,
  Container,
  MemberHeader,
  SearchFilterContainer,
} from "./index.style";
import SearchBar from "./searchBar";
import Filters from "./filters";
import { useCallback, useEffect, useMemo, useState } from "react";
import { memberListColumns } from "./columns";
import { FilterValue, SorterResult } from "antd/lib/table/interface";
import { IUser, IUserInfo } from "../../interfaces";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  setCurrentPage,
  setSelectedFilters,
} from "../../redux-modules/slices/user";
import {
  getUsersInfoSelector,
  getUsersSelectedFiltersSelector,
} from "../../redux-modules/selectors/user";
import { fetchUsers } from "../../redux-modules/thunks/user";
import UpsertUser from "../upsert-user";
import { fetchRoles } from "../../redux-modules/thunks/role";
import { FormattedMessage } from "react-intl";
import { PlusOutlined } from "@ant-design/icons";
import { fetchSites } from "../../redux-modules/thunks/site";
import { fetchDepartments } from "../../redux-modules/thunks/department";
import HasPermission from "../userPermission";
import { PERMISSION_TYPE } from "../../enums";

const Users = () => {
  const dispatch = useAppDispatch();
  const selectedFilters = useAppSelector(getUsersSelectedFiltersSelector);
  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<IUserInfo> | SorterResult<IUserInfo>[]
  ) => {
    if (pagination) {
      dispatch(setCurrentPage(pagination.current ?? 1));
    }
  };

  const {
    data: userInfoList,
    currentPage,
    sortBy,
    orderBy,
    totalCount,
    limit,
  } = useAppSelector(getUsersInfoSelector);
  const [openAdd, setOpenAdd] = useState(false);

  useEffect(() => {
    dispatch(fetchRoles());
    dispatch(fetchSites());
    dispatch(fetchDepartments());
  }, []);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [currentPage, selectedFilters.roles, selectedFilters.statuses]);

  return (
    <Container>
      <Row align={"middle"}>
        <Col xs={24} lg={12} md={12} sm={24}>
          <MemberHeader>
            <FormattedMessage id="common.users" />
          </MemberHeader>
        </Col>
        <HasPermission permissions={[PERMISSION_TYPE.USER_CREATE]}>
          <AddNewUserCol xs={24} lg={12} md={12} sm={24}>
            <AddNewUserButton
              id="addNewUser"
              onClick={() => setOpenAdd(true)}
              icon={<PlusOutlined />}
            >
              <FormattedMessage id="um.addNewUserBtn" />
            </AddNewUserButton>
          </AddNewUserCol>
        </HasPermission>
      </Row>
      <SearchFilterContainer>
        <SearchBar />
        <Filters />
      </SearchFilterContainer>

      <Table
        rowKey="id"
        columns={memberListColumns}
        onChange={handleTableChange}
        dataSource={userInfoList ? userInfoList : undefined}
        pagination={{
          current: currentPage,
          position: ["bottomCenter"],
          pageSize: limit,
          total: totalCount ?? 0,
          showSizeChanger: false,
        }}
      />
      <UpsertUser open={openAdd} onClose={() => setOpenAdd(false)} />
    </Container>
  );
};

export default Users;
