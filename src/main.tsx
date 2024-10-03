import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorPage } from './components/error-page.tsx';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: process.env.NODE_ENV === 'test' ? false : 3,
        },
    },
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ErrorBoundary FallbackComponent={ErrorPage}>
            <QueryClientProvider client={queryClient}>
                <App />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ErrorBoundary>
    </StrictMode>
);
