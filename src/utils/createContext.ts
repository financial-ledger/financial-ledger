import {
  createContext as createReactContext,
  useContext as useReactContext,
} from "react";

class ContextError extends Error {
  constructor(contextName: string, consumerName: string) {
    super(`${contextName}안에 ${consumerName}를 사용해야합니다.`);
  }
}

export function createContext<T>(contextName: string) {
  const context = createReactContext<T | null>(null);
  const useContext = (consumerName: string) => {
    const value = useReactContext(context);
    if (value === null) {
      throw new ContextError(contextName, consumerName);
    }
    return value;
  };

  return [context.Provider, useContext] as const;
}
