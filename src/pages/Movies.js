import { useEffect, useState, useRef } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import apiHandler from "services/Api";

const SEARCH_ENDPOINT = 'search/movie?query=';

const Movies = () => {
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(null);
    const [searchName, setSearchName] = useState('');
    const [searchArr, setSearchArr] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    
    const handleInput = (e) => {
        const request = e.currentTarget.value.toLowerCase();
        setSearchName(request);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchName.trim() === '') {
            window.alert('Request is empty!');
            return;
        } else {
            setSearchParams({ query: searchName });
        }
    };

    const firstUpdate = useRef(true);
    useEffect(() => {
        const query = searchParams.get('query');
        if (firstUpdate.current) {
            firstUpdate.current = false
        } else if (query) {
            // setError(null);
            // setLoading(true);
            apiHandler(`${SEARCH_ENDPOINT}${query}&`)
                .then(res => {
                    setSearchArr([...res.results]);
                })
                .catch(error => new Error(`Something goes wrong: ${error}`))
                // .finally(() => setLoading(false));
        }
    }, [searchParams]);

    return <div style={{margin: '0 40px'}}>
        <h2>Search your favorite film</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search any film"
                value={searchName}
                onChange={handleInput}
                style={{width:'300px', height:'40px', border: '1px solid gray', padding: '0', borderRadius: '5px' }}
            />
            <button type="submit" style={{ width: '100px', height: '40px', marginLeft: '20px' }}>Search</button>
        </form>
        <ul>
        {searchArr.map(({ id, title }) => (
            <li key={id} id={id}>
                <Link key={id} id={id} to={`${id}`} state={{ from: {pathname: location.pathname, search: location.search } }}>
                    {title}
                </Link>
            </li>
        ))}
        </ul>
    </div>
};

export default Movies;