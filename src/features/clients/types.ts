export type Level = 'debutant' | 'intermediaire' | 'avance'

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
