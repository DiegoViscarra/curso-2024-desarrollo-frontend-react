import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const form = useSelector(state => state.form);
    const { username, email } = form.formData;

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/login">LoginForm</Link>
                </li>
                {username && email && (
                    <li className="list-username">
                        Bienvenido {username}: {email}
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;