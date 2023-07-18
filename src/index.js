import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from 			'./components/Nav.js';
import Header from 			'./components/Header.js';
import ProjectsGrid from 	'./components/GridProjects.js';
import Title from './components/Title.js';
import Contact from './components/Contact.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Nav />
		<Header />
		<Title />
		<ProjectsGrid />
		<Contact />
	</React.StrictMode>
);