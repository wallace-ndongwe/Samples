import { render, screen } from '@testing-library/react';
import App from './App';

test('renders clinics table', () => {
  render(<App />);
  const linkElement = screen.getByText(/Clinics/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders patients table', () => {
  render(<App />);
  const linkElement = screen.getByText(/Patients/i);
  expect(linkElement).toBeInTheDocument();
});