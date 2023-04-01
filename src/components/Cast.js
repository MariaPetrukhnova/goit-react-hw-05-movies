import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiHandler from "services/Api";

const Cast = () => {
    const { movieId } = useParams();
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        // setLoading(true)
            apiHandler(`movie/${movieId}/credits?`)
            .then(res => {
                const mainCast = res.cast.map(({ id, name, character }) => {
                    return { id, name, character }
                });
                setCast([...mainCast])
            })
            .catch(error => new Error(`Something goes wrong: ${error}`))
            // .finally(() => setLoading(false));
    }, [movieId]);

    return <>
        <div style={{fontWeight: '500'}}>Cast:</div>
        <ul>
          {cast.map(({ id, name, character }) => (
            <li key={id}>
                <p><span>{name}</span>...../<span>{character}</span></p>
            </li>
          ))}
        </ul>
        </>
};

export default Cast;