import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewUpdates from '../../components/NewUpdates/NewUpdate';
import Admin from './Admin';
import './AdminPanel.css'; // Add your CSS file here

function AdminPanel() {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (status) => {
        setIsAdminLoggedIn(status);
        if (status) {
            navigate('/adminPanel');
        } else {
            navigate('/');
        }
    };

    const handleLogout = () => {
        setIsAdminLoggedIn(false);
        navigate('/');
    };

    return (
        <div className="adminPanel">
            {isAdminLoggedIn ? (
                <NewUpdates isAdminLoggedIn={isAdminLoggedIn} onLogout={handleLogout} />
            ) : (
                <Admin onLogin={handleLogin} />
            )}
        </div>
    );
}

export default AdminPanel;
