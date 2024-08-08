import AppBaseLayout from '.';
import { render } from '../../utils/testing';

describe('Testing AppBaseLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppBaseLayout />);
    expect(baseElement).toBeTruthy();
  });
});
