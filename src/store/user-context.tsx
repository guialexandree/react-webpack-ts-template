import { createContext } from 'react'

export const UserContext = createContext<any>({
  user: {
    accessToken: 'bearer ...',
  },
  setUser: () => {},
});
