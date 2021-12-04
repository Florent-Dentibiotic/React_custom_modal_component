import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal'

const handleBackground = jest.fn()
const handleButton = jest.fn()

describe('Modal', ()=>{
    it('Should render Modal', ()=>{
        render(
            <Modal 
                backgroundAction={handleBackground}
                modalStyle={'modal_custom_style'}
                content={'Hello World !'}
                contentStyle={'m-5'}
                buttonStyle={'button_custom_style'}
                buttonAction={handleButton}/>
        )
        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(handleButton).toHaveBeenCalled()
    })
})