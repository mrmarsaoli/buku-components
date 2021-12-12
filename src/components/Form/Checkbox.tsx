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
  label?: string | JSX.Element
  /**
   * Disable checkbox
   */
  disabled?: string
  /**
   * Id for input
   */
  id?: string
  /**
   * Optional checkbox select event
   */
  onSelect?: (value: boolean) => void
}

export const Checkbox = ({
  width,
  height,
  type = 'normal',
  value = false,
  label,
  disabled,
  id,
  onSelect
}: CheckboxProps) => {
  const handleClick = (value: boolean) => {
    if (!onSelect || !!disabled) {
      return
    }

    onSelect(value)
  }
  return (
    <div className="inline-flex">
      <input
        aria-describedby={id}
        type="checkbox"
        className={`bg-white border-gray-300 h-4 w-4 rounded ${typeMap[type]} ${
          !!label ? 'mt-0.5' : ''
        }`}
        checked={!!value}
        style={{
          width,
          height
        }}
        onClick={() => handleClick(!value)}
      />
      {!!label &&
        (typeof label === 'string' ? (
          <label
            htmlFor={id}
            className={`text-sm ml-3 font-medium ${typeMap[type]}`}
          >
            {label}
          </label>
        ) : (
          label
        ))}
    </div>
  )
}

const typeMap = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  normal: 'text-gray-900',
  warning: 'text-warning'
}
