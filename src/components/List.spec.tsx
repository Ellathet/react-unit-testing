import React from 'react'
import { render, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import List from './List'

const initialData = ['Micael', 'Juh', 'Will']

describe('List Component', () => {
  
  it('should render list items', async () => {
    const { getByText, rerender, queryByText} = render(<List initialData={initialData}/>)

    expect(getByText('Micael')).toBeInTheDocument()
    expect(getByText('Juh')).toBeInTheDocument()
    expect(getByText('Will')).toBeInTheDocument()

  }),

  it('should be able to add new item in the list', async () => {
    const { getByText, getByPlaceholderText, findByText } = render(<List initialData={[]}/>)

    const inputElement = getByPlaceholderText('Novo Item')
    const addButton = getByText('Adicionar')

    await userEvent.type(inputElement, 'Matheus')
    await userEvent.click(addButton)

    expect(await findByText('Matheus')).toBeInTheDocument()

  })

  it('should not be able to add new item in the list when input is empty', async () => {
    const { getByText } = render(<List initialData={[]}/>)

    const addButton = getByText('Adicionar')

    expect(addButton).toBeDisabled()

  })

  it('should be able to remove a item from the list', async () => {
    const { getByText, getAllByText } = render(<List initialData={['Micael']}/>)

    const removeButtons = getAllByText('Remove')

    await userEvent.click(removeButtons[0])

    await waitForElementToBeRemoved(() => {
      return getByText('Micael');
    })

  })
})