export type Level = 'beginner' | 'intermediate' | 'advanced'

export type Member = {
  id: string
  lastname: string
  firstname: string
  email: string
  phone: string
  level: Level
  registrationDate: string
  notes: string
  active: boolean
}
