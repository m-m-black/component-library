import '@testing-library/jest-dom'

// jsdom does not implement the Pointer Events API used by some Radix primitives
window.Element.prototype.hasPointerCapture = () => false
window.Element.prototype.setPointerCapture = () => {}
window.Element.prototype.releasePointerCapture = () => {}

// jsdom does not implement ResizeObserver
window.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// jsdom does not implement IntersectionObserver
window.IntersectionObserver = class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof IntersectionObserver
