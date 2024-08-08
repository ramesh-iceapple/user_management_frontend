import { Col, Row } from "antd";
import { IPermission } from "../../../interfaces";
import { PermissionRow, PermissionSwitch, PermissionText } from "./index.style";

interface IPermissionProps {
  permission: IPermission;
  selected: boolean;
  disable: boolean;
  onSelect: any;
}

export function Permission(props: IPermissionProps) {
  const { permission, selected, onSelect, disable } = props;

  const permissionText = permission.name.split(":");

  return (
    <>
      <PermissionRow
        justify={"space-between"}
        align={"middle"}
        onClick={() => {
          if (!disable || permissionText[1] !== "view")
            onSelect(!selected, permission.permissionId);
        }}
        gutter={10}
        disabled={disable && permissionText[1] === "view"}
      >
        <Col>
          <PermissionText>{`${permissionText[1]} ${permissionText[0]}`}</PermissionText>
        </Col>
        <Col>
          <PermissionSwitch
            id={`${permission.permissionId}`}
            checked={selected}
            disabled={disable && permissionText[1] === "view"}
            size="small"
          />
        </Col>
      </PermissionRow>
    </>
  );
}

export default Permission;
