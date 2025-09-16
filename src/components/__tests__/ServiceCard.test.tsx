import React from 'react';
import { render, screen } from '@testing-library/react';
import { ServiceCard } from '../ServiceCard';

describe('ServiceCard', () => {
  it('renders title and description', () => {
    render(
      <ServiceCard service={{ id: 'x', title: 'Test Service', description: 'Desc', highlights: ['A','B'] }} />
    );
    expect(screen.getByText('Test Service')).toBeInTheDocument();
    expect(screen.getByText('Desc')).toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument();
  });
});
