import { Suspense, useEffect, useRef, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import apiHandler from "services/Api";

const ENDPOINT = 'movie/';
const IMG_URL = 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/';

const MovieDetails = () => {
    const { movieId } = useParams();
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(null);
    const [movieDet, setMovieDet] = useState({});
    const location = useLocation();
    const backLink = useRef(location.state?.from ?? '/');

    useEffect(() => {
        apiHandler(`${ENDPOINT}${movieId}?`)
        .then(res => {
            const movDetails = {};
            movDetails.title = res.title;
            movDetails.genres = res.genres.map((item) => item.name).join(", ");
            movDetails.overview = res.overview;
            movDetails.stats = res.vote_average;
            movDetails.img = (IMG_URL + res.poster_path);
            setMovieDet({ ...movDetails });
            })
        .catch(error => new Error(`Something goes wrong: ${error}`))
        // .finally(() => setLoading(false));
    }, [movieId]);
    
    return (
        <div style={{ margin: '0 40px' }}>
        <div style={{display: "flex", alignItems: 'center'}}>
            <Link to={backLink.current} style={{border: '1px solid gray', borderRadius: '5px', height: '24px', padding: '5px', textDecoration: 'none', marginRight: '30px' }}>Back to list</Link>
            <h1>{movieDet.title}</h1>
        </div>
        <div
            style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center'
            }}
        >
            <img width='600' src={movieDet.img} alt={movieDet[1]} />
            <div style={{padding: "10px"}}>
                <p style={{fontSize: "20px", fontWeight: '500'}}>RATING:</p>
                <p> {movieDet.stats}</p>
                <p style={{fontSize: "20px", fontWeight: '500'}}>OVERVIEW:</p>
                <p> {movieDet.overview}</p>
                <p style={{fontSize: "20px", fontWeight: '500'}}>GENRES:</p>
                <p> {movieDet.genres}</p>
            </div>
        </div>
        <ul style={{listStyle: 'none', padding: '0', fontSize: '30px', borderTop: '1px solid gray'}}> ADDITIONAL DETAILS
            <li>
                <Link to='cast' style={{textDecoration: 'none', fontSize: '20px'}}>Cast</Link>
            </li>
            <li>
                <Link to='reviews' style={{textDecoration: 'none', fontSize: '20px'}}>Reviews</Link>
            </li>
        </ul>
        <Suspense fallback={<div>Loading additional info...</div>}>
            <Outlet />
        </Suspense>
        </div>
    )
}

export default MovieDetails;