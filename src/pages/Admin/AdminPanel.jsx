import { useNavigate } from 'react-router-dom';
import NewUpdates from '../../components/NewUpdates/NewUpdate';
import Admin from './Admin';
import './AdminPanel.css';

function AdminPanel({ isAdminLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="adminPanel">
            {isAdminLoggedIn ? (
                <NewUpdates isAdminLoggedIn={isAdminLoggedIn} onLogout={handleLogout} />
            ) : (
                <Admin onLogin={(status) => {
                    if (status) {
                        navigate('/adminPanel');
                    }
                }} />
            )}
        </div>
    );
}

export default AdminPanel;
