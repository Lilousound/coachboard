export type Niveau = 'debutant' | 'intermediaire' | 'avance'

export type Member = {
  id: string
  lastname: string
  firstname: string
  email: string
  phone: string
  level: Niveau
  registrationDate: string
  notes: string
  active: boolean
}
