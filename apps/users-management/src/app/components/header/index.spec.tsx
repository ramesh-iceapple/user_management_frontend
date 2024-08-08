import Header from '.';
import { render } from '../../utils/testing';

describe('Testing Header component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header onOpen={undefined} />);
    expect(baseElement).toBeTruthy();
  });
});
