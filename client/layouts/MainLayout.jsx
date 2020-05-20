import React from 'react';
import AccountsUI from '../AccountsUI.jsx';
import './css/bootstrap.css';

export const MainLayout = ({content}) => (
    <div className="main-layout">
        <header>
            <h2>My Journals</h2>
            <nav>
                <a href="/">Journals</a>
                <a href="/about">About</a>
                <AccountsUI />
            </nav>
        </header>
        <main>
            {content}
        </main>        
    </div>
)