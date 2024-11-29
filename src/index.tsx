import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './router/Router';
import theme from './theme/theme';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <HelmetProvider>
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </ChakraProvider>
    </HelmetProvider>
);