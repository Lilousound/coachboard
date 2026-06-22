'use client'

import { useState } from 'react'
import { Member, Level } from '../types'
import Input from '@/components/ui/input'
import Button from '@/components/ui/button'
import Card from '@/components/ui/card'

type ClientFormProps = {
  initialData?: Member // Données initiales pour l'édition d'un membre
  onSubmit: (member: Member) => void // Fonction de rappel pour soumettre le formulaire
}

function ClientForm({ initialData, onSubmit }: ClientFormProps) {
  // Composant de formulaire pour ajouter ou éditer un membre
  const [firstname, setFirstname] = useState(initialData?.firstname ?? '')
  const [lastname, setLastname] = useState(initialData?.lastname ?? '')
  const [email, setEmail] = useState(initialData?.email ?? '')
  const [phone, setPhone] = useState(initialData?.phone ?? '')
  const [level, setLevel] = useState<Level>(initialData?.level ?? 'beginner')
  const [notes, setNotes] = useState(initialData?.notes ?? '')

  function handleSubmit(e: React.FormEvent) {
    // Gestionnaire de soumission du formulaire
    e.preventDefault() // Empêche le rechargement de la page lors de la soumission du formulaire

    const member: Member = {
      id: initialData?.id ?? crypto.randomUUID(), //génère un nouvel ID si ce n'est pas une édition
      firstname,
      lastname,
      email,
      phone,
      level,
      notes,
      registrationDate:
        initialData?.registrationDate ?? new Date().toISOString(), // Utilise la date actuelle si ce n'est pas une édition
      active: initialData?.active ?? true, // Définit le membre comme actif par défaut si ce n'est pas une édition
    }

    onSubmit(member) // Appelle la fonction de rappel avec les données du membre
  }

  return (
    <main className="flex flex-col items-center mt-6 gap-4">
      <Card className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-75">
          <Input
            label="Prénom"
            value={firstname}
            onChange={setFirstname}
            required
          />
          <Input label="Nom" value={lastname} onChange={setLastname} required />
          <Input
            label="Email"
            value={email}
            onChange={setEmail}
            type="email"
            required
          />
          <Input label="Téléphone" value={phone} onChange={setPhone} />

          <label className="flex flex-col gap-1 text-sm">
            <span className="font-medium">Niveau</span>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value as Level)} // pour choisir un niveau dans la liste déroulante depuis les options disponibles Level
              className="border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="beginner">Débutant</option>
              <option value="intermediate">Intermédiaire</option>
              <option value="advanced">Avancé</option>
            </select>
          </label>

          <label className="flex flex-col gap-1 text-sm">
            <span className="font-medium">Notes</span>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
              rows={3}
            />
          </label>

          <Button type="submit">Enregistrer</Button>
        </form>
      </Card>
    </main>
  )
}

export default ClientForm
