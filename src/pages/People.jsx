import React from 'react'

const ISRO_PEOPLE = [
	{ name: "Dr. Vikram Sarabhai", role: "Father of the Indian Space Programme" },
	{ name: "Dr. Satish Dhawan", role: "Guided ISRO during the 1970s–80s" },
	{ name: "Dr. A.P.J. Abdul Kalam", role: "Missile Man of India & Former President" },
	{ name: "Dr. K. Sivan", role: "Former ISRO Chairman, led Chandrayaan-2" },
	{ name: "Dr. S. Somanath", role: "Current ISRO Chairman, leading Gaganyaan" },
	{ name: "Dr. Rakesh Dhawan", role: "Mission Director of Gaganyaan" },
	{ name: "Ritu Karidhal", role: "Rocket Woman of India, key in Mars Orbiter Mission" },
	{ name: "Dr. Rakesh Sharma", role: "First Indian in Space (1984)" },
	{ name: "Dr. Tessy Thomas", role: "Missile Woman of India, Agni project lead" }
]

export default function People() {
	return (
		<div>
			<h1>ISRO Leaders</h1>
			<p>Meet the visionaries and leaders who have shaped India's space program.</p>
			
			<div className="people-grid">
				{ISRO_PEOPLE.map((person, index) => (
					<div key={index} className="person-card">
						<div className="person-header">
							<h3>{person.name}</h3>
						</div>
						<p>{person.role}</p>
					</div>
				))}
			</div>
		</div>
	)
}
