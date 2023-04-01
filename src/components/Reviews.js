import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiHandler from "services/Api";

export const Reviews = () => {
    const { movieId } = useParams();
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(null);
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        apiHandler(`movie/${movieId}/reviews?`)
        .then(res => {
            const feedbacks = res.results.map(({ id, author, content }) => {
                return { id, author, content }
            });
            setReviews([...feedbacks])
            })
        .catch(error => new Error(`Something goes wrong: ${error}`))
        // .finally(() => setLoading(false));
    }, [movieId]);

    return <>
        <div style={{fontWeight: '500'}}>Rewiews:</div>
        <ul>
            {reviews.map(({ id, author, content }) => (
                <li key={id}>
                    <p>{author}</p>
                    <p>{content}</p>
                </li>
            ))}
        </ul>
        </>
};

export default Reviews;