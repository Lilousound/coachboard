import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Session } from '@/features/sessions/types'

type SessionsState = {
  sessions: Session[]
  addSession: (session: Session) => void
  updateSession: (id: string, updates: Partial<Session>) => void
  getSessionById: (id: string) => Session | undefined
}

export const useSessionsStore = create<SessionsState>()(
  persist(
    (set, get) => ({
      sessions: [],

      addSession: (session) =>
        set((state) => ({ sessions: [...state.sessions, session] })),

      updateSession: (id, updates) =>
        set((state) => ({
          sessions: state.sessions.map((c) =>
            c.id === id ? { ...c, ...updates } : c,
          ),
        })),

      getSessionById: (id) => get().sessions.find((c) => c.id === id),
    }),

    { name: 'coachboard-sessions' },
  ),
)
