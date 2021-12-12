import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '../components'

describe('Button component', () => {
  test('Should show text', () => {
    render(<Button text="Button" />)
    const button = screen.getByText('Button')
    expect(button).toBeTruthy()
  })
})
