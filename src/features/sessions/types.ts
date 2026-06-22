export type SessionType =
  | 'Individuelle'
  | 'Collective'
  | 'En salle'
  | 'En extérieur'
  | 'En ligne'
  | 'Rééducation'
  | 'Renfo'
  | 'Perfectionnement'
  | 'Perte de poids'
  | 'Prise de masse'
  | 'Mobilité'

export type Session = {
  id: string
  date: string
  time: string
  duration: number
  type: SessionType
  location: string
  description: string
  memberId: string
}
