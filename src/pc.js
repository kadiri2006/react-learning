import { createContext, useContext } from "react";

export const ParentContext = createContext(null);
export const useParentContextFun = () => useContext(ParentContext);
