import React from 'react';
import "./style.css"


export default function Toggle({ toggled, onClick }) {
        return (
                   <div className={`toggle  ${toggled ? "night" : ""}`} onClick={onClick}>
                        <div className="notch" >
                            <div className="creter"></div>
                            <div className="creter"></div>
                        </div>
                            <div>
                                <div className="shape sm"></div>
                                <div className="shape sm"></div>
                                <div className="shape md"></div>
                                <div className="shape lg"></div>
                            </div>
                        </div>
 )}
