const API_BASE_URL = 'http://localhost:8080/api/v1/news';

export const fetchNews = async () => {
    const response = await fetch(`${API_BASE_URL}/1`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) throw new Error('Failed to fetch news');
    const data = await response.json();
    return [data.news];
};

export const updateNews = async (newsItem) => {
    const response = await fetch(`${API_BASE_URL}/update`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ news: newsItem }),
    });

    // Read the response text
    const responseText = await response.text();

    if (!response.ok) {
        // Handle non-JSON error responses
        throw new Error(responseText || 'Failed to update news');
    }

    return responseText;
};
