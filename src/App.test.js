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
test('does not add group if group with same name already exists in local storage', () => {   
  localStorage.setItem('groups', JSON.stringify([{ id: '123', name: 'Test Group', color: 'Red', tasks: [], users: [] }]));   
  const { handleSubmit } = render(<MainPage />);   const form = handleSubmit('form');  
   const nameInput = handleSubmit('group-name');   
   const colorInput = handleSubmit('group-color');   
   const usersInput = handleSubmit('group-users');   
   fireEvent.change(nameInput, { target: { value: 'Test Group' } });   
   fireEvent.change(colorInput, { target: { value: 'Blue' } });   
   fireEvent.change(usersInput, { target: { value: 'User1,User2' } });   
   fireEvent.submit(form);   const groupsData = JSON.parse(localStorage.getItem('groups'));   
   expect(groupsData.length).toBe(1); });