import type { RenderHookResult } from '@testing-library/react';
import { renderHook } from '@testing-library/react';
import type { PropsWithChildren } from 'react';

import { ThemeProvider } from './theme-provider';

// Render Wrapper for Hooks and non-UI components
// eslint-disable-next-line react-refresh/only-export-components
const ProvidersWrapper = ({ children }: PropsWithChildren) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
};

export const renderHookWrapper = (hook: () => unknown): RenderHookResult<any, unknown> => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ProvidersWrapper>{children}</ProvidersWrapper>
    );
    return renderHook(hook, { wrapper });
};
