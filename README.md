# E-Commerce Component Library

A portfolio React component library built for the e-commerce domain. Components are designed to be composable, accessible, and fully themed — supporting both light and dark modes out of the box.

**[View Storybook](https://m-m-black.github.io/component-library/)**

## Components

| Component             | Description                                                            |
| --------------------- | ---------------------------------------------------------------------- |
| **Button**            | Primary, secondary, ghost, and destructive variants with loading state |
| **Badge**             | Semantic sale, new, and out-of-stock labels                            |
| **Input / SearchBar** | Text input with icon slot                                              |
| **Rating**            | Star rating display with review count                                  |
| **PriceDisplay**      | Original and discounted price formatting                               |
| **ProductCard**       | Full product tile with image, rating, price, badge, and add-to-cart    |
| **ProductCarousel**   | Horizontally scrollable row of product cards                           |
| **CartItem**          | Cart line item with quantity stepper and remove action                 |
| **Modal**             | Accessible overlay dialog                                              |
| **Drawer**            | Slide-in panel                                                         |
| **Toast**             | Programmatic feedback notifications                                    |
| **ThemeToggle**       | Light / dark mode switcher                                             |

## Tech stack

- **React 19** + **TypeScript**
- **Tailwind CSS v4** for styling
- **Radix UI** primitives for accessible interactive components
- **Radix Icons** via a typed Icon wrapper
- **Storybook 10** for component showcase
- **Vitest** + **React Testing Library** for unit and story tests
- **Chromatic** for hosted Storybook and visual regression testing

## Running locally

```bash
npm install
npm run dev          # Dev server
npm run storybook    # Storybook on localhost:6006
npm run test         # All tests (unit + story)
npm run build        # Production build
```
