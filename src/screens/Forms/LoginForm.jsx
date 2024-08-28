import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import { clearFormData, saveFormData } from "../../redux/form/formActions";
import { motion } from 'framer-motion';
import ModalInfo from "../../components/ModalInfo";
import ModalWithButton from "../../components/ModalWithButton";
import { useState } from "react";

const LoginForm = () => {
    const [values, handleChange, clearForm] = useForm({ username: '', email: '', password: '' });
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [logoutModalMessage, setLogoutModalMessage] = useState('');
    const [logoutModalButtonMessage, setLogoutModalButtonMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        if (values.password !== form.correctPassword) {
            setModalMessage('Password incorrect');
            setShowModalInfo(true);
        } else {
            dispatch(saveFormData(values));
        }
    }

    const hideModalInfo = () => {
        setShowModalInfo(false);
    };

    const hideLogoutModalInfo = () => {
        setShowLogoutModal(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    const handleLogoutClick = () => {
        setLogoutModalMessage('¿Estas seguro de que quieres cerrar sesión?');
        setLogoutModalButtonMessage('Presiona para salir');
        setShowLogoutModal(true);
    };

    const handleLogoutConfirm = (confirmed) => {
        if (confirmed) {
            dispatch(clearFormData());
            clearForm();
        }
        setShowLogoutModal(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <ModalInfo
                visible={showModalInfo}
                message={modalMessage}
                onClose={hideModalInfo}
            />
            <ModalWithButton
                visible={showLogoutModal}
                message={logoutModalMessage}
                buttonText={logoutModalButtonMessage}
                onButtonClick={handleLogoutConfirm}
                onClose={hideLogoutModalInfo}
            />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    {form.formData.username && (
                        <h5>Username: {form.formData.username}</h5>
                    )}
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <button type="button" onClick={togglePasswordVisibility} className="button-toggle-password-visibility">
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <div className="button-container">
                        <button type="submit">Submit</button>
                        <a onClick={handleLogoutClick} className="a-logout">Logout</a>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default LoginForm;