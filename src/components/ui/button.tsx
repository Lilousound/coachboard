type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary'
}

function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
}: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded-4xl font-medium transition-colors'
  const variantStyles =
    variant === 'primary'
      ? 'bg-main-600 text-white hover:bg-main-700'
      : 'bg-main-200 text-gray-800 hover:bg-main-300'

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles}`}
    >
      {children}
    </button>
  )
}

export default Button
