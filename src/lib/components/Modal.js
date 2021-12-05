import './modal.css';
import React from 'react';

export default function Modal({
    zindex='z-10',
    backgroundAction,
    modalStyle,
    content,
    contentStyle,
    buttonStyle,
    buttonAction,
    buttonContent='Close',
}) {
    return (
        <>
            <div className={`${zindex} custom__modal`} onClick={backgroundAction}>
                <div className={modalStyle}>
                    <div className={contentStyle}>{content}</div>
                    <button className={buttonStyle} onClick={buttonAction}>
                        {buttonContent}
                    </button>
                </div>
            </div>
        </>
    );
}