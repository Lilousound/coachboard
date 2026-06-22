import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Session } from '@/features/sessions/types'

type SessionsState = {
  sessions: Session[]
  addSession: (session: Session) => void
}

export const useSessionsStore = create<SessionsState>()(
  persist(
    (set) => ({
      sessions: [],
      addSession: (session) =>
        set((state) => ({ sessions: [...state.sessions, session] })),
    }),
    { name: 'coachboard-sessions' },
  ),
)
