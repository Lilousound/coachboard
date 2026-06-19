type InputProps = {
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
  required?: boolean
}

function Input({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
}: InputProps) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="font-medium">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </label>
  )
}

export default Input
