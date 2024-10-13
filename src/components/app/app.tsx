
import React from "react";
import Header from "../header/header";
import styles from './app.module.css';


export const App: React.FC = () => {
    return (
        <div className={styles.app}> 
            <Header />
            <h1>Welcome to My App</h1>
        </div>
    );
};
