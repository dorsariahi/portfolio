import React, { useState } from "react";
import Header from "./Header.js";
import Content from "./Content.js";
import Footer from "./Footer.js";

const App = () => {
    const [currentPage, setCurrentPage] = useState("About");
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <Content currentPage={currentPage} />
            <Footer />
        </>
    );
};

export default App;