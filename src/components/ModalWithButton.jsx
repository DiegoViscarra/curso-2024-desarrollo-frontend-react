import { useState } from 'react';
import { motion } from 'framer-motion';

const ModalWithButton = ({ visible, message, buttonText, onButtonClick, onClose }) => {
    const [buttonPressed, setButtonPressed] = useState(false);

    const handleButtonClick = () => {
        setButtonPressed(true);
        onButtonClick(true);
    };

    if (!visible) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <motion.div
                className="notification-success"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className='modal-with-button'>
                    <p>{message}</p>
                    <button onClick={handleButtonClick}>
                        {buttonText}
                    </button>
                </div>
                <button
                    className="close-btn-success"
                    onClick={onClose}>
                    X
                </button>
            </motion.div>
        </div>
    );
};

export default ModalWithButton;