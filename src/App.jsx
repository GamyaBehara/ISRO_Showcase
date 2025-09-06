import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Missions from './pages/Missions'
import People from './pages/People'
import Live from './pages/Services'

function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<p>© 2025 Gamya Behara | All Rights Reserved</p>
				<p>
					Contact:{" "}
					<a href="mailto:beherasrigamya@gmail.com">beherasrigamya@gmail.com</a> | 
					<a href="https://github.com/GamyaBehara" target="_blank" rel="noreferrer"> GitHub</a> | 
					<a href="https://www.linkedin.com/in/gamyabehara/" target="_blank" rel="noreferrer"> LinkedIn</a>
				</p>
			</div>
		</footer>
	)
}

function Layout({ children }) {
	return (
		<div className="app">
			<header className="header">
				<div className="container">
					<div className="logo">Indian Space Research Organisation</div>
					<nav className="nav">
						<NavLink to="/" end>Home</NavLink>
						<NavLink to="/about">About</NavLink>
						<NavLink to="/missions">Missions</NavLink>
						<NavLink to="/people">People</NavLink>
						<NavLink to="/live">Live</NavLink>
					</nav>
				</div>
			</header>

			<main className="main container">{children}</main>

			<Footer /> {/* 👈 Added footer here */}
		</div>
	)
}

export default function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/missions" element={<Missions />} />
				<Route path="/people" element={<People />} />
				<Route path="/live" element={<Live />} />
			</Routes>
		</Layout>
	)
}
