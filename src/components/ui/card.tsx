type CardProps = {
  children: React.ReactNode
}

function Card({ children }: CardProps) {
  const baseStyles =
    'flex flex-col col-auto items-center justify-center bg-main-100 text-gray-700 rounded-3xl p-8 m-8 gap-4 mt-6 border-2 border-white/10 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-main-700/30 hover:scale-[1.01]'

  return <div className={`${baseStyles}  `}>{children}</div>
}

export default Card
