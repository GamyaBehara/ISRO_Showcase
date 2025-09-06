import React from 'react'

const ISRO_MISSIONS = [
	{ name: "Chandrayaan-3", description: "Lunar exploration mission that successfully landed on the Moon's south pole", year: "2023" },
	{ name: "Mangalyaan (Mars Orbiter Mission)", description: "India's first interplanetary mission to Mars", year: "2013" },
	{ name: "Gaganyaan", description: "India's first human spaceflight program", year: "2024" },
	{ name: "Aditya-L1", description: "Solar observation mission to study the Sun", year: "2023" },
	{ name: "Chandrayaan-2", description: "Lunar mission with orbiter, lander and rover", year: "2019" },
	{ name: "Chandrayaan-1", description: "India's first lunar probe", year: "2008" },
	{ name: "PSLV", description: "Polar Satellite Launch Vehicle for satellite deployment", year: "1993" },
	{ name: "GSLV", description: "Geosynchronous Satellite Launch Vehicle for heavy payloads", year: "2001" },
	{ name: "Pragyan Rover", description: "Rover deployed by Chandrayaan-3; explored Moon's south pole region", year: "2023" }
]

const ISRO_DISCOVERIES = [
	{ name: "Chandrayaan-1", description: "First to discover water molecules & hydroxyl on the Moon, changing our understanding of lunar geology.", year: "2008" },
	{ name: "Mangalyaan (MOM)", description: "Found no detectable methane in Mars atmosphere; gave unique global data on dust storms & water loss.", year: "2013" },
	{ name: "Aditya-L1", description: "First Indian mission at L1 point; sending continuous images of the Sun to study solar flares & space weather.", year: "2023-present" },
	{ name: "Oceansat Series", description: "First to deliver real-time ocean data for India; enabled fishing zone advisories using phytoplankton mapping.", year: "2009–present" },
	{ name: "Astrosat", description: "India's first dedicated astronomy satellite; detected UV & X-ray radiation from distant galaxies and black holes.", year: "2015" },
	{ name: "Chandrayaan-Pragyan Rover", description: "First in-situ measurement of lunar south pole soil composition, detecting sulphur and other elements.", year: "2023" }
]

export default function Missions() {
	return (
		<div>
			<h1>ISRO Missions</h1>
			<p>Explore India's remarkable achievements in space exploration and satellite technology.</p>
			
			<div className="missions-grid">
				{ISRO_MISSIONS.map((mission, index) => (
					<div key={index} className="mission-card">
						<div className="mission-header">
							<h3>{mission.name}</h3>
							<span className="mission-year">{mission.year}</span>
						</div>
						<p>{mission.description}</p>
					</div>
				))}
			</div>

			<h1>ISRO Discoveries</h1>
			<p>Groundbreaking findings by ISRO that contributed new knowledge to space science.</p>

			<div className="missions-grid">
				{ISRO_DISCOVERIES.map((discovery, index) => (
					<div key={index} className="mission-card">
						<div className="mission-header">
							<h3>{discovery.name}</h3>
							<span className="mission-year">{discovery.year}</span>
						</div>
						<p>{discovery.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}
