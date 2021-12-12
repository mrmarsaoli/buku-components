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
  onClick
}: ButtonProps) => {
  const clickHandle = () => {
    if (loading) {
      return
    }

    if (onClick) onClick
  }

  return (
    <>
      <button
        type="button"
        className={`_bw-inline-block _bw-relative _bw-text-center _bw-overflow-hidden ${buttonRadiusMap[rounded]} ${buttonTypeMap[type]} ${buttonSizeMap[size]}`}
        style={{ width, color, backgroundColor }}
        onClick={() => clickHandle()}
        role="button"
      >
        {(loading || disabled) && (
          <div className="_bw-absolute _bw-left-0 _bw-top-0 _bw-w-full _bw-h-full _bw-bg-white _bw-opacity-50"></div>
        )}
        <span className="_bw-inline-block _bw-font-semibold">{text}</span>
        <div className="_bw-absolute _bw-left-0 _bw-top-0 _bw-w-full _bw-h-full _bw-bg-black _bw-opacity-0 hover:_bw-opacity-10 _bw-transition-opacity"></div>
      </button>
    </>
  )
}

const buttonTypeMap = {
  primary: '_bw-bg-primary _bw-text-white',
  secondary: '_bw-bg-secondary _bw-text-black',
  gray: '_bw-bg-gray _bw-text-black',
  warning: '_bw-bg-warning _bw-text-white',
  outline: '_bw-bg-white _bw-border _bw-border-primary _bw-text-primary'
}

const buttonSizeMap = {
  xs: '_bw-px-1 _bw-py-2 _bw-text-sm',
  sm: '_bw-px-5 _bw-py-2.5 _bw-text-sm',
  base: '_bw-px-5 _bw-py-3 _bw-text-sm',
  lg: '_bw-px-8 _bw-py-2.5 _bw-text-base'
}

const buttonRadiusMap = {
  xs: '_bw-rounded-xs',
  small: '_bw-rounded-small',
  base: '_bw-rounded',
  md: '_bw-rounded-md',
  lg: '_bw-rounded-lg',
  xl: '_bw-rounded-xl'
}
