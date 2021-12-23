import React from 'react'

interface ButtonProps {
  /**
   * Text or label of button
   */
  text: string
  /**
   * What type of button
   */
  type?: keyof typeof buttonTypeMap
  /**
   * How big the button
   */
  size?: keyof typeof buttonSizeMap
  /**
   * How big the border radius
   */
  rounded?: keyof typeof buttonRadiusMap
  /**
   * Set button width manually
   */
  width?: number
  /**
   * Overwrite text color
   */
  color?: string
  /**
   * Overwrite background color
   */
  backgroundColor?: string
  /**
   * Is button disabled
   */
  disabled?: boolean
  /**
   * Loading state
   */
  loading?: boolean
  /**
   * Icon for button
   */
  icon?: JSX.Element
  /**
   * Icon position
   */
  iconPosition?: 'left' | 'right'
  /**
   * Optional click event
   */
  onClick?: () => void
}

export const Button = ({
  text,
  type = 'secondary',
  size = 'base',
  rounded = 'md',
  width,
  color,
  backgroundColor,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  onClick
}: ButtonProps) => {
  const clickHandle = () => {
    if (loading) {
      return
    }

    if (onClick) onClick()
  }

  return (
    <>
      <button
        type="button"
        className={`inline-flex items-center justify-center relative text-center overflow-hidden ${buttonRadiusMap[rounded]} ${buttonTypeMap[type]} ${buttonSizeMap[size]}`}
        style={{ width, color, backgroundColor }}
        onClick={() => clickHandle()}
        role="button"
      >
        {(loading || disabled) && (
          <div className="absolute left-0 top-0 w-full h-full bg-white opacity-50"></div>
        )}
        {!!icon && iconPosition === 'left' && (
          <span className="mr-2.5">{icon}</span>
        )}
        <span className="inline-block font-semibold">{text}</span>
        {!!icon && iconPosition === 'right' && (
          <span className="ml-2.5">{icon}</span>
        )}
        <div className="absolute left-0 top-0 w-full h-full bg-black opacity-0 hover:opacity-10 transition-opacity"></div>
      </button>
    </>
  )
}

const buttonTypeMap = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-black',
  neutral: 'bg-neutral text-black',
  warning: 'bg-warning text-white',
  outline: 'bg-white border border-primary text-primary'
}

const buttonSizeMap = {
  xs: 'px-1 py-2 text-sm',
  sm: 'px-5 py-2.5 text-sm',
  base: 'px-5 py-3 text-sm',
  lg: 'px-8 py-2.5 text-base'
}

const buttonRadiusMap = {
  xs: 'rounded-xs',
  small: 'rounded-small',
  base: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl'
}
