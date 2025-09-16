import React from 'react';
import { render, screen } from '@testing-library/react';
import { ValuePropsSection } from '../ValuePropsSection';
import { valueProps } from '@/lib/data';

describe('ValuePropsSection', () => {
  it('renders all value prop titles', () => {
    render(<ValuePropsSection />);
    valueProps.forEach(vp => {
      expect(screen.getByText(vp.title)).toBeInTheDocument();
    });
  });
});
