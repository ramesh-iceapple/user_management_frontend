
import { render } from '../../utils/testing';
import HasPermission from '.';
import { PERMISSION_TYPE } from '../../enums';

describe('Testing User Permission component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HasPermission
        // eslint-disable-next-line react/no-children-prop
        children={undefined}
        permissions={[PERMISSION_TYPE.AI_ANALYSIS_AUTOMATIC_CREATE]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
