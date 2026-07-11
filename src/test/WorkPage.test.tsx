import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { axe } from 'vitest-axe';
import { describe, expect, it } from 'vitest';
import WorkPage from '../pages/WorkPage';

describe('WorkPage', () => {
  it('filters projects by category and remains accessible', async () => {
    const user = userEvent.setup();
    const { container } = render(<MemoryRouter><WorkPage /></MemoryRouter>);
    expect(screen.getByText('Showing 6 projects')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'E-commerce' }));
    expect(screen.getByText('Showing 1 project')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Pulse Commerce' })).toBeInTheDocument();
    expect((await axe(container)).violations).toHaveLength(0);
  });
});
