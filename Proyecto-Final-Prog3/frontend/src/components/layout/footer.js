import React from "react";
import "../../styles/footer.css";

const footer = () => {
    return (
        <footer className="footer">
            <div className="contenido">
            <span>© {new Date().getFullYear()} KraftSport. Todos los derechos reservados.</span>
            <span className="foot-links">
                </span>
            </div>
        </footer>
    );
};

export default footer;