import { createContext, type ReactNode, useContext, useState } from 'react';
import { type TStoreState } from '../types/store';
import { populateStore } from './createStore';


const StoreContext = createContext<ReturnType<typeof populateStore> | null>(null);

export const StoreProvider = ({
  initialState,
  children,
}: {
  initialState: Pick<TStoreState, 'products'>;
  children: ReactNode;
}) => {
  const [store] = useState(() => populateStore(initialState));
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

import { useStore as useZustandStore } from 'zustand';

export const useStore = <S,>(selector: (state: TStoreState) => S): S => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('[ERROR] useStore must be used within a StoreProvider');
  }
  return useZustandStore(store, selector);
};