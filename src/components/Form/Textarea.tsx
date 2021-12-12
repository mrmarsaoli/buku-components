import React from 'react'
import { MouseEventHandler } from 'react'
import { ChangeEvent, useState } from 'react'

interface TextareaProps {
  /**
   * Label for textarea
   */
  label?: string
  /**
   * Append component beside the label
   */
  labelAppend?: JSX.Element
  /**
   * Error message
   */
  error?: string
  /**
   * Input placeholder
   */
  placeholder?: string
  /**
   * Wrapper classname
   */
  className?: string
  /**
   * Specify textarea size
   */
  size?: keyof typeof sizeMap
  /**
   * Value of textarea
   */
  value?: string | number
  /**
   * Disable textarea
   */
  disabled?: boolean
  /**
   * Define textarea width
   */
  width?: number
  /**
   * Define textarea id
   */
  id?: string
  /**
   * Optional textarea event
   */
  onInput?: (value: string) => void
  /**
   * Optioanl click textarea event
   */
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const Textarea = ({
  label,
  labelAppend,
  error,
  placeholder,
  className,
  size = 'base',
  value,
  disabled,
  width,
  id,
  onInput,
  onClick
}: TextareaProps) => {
  const [isFocus, setFocus] = useState(false)

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
          <textarea
            className="flex-grow flex-shrink min-w-0 outline-none bg-opacity-0 bg-transparent text-gray-900"
            style={{ fontSize: 'inherit' }}
            disabled={!!disabled}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            value={value || ''}
            onInput={handleInput}
            placeholder={placeholder || ''}
            id={id}
          />
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
