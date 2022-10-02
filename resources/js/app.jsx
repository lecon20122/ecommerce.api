import './bootstrap';
import '../css/app.css';

import React from 'react';
import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/inertia-react';
import {InertiaProgress} from '@inertiajs/progress';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => resolvePageComponent(`./Pages/${name}.tsx`, await import.meta.glob('./Pages/**/*.tsx')),
    setup({el, App, props}) {
        const container = document.getElementById('app');
        const root = createRoot(container);
        return root.render(<App {...props} />);
    },
});

InertiaProgress.init({delay: 800 , color : '#CD867D'})
