import { render } from '@testing-library/react';
import Venus from '../../lib/components/Venus';

describe('Venus Component', () => {
  const subject = () => { render(<Venus />, {}) };

  it('does not throw an error', () => {
    expect(subject).not.toThrow();
  });
});
