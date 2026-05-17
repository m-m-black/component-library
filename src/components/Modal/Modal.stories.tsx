import type { Meta, StoryObj } from '@storybook/react-vite'
import { Modal, ModalClose } from './Modal'
import { Button } from '../Button'

const meta = {
  component: Modal,
  tags: [],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    trigger: <Button>Open modal</Button>,
    title: 'Confirm purchase',
    description: 'Are you sure you want to complete this purchase?',
    children: (
      <div className="flex justify-end gap-3 mt-4">
        <ModalClose>
          <Button variant="secondary">Cancel</Button>
        </ModalClose>
        <Button>Confirm</Button>
      </div>
    ),
  },
}

export const WithLongContent: Story = {
  args: {
    trigger: <Button variant="secondary">View details</Button>,
    title: 'Product details',
    children: (
      <div className="space-y-3 text-sm text-text-muted">
        <p>This product is crafted from the finest materials available.</p>
        <p>Free shipping on orders over $50. Returns accepted within 30 days.</p>
        <p>Available in multiple sizes and colours. See our size guide for more information.</p>
      </div>
    ),
  },
}

export const AllVariants: Story = {
  args: {
    trigger: <Button>Open modal</Button>,
    title: 'Modal title',
    children: <p className="text-text-muted text-sm">Modal body content goes here.</p>,
  },
  render: () => (
    <div className="flex gap-4">
      <Modal
        trigger={<Button>Default modal</Button>}
        title="Confirm purchase"
        description="Are you sure you want to complete this purchase?"
      >
        <div className="flex justify-end gap-3 mt-4">
          <ModalClose>
            <Button variant="secondary">Cancel</Button>
          </ModalClose>
          <Button>Confirm</Button>
        </div>
      </Modal>
      <Modal trigger={<Button variant="secondary">Info modal</Button>} title="Product details">
        <p className="text-text-muted text-sm">Details about this product.</p>
      </Modal>
    </div>
  ),
}
