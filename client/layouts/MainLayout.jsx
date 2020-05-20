import React from 'react';
import AccountsUI from '../AccountsUI.jsx';

export const MainLayout = ({content}) => (
    <div className="main-layout">
        <header>
            <h2>Online Journals</h2>
            <nav>                
                <a href="/">Journal</a>
                <a href="/add">Add Journal</a>
                <a href="/about">About</a>
                <AccountsUI />
            </nav>
        </header>
        <main>
            {content}
        </main>        
    </div>
)