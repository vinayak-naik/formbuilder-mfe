import React from 'react';
import log from 'loglevel';
import { AUTH_LOCAL_STORAGE_KEY } from '../../constants';

const AppContext = React.createContext();
AppContext.displayName = 'AppContext';

function AppProvider(props) {
  log.debug('@@ init AppProvider: ');

  const [token, setToken] = React.useState('');
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    try {
      const storedToken = window.localStorage.getItem(AUTH_LOCAL_STORAGE_KEY);
      if (storedToken) {
        setToken(storedToken);
      }
    } catch (err) {
      setError(err);
    }
  }, []);

  const login = React.useCallback((tkn) => setToken(tkn), [setToken]);
  const logout = React.useCallback(() => {
    setToken('');
    window.localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);
  }, [setToken]);
  const value = React.useMemo(
    () => ({ token, error, login, logout }),
    [token, error, login, logout],
  );

  if (error) {
    return <p>error!</p>;
  }

  return <AppContext.Provider value={value} {...props} />;
}

function useApp() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error(`useApp must be used within a AppProvider`);
  }
  return context;
}

export { AppProvider, useApp };
