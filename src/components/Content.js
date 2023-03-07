import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function Content({ currentPage }) {


    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
                break;
            case 'Contact':
                return <Contact />;
                break;
            case 'Portfolio':
                return <Portfolio />;
                break;
            case 'Resume':
                return <Resume />;
                break;
        }
    };



    return (
        <div className="content">
            {renderPage()}
        </div>
    )
};