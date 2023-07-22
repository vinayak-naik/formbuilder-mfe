import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import log from 'loglevel';
import { ErrorBoundary } from 'react-error-boundary';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';

import App from './app';
import theme from './theme';
import { AppProviders } from './UI/context';
// import { ErrorFallbackComponent } from './components';

// enable all log levels
log.enableAll();

// https://mui.com/guides/interoperability/#class-name-generator
ClassNameGenerator.configure((componentName) => `app-shell--${componentName}`);

const FormbuilderMfe = () => {
  log.debug('@@ init AuthMfe: ');

  React.useEffect(() => {
    log.info('@@ AuthMfe app started');
  }, []);

  return (
    <ErrorBoundary
      FallbackComponent={<div>error</div>}
      // FallbackComponent={ErrorFallbackComponent}
      onError={(error, errorInfo) => log.error({ error, errorInfo })}
      // reset the state of your app so the error doesn't happen again
      onReset={() => log.info('@@ app reset')}
    >
      <AppProviders>
        <ThemeProvider theme={theme}>
          <StyledEngineProvider injectFirst>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <App />
          </StyledEngineProvider>
        </ThemeProvider>
      </AppProviders>
    </ErrorBoundary>
  );
};

export default FormbuilderMfe;
