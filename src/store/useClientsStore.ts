import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Member } from '@/features/clients/types'

type ClientsState = {
  clients: Member[]
  addClient: (client: Member) => void
  updateClient: (id: string, updates: Partial<Member>) => void
  archiveClient: (id: string) => void
}

export const useClientsStore = create<ClientsState>()(
  persist(
    (set) => ({
      clients: [],

      addClient: (client) =>
        set((state) => ({
          clients: [...state.clients, client],
        })),

      updateClient: (id, updates) =>
        set((state) => ({
          clients: state.clients.map((c) =>
            c.id === id ? { ...c, ...updates } : c,
          ),
        })),

      archiveClient: (id) =>
        set((state) => ({
          clients: state.clients.map((c) =>
            c.id === id ? { ...c, active: false } : c,
          ),
        })),
    }),
    { name: 'coachboard-clients' },
  ),
)
