import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Drawer, DrawerClose } from './Drawer'
import { Button } from '../Button'

function renderDrawer(props = {}) {
  return render(
    <Drawer trigger={<Button>Open</Button>} title="Test drawer" {...props}>
      <DrawerClose>
        <Button>Continue shopping</Button>
      </DrawerClose>
      <p>Drawer content</p>
    </Drawer>
  )
}

describe('Drawer', () => {
  it('does not show content before being opened', () => {
    renderDrawer()
    expect(screen.queryByText('Test drawer')).not.toBeInTheDocument()
  })

  it('opens when the trigger is clicked', async () => {
    renderDrawer()
    await userEvent.click(screen.getByRole('button', { name: /open/i }))
    expect(screen.getByText('Test drawer')).toBeVisible()
    expect(screen.getByText('Drawer content')).toBeVisible()
  })

  it('closes when the close button is clicked', async () => {
    renderDrawer()
    await userEvent.click(screen.getByRole('button', { name: /open/i }))
    await userEvent.click(screen.getByRole('button', { name: /close/i }))
    expect(screen.queryByText('Test drawer')).not.toBeInTheDocument()
  })

  it('closes when a DrawerClose button is clicked', async () => {
    renderDrawer()
    await userEvent.click(screen.getByRole('button', { name: /open/i }))
    await userEvent.click(screen.getByRole('button', { name: /continue shopping/i }))
    expect(screen.queryByText('Test drawer')).not.toBeInTheDocument()
  })

  it('closes when Escape is pressed', async () => {
    renderDrawer()
    await userEvent.click(screen.getByRole('button', { name: /open/i }))
    await userEvent.keyboard('{Escape}')
    expect(screen.queryByText('Test drawer')).not.toBeInTheDocument()
  })
})
