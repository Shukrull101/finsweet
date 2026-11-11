import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

type Ctx = { open: boolean; show: () => void; hide: () => void }
const PopupCtx = createContext<Ctx | null>(null)

export function PopupProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const show = useCallback(() => setOpen(true), [])
  const hide = useCallback(() => setOpen(false), [])
  const value = useMemo(() => ({ open, show, hide }), [open, show, hide])
  return <PopupCtx.Provider value={value}>{children}</PopupCtx.Provider>
}

export const usePopup = () => {
  const c = useContext(PopupCtx)
  if (!c) throw new Error('usePopup must be used inside PopupProvider')
  return c
}
