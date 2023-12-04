// resources/js/Layouts/App.js

import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const App = ({ children }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link href={route('files.index')}>File Manager</Link></li>
                </ul>
            </nav>
            {children}
        </div>
    );
};

export default App;
