import './modal.css';
import React from 'react';

export default function Modal({
    backgroundAction,
    modalStyle,
    content,
    contentStyle,
    buttonStyle,
    buttonAction,
}) {
    return (
        <>
            <div className="custom__modal" onClick={backgroundAction}>
                <div className={modalStyle}>
                    <div className={contentStyle}>{content}</div>
                    <button className={buttonStyle} onClick={buttonAction}>
                        Close
                    </button>
                </div>
            </div>
        </>
    );
}
