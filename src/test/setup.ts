import '@testing-library/jest-dom'

// jsdom does not implement the Pointer Events API used by some Radix primitives
window.Element.prototype.hasPointerCapture = () => false
window.Element.prototype.setPointerCapture = () => {}
window.Element.prototype.releasePointerCapture = () => {}
