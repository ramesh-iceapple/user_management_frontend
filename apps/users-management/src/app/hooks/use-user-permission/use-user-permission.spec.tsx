import { renderHook } from '@testing-library/react';
import useUserPermission from './use-user-permission';

describe('useUserPermission', () => {
  it('should render successfully', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    const { result } = renderHook(() => useUserPermission());
  });
});
