import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-500',
    textColor = 'text-white',
    padding = 'px-4 py-2',
    borderRadius = 'rounded-lg',
    hoverEffect = 'hover:bg-blue-600',
    className = '',
    ...props
}) {
  return (
    <button className={`${bgColor} ${textColor} ${padding} ${borderRadius} ${hoverEffect} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button