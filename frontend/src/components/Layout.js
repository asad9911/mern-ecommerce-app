import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({children}) => {
	return (
		<>

            <Header />
            {children}
			<Footer />
		</>
	)
}

export default Layout