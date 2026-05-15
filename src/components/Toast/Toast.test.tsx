import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as RadixToast from '@radix-ui/react-toast'
import { Toast } from './Toast'

function renderToast(props: Partial<React.ComponentProps<typeof Toast>> = {}) {
  return render(
    <RadixToast.Provider>
      <Toast
        open={true}
        onOpenChange={() => {}}
        title="Test toast"
        description="Test description"
        duration={Infinity}
        {...props}
      />
      <RadixToast.Viewport />
    </RadixToast.Provider>
  )
}

describe('Toast', () => {
  it('renders the title when open', () => {
    renderToast()
    expect(screen.getByText('Test toast')).toBeInTheDocument()
  })

  it('renders the description when provided', () => {
    renderToast()
    expect(screen.getByText('Test description')).toBeInTheDocument()
  })

  it('does not render when open is false', () => {
    renderToast({ open: false })
    expect(screen.queryByText('Test toast')).not.toBeInTheDocument()
  })

  it('calls onOpenChange with false when dismiss button is clicked', async () => {
    const onOpenChange = vi.fn()
    renderToast({ onOpenChange })
    await userEvent.click(screen.getByRole('button', { name: /dismiss/i }))
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('calls onOpenChange with false after duration expires', async () => {
    vi.useFakeTimers()
    const onOpenChange = vi.fn()
    renderToast({ onOpenChange, duration: 1000 })
    act(() => vi.advanceTimersByTime(1000))
    expect(onOpenChange).toHaveBeenCalledWith(false)
    vi.useRealTimers()
  })
})
