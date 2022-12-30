import {
  createContext,
  FC,
  ReactElement,
  PropsWithChildren,
  useState,
} from 'react';

type ContextType = {
  updated: boolean;
  toggle: () => void;
};

export const TaskStatusChangedContext = createContext<ContextType>({
  updated: false,
  toggle: () => console.log('Toggle is not defined'),
});

export const TaskStatusChangedContextProvider: FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  const [updated, setUpdated] = useState(false);

  const toggleHandler = () => setUpdated(!updated);

  return (
    <TaskStatusChangedContext.Provider value={{
      updated,
      toggle: toggleHandler,
    }}>
      {children}
    </TaskStatusChangedContext.Provider>
  );
};
