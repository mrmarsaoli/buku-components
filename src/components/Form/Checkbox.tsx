import React from 'react'

interface CheckboxProps {
  /**
   * Specify checkbox width
   */
  width?: number
  /**
   * Specify checkbox height
   */
  height?: number
  /**
   * Specify checkbox type
   */
  type?: keyof typeof typeMap
  /**
   * Checkbox value
   */
  value?: boolean
  /**
   * Optional checkbox label
   */
  label?: string
  /**
   * Disable checkbox
   */
  disabled?: string
  /**
   * Optional checkbox select event
   */
  input?: (value: boolean) => void
}

export const Checkbox = ({
  width = 20,
  height = 20,
  type = 'neutral',
  value = false,
  label,
  disabled,
  input
}: CheckboxProps) => {
  const select = (value: boolean) => {
    if (!input || !!disabled) {
      return
    }

    input(value)
  }
  return (
    <div className="inline-flex">
      <div
        className={`flex items-center justify-center border-black-80 rounded-md border ${
          value ? 'border-' + typeMap[type] : ''
        }`}
        role="button"
        style={{ width, height }}
        onClick={() => select(!value)}
      >
        {value && (
          <div className={`w-8/12 rounded-md h-4/6 bg-${typeMap[type]}`}></div>
        )}
      </div>
      {!!label && (
        <span className={`ml-3 text-sm text-${typeMap[type]}`}>{label}</span>
      )}
    </div>
  )
}

const typeMap = {
  primary: 'primary',
  secondary: 'secondary',
  neutral: 'neutral',
  warning: 'warning'
}
