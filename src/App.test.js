//import Enzyme {shallow } from 'enzyme';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Test buttons',()=>{
    it('render two buttons', ()=>{
        // 1- Génération
        render(<App/>);
        // 2 Action

        // 3- Assertion
        // Vérification de deux boutons
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(2);
    });
    it('button with id button1', ()=>{
        render(<App/>);
        const button = screen.getByTestId('button1');
        expect(button).toBeInTheDocument();
    })
});
describe('State test',()=>{
    it('count start with 0',()=>{
        render(<App/>);

        const countElement = screen.getByText('Count : 0');
        expect(countElement).toBeInTheDocument();

        const button = screen.getByTestId('button1');
        fireEvent.click(button);

        const updateCountElement = screen.getByText('Count : 1');
        expect(updateCountElement).toBeInTheDocument();


    })
})