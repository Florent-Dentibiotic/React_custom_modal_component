import './modal.css';
import React from 'react';

export default function Modal({
    zindex,
    backgroundAction,
    modalStyle,
    content,
    contentStyle,
    buttonStyle,
    buttonAction,
}) {
    return (
        <>
            <div className={`${zindex} custom__modal`} onClick={backgroundAction}>
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
