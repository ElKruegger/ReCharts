import React, { useState } from 'react';
import './NavBar.scss';

export default function NavBarElement({ onReportClick }) {

    const handleReportClick = (report) => {
        onReportClick(report); // Chama a função passada da Home.jsx
    };

    return (
        <div>
            <nav className="vertical-navbar">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <ul>
                    <div>
                        <div className='divicons'>
                            <div className='Div-Center-'>
                                <li onClick={() => handleReportClick('A')}>
                                    <a href="#">
                                        <span className="material-symbols-outlined">patient_list</span>
                                        <label>Relatorio A </label>
                                    </a>
                                </li>
                                <li onClick={() => handleReportClick('B')}>
                                    <a href="#">
                                        <span className="material-symbols-outlined">patient_list</span>
                                        <label>Relatorio B </label>
                                    </a>
                                </li>

                                <li onClick={() => handleReportClick('C')}>
                                    <a href="#">
                                        <span className="material-symbols-outlined">patient_list</span>
                                        <label>Relatorio C </label>
                                    </a>
                                </li>
                                <li onClick={() => handleReportClick('D')}>
                                    <a href="#">
                                        <span className="material-symbols-outlined">patient_list</span>
                                        <label>Relatorio D </label>
                                    </a>
                                </li>
                                <li onClick={() => handleReportClick('E')}>
                                    <a href="#">
                                        <span className="material-symbols-outlined">patient_list</span>
                                        <label>Relatorio E </label>
                                    </a>
                                </li>
                            </div>
                        </div>
                    </div>
                </ul>
            </nav>
        </div>
    );
}