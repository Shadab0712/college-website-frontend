import { useState, useEffect } from 'react';
import './NewUpdate.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'; // Import Spinner for loading animation
import Card from 'react-bootstrap/Card'; // Import Card for displaying news
import { fetchNews, updateNews } from '../Services/newsService.js';

function NewUpdates({ isAdminLoggedIn, onLogout }) {
    const [newsItems, setNewsItems] = useState([]);
    const [isAddingNews, setIsAddingNews] = useState(false);
    const [newNews, setNewNews] = useState('');
    const [loading, setLoading] = useState(false); // Loading state
    const [successMessage, setSuccessMessage] = useState(''); // Success message state

    useEffect(() => {
        // Fetch news items from the backend when the component mounts
        const loadNews = async () => {
            try {
                const fetchedNews = await fetchNews();
                setNewsItems(fetchedNews);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };
        loadNews();
    }, []);

    const handleAddNewsClick = () => {
        setIsAddingNews(true);
    };

    const handleSaveNews = async () => {
        if (newNews.length > 0 && newNews.length <= 2500) {
            setLoading(true); // Show loading animation
            setSuccessMessage(''); // Clear any previous success message
            try {
                await updateNews(newNews);
                // Fetch updated news items after adding
                const fetchedNews = await fetchNews();
                setNewsItems(fetchedNews);
                setNewNews('');
                setIsAddingNews(false);
                setSuccessMessage('Details saved successfully!'); // Set success message
            } catch (error) {
                // Display error message
                console.error('Error updating news:', error);
                alert(`Error saving news: ${error.message}`);
            } finally {
                setLoading(false); // Hide loading animation
                setTimeout(() => setSuccessMessage(''), 3000); // Clear success message after 3 seconds
            }
        } else {
            alert('Please enter text , cant leave empty !!');
        }
    };

    return (
        <div className="container">
            {isAdminLoggedIn && (
                <div className="logout-section">
                    <Button variant="danger" onClick={onLogout} className="logout-button">
                        Logout
                    </Button>
                </div>
            )}

            <Card className="text-center">
                <Card.Header className="news-heading">Latest News on Admissions and Dates</Card.Header>
                <Card.Body>
                    {newsItems.length > 0 ? (
                        newsItems.map((news, index) => (
                            <Card.Text className='news-content' key={index}>{news}</Card.Text>
                        ))
                    ) : (
                        <Card.Text>No news available</Card.Text>
                    )}
                </Card.Body>
            </Card>

            {isAdminLoggedIn && (
                <>
                    <Button variant="primary" onClick={handleAddNewsClick} className="add-news-button">
                        Add News
                    </Button>
                    {isAddingNews && (
                        <div className="news-form">
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
                                    {loading ? <Spinner animation="border" size="sm" /> : 'Save'}
                                </Button>
                            </Form>
                            {successMessage && (
                                <div className="success-message">
                                    {successMessage}
                                </div>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default NewUpdates;
