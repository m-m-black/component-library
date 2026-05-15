import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Modal, ModalClose } from './Modal'
import { Button } from '../Button'

function renderModal(props = {}) {
  return render(
    <Modal
      trigger={<Button>Open</Button>}
      title="Test modal"
      description="Test description"
      {...props}
    >
      <ModalClose><Button variant="secondary">Cancel</Button></ModalClose>
      <p>Modal content</p>
    </Modal>
  )
}

describe('Modal', () => {
  it('does not show content before being opened', () => {
    renderModal()
    expect(screen.queryByText('Test modal')).not.toBeInTheDocument()
  })

  it('opens when the trigger is clicked', async () => {
    renderModal()
    await userEvent.click(screen.getByRole('button', { name: /open/i }))
    expect(screen.getByText('Test modal')).toBeInTheDocument()
    expect(screen.getByText('Test description')).toBeInTheDocument()
    expect(screen.getByText('Modal content')).toBeInTheDocument()
  })

  it('closes when the close button is clicked', async () => {
    renderModal()
    await userEvent.click(screen.getByRole('button', { name: /open/i }))
    await userEvent.click(screen.getByRole('button', { name: /close/i }))
    expect(screen.queryByText('Test modal')).not.toBeInTheDocument()
  })

  it('closes when a ModalClose button is clicked', async () => {
    renderModal()
    await userEvent.click(screen.getByRole('button', { name: /open/i }))
    await userEvent.click(screen.getByRole('button', { name: /cancel/i }))
    expect(screen.queryByText('Test modal')).not.toBeInTheDocument()
  })

  it('closes when Escape is pressed', async () => {
    renderModal()
    await userEvent.click(screen.getByRole('button', { name: /open/i }))
    await userEvent.keyboard('{Escape}')
    expect(screen.queryByText('Test modal')).not.toBeInTheDocument()
  })
})
