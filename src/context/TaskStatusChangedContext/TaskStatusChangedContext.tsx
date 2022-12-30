import {
  createContext,
  FC,
  ReactElement,
  PropsWithChildren,
  useState,
} from 'react';

export const TaskStatusChangedContext = createContext({
  updated: false,
  toggle: () => {},
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
