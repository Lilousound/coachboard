type CardProps = {
  children: React.ReactNode
  className?: string
}

function Card({ children, className }: CardProps) {
  const baseStyles =
    'flex flex-col col-auto items-center justify-center bg-white text-main-900 rounded-3xl p-8 m-8 gap-4 mt-6 border border-main-400/30 border-t-4 border-t-main-500 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-main-700/30 hover:scale-[1.01]'

  return <div className={`${baseStyles} ${className || ''}`}>{children}</div>
}

export default Card
