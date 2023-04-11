import { render, screen, fireEvent} from '@testing-library/react';
import App from './App';
import {MainPage} from './pages/MainPage/index'

describe('Render MainPage', ()=> {
  test('renders MainPage component', () => {
    render(<MainPage />);
  });
  test('Success render button Create Group', () => {
    render(<App />);
    const createGroup = screen.getByText(/Create Group/i);
    expect(createGroup).toBeInTheDocument();
  });
  test('Success render title Task groups', () => {
    render(<App />);
    const taskGroups = screen.getByText(/Task groups/i);
    expect(taskGroups).toBeInTheDocument();
  });
  
});
