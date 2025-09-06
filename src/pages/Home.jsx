import React, { useState } from 'react'

export default function Home() {
	const [subscribed, setSubscribed] = useState(false)

	function handleSubscribe(e) {
		e.preventDefault()
		setSubscribed(true)
	}

	return (
		<div>
			<section className="hero">
				<div>
					<h1>Indian Space Research Organisation</h1>
					<h3>Space Technology in the Service of Humankind </h3>
				</div>
				<div className="hero-graphic">
					<img src="https://questionpapershub.com/free-job-alert/wp-content/uploads/2020/12/ISRO-Recruitment-2020-logo-1.png" alt="ISRO representative" />
				</div>
			</section>

			<section className="section">
				<h2>Upcoming Missions</h2>
				<div className="cards">
					<div className="card">
						<h3>Gaganyaan 4</h3>
						<p><strong>Focus:</strong> First Indian human spaceflight</p>
						<p><strong>Target Launch:</strong> Q1 2027</p>
					</div>
					<div className="card">
						<h3>Chandrayaan-4</h3>
						<p><strong>Focus:</strong> Lunar sample-return mission</p>
						<p><strong>Target Launch:</strong> ~2027–2028</p>
					</div>
					<div className="card">
						<h3>Venus Orbiter (Shukrayaan)</h3>
						<p><strong>Focus:</strong> Planetary exploration of Venus</p>
						<p><strong>Target Launch:</strong> 2025</p>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="numbers-box">
					<strong>By the Numbers</strong>
					<div className="numbers-grid">
						<div className="number-item"><strong>100+</strong> Spacecraft Missions</div>
						<div className="number-item"><strong>80+</strong> Launch Vehicle Missions</div>
						<div className="number-item"><strong>1st</strong> Nation to Reach Mars in First Attempt</div>
						<div className="number-item"><strong>42</strong> Earth Observation Satellites</div>
						<div className="number-item"><strong>150+</strong> Communication Transponders</div>
						<div className="number-item"><strong>Gaganyaan</strong> 2025</div>
					</div>
				</div>
			</section>

			
		</div>
	)
} 