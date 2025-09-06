import React from 'react'

export default function About() {

	return (
		<div>
			<h1>About ISRO</h1>
			<div className="info-containers">
				<div className="info-container">
					<h3>Key Facts</h3>
					<div className="fact-item">
						<span className="fact-label">Founded:</span>
						<span className="fact-value">1969</span>
					</div>
					<div className="fact-item">
						<span className="fact-label">Founder:</span>
						<span className="fact-value">Dr. Vikram Sarabhai</span>
					</div>
					<div className="fact-item">
						<span className="fact-label">Headquarters:</span>
						<span className="fact-value">Bengaluru, India</span>
					</div>
					<div className="fact-item">
						<span className="fact-label">Launch Vehicles:</span>
						<span className="fact-value">PSLV, GSLV, LVM3</span>
					</div>
					<div className="fact-item">
						<span className="fact-label">Satellites Launched:</span>
						<span className="fact-value">100+ Indian, 400+ foreign</span>
					</div>
					<div className="fact-item">
						<span className="fact-label">Landmark:</span>
						<span className="fact-value">1st to reach Mars on first attempt</span>
					</div>
					
					<div className="fact-item">
						<span className="fact-label">Future Goal:</span>
						<span className="fact-value">Human Spaceflight (Gaganyaan)</span>
					</div>
				</div>

				<div className="info-container">
					<h3>Overview</h3>
					<p>The Indian Space Research Organisation (ISRO), founded in 1969 by Dr. Vikram Sarabhai and headquartered in Bengaluru, is India's national space agency under the Department of Space.ISRO has launched hundreds of Indian and foreign satellites, developed powerful launch vehicles, and achieved historic milestones such as becoming the first nation to reach Mars on its maiden attempt and successfully landing Chandrayaan-3 on the Moon's south pole. With its latest solar mission Aditya-L1 and the upcoming Gaganyaan human spaceflight, ISRO continues to push the frontiers of space exploration while driving national development.</p>
				</div>
			</div>
			
			<div className="achievements-section">
				<h2>ISRO's Global Impact & Biggest Achievements</h2>
				
				<div className="achievement-item">
					<div className="achievement-content">
						<h3>Mangalyaan - MOM (2013)</h3>
						<p>India's first Mars mission.</p>
						<p>Made India the 1st Asian nation to reach Mars orbit and the 1st in the world to do so on the first attempt.</p>
					</div>
					<div className="achievement-image">
						<img src="https://planetary.s3.amazonaws.com/web/assets/pictures/_1200x630_crop_center-center_82_none/20140917_Mangalyaan_vipulmb_5.jpg?mtime=1753469972" alt="Mangalyaan Mars Orbiter Mission" />
					</div>
				</div>

				<div className="achievement-item">
					<div className="achievement-content">
						<h3>Chandrayaan-3 (2023)</h3>
						<p>India became the 1st country to land near the Moon's South Pole.</p>
						<p>Made India the 4th nation to achieve soft landing on the Moon.</p>
					</div>
					<div className="achievement-image">
						<img src="https://education.sakshi.com/sites/default/files/images/2023/08/02/chandrayaan3-1690977530.jpg" alt="Chandrayaan-3 Moon Mission" />
					</div>
				</div>

				<div className="achievement-item">
					<div className="achievement-content">
						<h3>Aditya-L1 (2023)</h3>
						<p>India's first solar observatory, now studying the Sun from L1 orbit</p>
					</div>
					<div className="achievement-image">
						<img src="https://madhyamamonline.com/h-upload/2023/12/29/2422696-solarmission.webp" alt="Aditya-L1 Solar Mission" />
					</div>
				</div>
			</div>
		</div>
	)
} 