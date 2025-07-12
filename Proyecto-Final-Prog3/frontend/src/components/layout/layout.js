import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';

/*para mantener el diseño global consitente */

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main style={{ minHeight: "calc(100vh - 120px)" }}>
            {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;