import React from 'react';
import log from 'loglevel';
import PubSub from 'pubsub-js';

import { useApp } from './UI/context/app-context';
import { Main } from './main';

function App() {
  const { login, token } = useApp();

  React.useEffect(() => {
    function listener(msg, data) {
      log.debug('@@ received event msg: ', msg);

      if ('user' in data) {
        console.log('@@ data.user: ', data.user);
        login(data.user.token);
      }
    }

    const tkn = PubSub.subscribe('auth:login:success', listener);
    return () => PubSub.unsubscribe(tkn);
  }, []);

  return <Main isAuthenticated={!!token} />;
}

export default App;
