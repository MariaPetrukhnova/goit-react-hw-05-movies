import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
    return <>
        <header style={{borderBottom: '1px solid gray'}}>
            <nav style={{ marginBottom: '20px', marginTop: '20px' }}>
                <NavLink to='/' style={{marginLeft: '40px', fontSize: '20px', textDecoration: 'none'}}>Home</NavLink>
                <NavLink to='/movies' style={{marginLeft: '40px', fontSize: '20px', textDecoration: 'none'}}>Movies</NavLink>
            </nav>
        </header>
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main>
    </>
};