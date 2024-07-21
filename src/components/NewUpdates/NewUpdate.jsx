import { useState } from 'react';
import NewsTicker from '../NewsTicker/NewsTicker';
import '../NewsTicker/NewsTicker.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewUpdates({ isAdminLoggedIn, onLogout }) {

    const [newsItems, setNewsItems] = useState([
        "Al Ibrahim Mahavidhyalaya Latest news update : --->  "
    ]);
    const [isAddingNews, setIsAddingNews] = useState(false);
    const [newNews, setNewNews] = useState('');

    const handleAddNewsClick = () => {
        setIsAddingNews(true);
    };

    const handleSaveNews = () => {
        if (newNews.length > 0 && newNews.length <= 500) {
            setNewsItems([...newsItems, newNews]);
            setNewNews('');
            setIsAddingNews(false);
        } else {
            alert('Please enter text up to 500 words.');
        }
    };

    return (
        <div>
            {isAdminLoggedIn && (
                <div className="logout-section">
                    <Button variant="danger" onClick={onLogout} className="logout-button">
                        Logout
                    </Button>
                </div>
            )}

            <footer className="news-ticker-section mt-5">
                <h2 className="news-heading">Latest News on Admissions and Dates</h2>
                <hr></hr>
                <hr></hr>
                <NewsTicker items={newsItems} speed={12} />
                {isAdminLoggedIn && (
                    <>
                        <Button variant="primary" onClick={handleAddNewsClick} className="mt-3">
                            Add News
                        </Button>
                        {isAddingNews && (
                            <div className="news-form mt-3 mr-20">
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>News Text</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            value={newNews}
                                            onChange={(e) => setNewNews(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Button variant="primary" onClick={handleSaveNews}>
                                        Save
                                    </Button>
                                </Form>
                            </div>
                        )}
                    </>
                )}
            </footer>
            <hr></hr>
            <hr></hr>
        </div>
    );
}

export default NewUpdates;
