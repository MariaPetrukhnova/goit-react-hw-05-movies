import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import apiHandler from "services/Api";

const HOME_ENDPOINT = 'trending/movie/week';

const Home = () => {
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(null);
    const [trendMoviesArr, setMoviesArr] = useState([]);

    useEffect(() => {
            apiHandler(`${HOME_ENDPOINT}?`)
            .then(res => {
                const newArr = res.results.map(({ id, title }) => {
                    return { id, title }
                });
                setMoviesArr([...newArr]);
            })
            .catch(error => new Error(`Something goes wrong: ${error}`))
            // .finally(() => setLoading(false));
    }, []);

    return <div style={{margin: '0 40px'}}>
        <h1>The most popular world films</h1>
        <ul style={{listStyle: 'none', padding: '0'}}>
            {trendMoviesArr && trendMoviesArr.map(({id, title}) => (
                <li key={id} style={{lineHeight: '1.8', fontSize: "20px"}}>
                    <Link key={id} id={id} to={`movies/${id}`} style={{textDecoration: 'none'}}>
                        {title}
                    </Link>
                </li>))}
                
        </ul>
    </div>
};

export default Home;