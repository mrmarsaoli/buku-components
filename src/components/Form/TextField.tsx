import React from 'react'
import { MouseEventHandler } from 'react'
import { ChangeEvent, useState } from 'react'

interface TextFieldProps {
  /**
   * Label for input
   */
  label?: string
  /**
   * Append component beside the label
   */
  labelAppend?: JSX.Element
  /**
   * Type of input
   */
  type?: 'text' | 'email' | 'password'
  /**
   * Input name
   */
  name?: string
  /**
   * Error message
   */
  error?: string
  /**
   * SVG icon
   */
  icon?: JSX.Element
  /**
   * Postition of icon
   */
  iconPosition?: 'left' | 'right'
  /**
   * Input placeholder
   */
  placeholder?: string
  /**
   * Wrapper classname
   */
  className?: string
  /**
   * Specify input size
   */
  size?: keyof typeof sizeMap
  /**
   * Value of input
   */
  value?: string | number
  /**
   * Append component beside input
   */
  children?: JSX.Element | JSX.Element[]
  /**
   * Disable input
   */
  disabled?: boolean
  /**
   * Define input width
   */
  width?: number
  /**
   * Define input id
   */
  id?: string
  /**
   * Optional input event
   */
  onInput?: (value: string) => void
  /**
   * Optioanl click input event
   */
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const TextField = ({
  label,
  labelAppend,
  type = 'text',
  name,
  error,
  icon,
  iconPosition = 'left',
  placeholder,
  className,
  size = 'base',
  value,
  children,
  disabled,
  width,
  id,
  onInput,
  onClick
}: TextFieldProps) => {
  const [isFocus, setFocus] = useState(false)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!onInput || disabled) {
      return
    }

    onInput(e.target.value)
  }

  const isError = error ? error.length : false

  return (
    <>
      <div className={className}>
        {!!label && (
          <div className="mb-2 flex items-center font-medium">
            <label
              className={`text-sm font-medium text-gray-900 block ${
                isError ? 'text-warning' : 'text-gray-900'
              }`}
              htmlFor={id}
            >
              {label}
            </label>
            {!!labelAppend && <div className="ml-4">{labelAppend}</div>}
          </div>
        )}
        <div
          className={`flex border text-gray-900 text-sm rounded-lg w-full relative ${
            !!disabled ? 'bg-gray-100' : isError ? 'bg-red-50' : 'bg-white'
          }  ${sizeMap[size]} ${
            isError
              ? 'border-warning'
              : isFocus
              ? 'border-primary'
              : 'border-gray-300'
          }`}
          onClick={onClick}
          style={{
            width: width || 'auto'
          }}
        >
          {iconPosition === 'left' ? (
            <span className={!!icon ? 'mr-2.5' : ''}>{icon}</span>
          ) : (
            children
          )}
          <input
            className="flex-grow flex-shrink min-w-0 outline-none bg-opacity-0 bg-transparent text-gray-900"
            style={{ fontSize: 'inherit' }}
            type={type}
            name={name || ''}
            disabled={!!disabled}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            value={value || ''}
            onInput={handleInput}
            placeholder={placeholder || ''}
            id={id}
          />
          {iconPosition === 'right' ? icon : children}
        </div>
        {error && (
          <div
            className={
              error.length ? 'block mt-2 text-warning text-sm' : 'hidden'
            }
          >
            {error}
          </div>
        )}
      </div>
    </>
  )
}

const sizeMap = {
  sm: 'sm:text-xs p-2',
  base: 'text-sm p-2.5',
  lg: 'sm:text-md p-4'
}
