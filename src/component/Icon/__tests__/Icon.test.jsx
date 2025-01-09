import { render, screen } from '@testing-library/react';
import IndustrialGoods from '../../../../assets/industrial-goods.svg';
import Icon from '../Icon';

test('Icon renders correctly', () => {
  const mockProps = {
    icon: IndustrialGoods,
  };
  render(<Icon {...mockProps} />);
  expect(screen.getByTestId('icon')).toBeInTheDocument();
});
