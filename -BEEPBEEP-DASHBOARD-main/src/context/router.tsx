import {useState, createContext, ReactNode} from 'react';

interface RouterValuesProps{
  pageActive: string,
  setPageActive: (value: string) => void;
}

export const RouterContext = createContext({} as RouterValuesProps);

interface RouterProps{
  children: ReactNode
}

export function RouterProvider({children}: RouterProps){
  const [pageActive, setPageActive] = useState('/Dashboard')

  return(
    <RouterContext.Provider
    value={{
      pageActive,
      setPageActive
    }}
    >
      {children}
    </RouterContext.Provider>
  );
}