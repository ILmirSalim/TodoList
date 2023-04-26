import { render, screen } from '@testing-library/react';
import App from './App';
import  MainPage  from './pages/MainPage';

describe('Render MainPage', (): void => {
  test('renders MainPage component', (): void => {
    render(<MainPage />);
  });
  test('Success render button Create Group', (): void => {
    render(<App />);
    const createGroup = screen.getByText(/Create Group/i);
    expect(createGroup).toBeInTheDocument();
  });
  test('Success render title Task groups', (): void => {
    render(<App />);
    const taskGroups = screen.getByText(/Task groups/i);
    expect(taskGroups).toBeInTheDocument();
  });
});