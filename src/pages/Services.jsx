import React from 'react'

const LIVE_SERVICES = [
	{
		id: 'earth',
		name: 'Watch Earth Live',
		description: 'Real-time satellite imagery and Earth observation data from NASA',
		url: 'https://eyes.nasa.gov/apps/earth/#/',
	},
	{
		id: 'weather',
		name: 'Live Weather',
		description: 'Interactive weather maps with live satellite imagery and forecasts',
		url: 'https://zoom.earth/maps/satellite/',
	},
	{
		id: 'explore',
		name: 'Explore More',
		description: 'Discover more space and satellite resources',
		url: 'https://www.sen.com/',
	}
]

export default function Live() {
	const handleServiceClick = (url) => {
		window.open(url, '_blank', 'noopener,noreferrer')
	}

	return (
		<div>
			<h1>Live Services</h1>
			<p>Watch earth in real - time !</p>
			
			<div className="live-services-grid">
				{LIVE_SERVICES.map((service) => (
					<div 
						key={service.id} 
						className="live-service-card"
						onClick={() => handleServiceClick(service.url)}
					>
						<div className="service-icon">{service.icon}</div>
						<h3>{service.name}</h3>
						<p>{service.description}</p>
						<div className="service-link">
							<span>Click to explore →</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
} 