import React, { useState } from 'react';

import './style.css';
import '../../theme/flexbox/Flexbox.css';

export default function Homepage() {
	const [title, setTitle] = useState(false)

	function handleKeyDown(e) {
		
	}

	return (
		<div className="Landing_Wrapper">
			<div className="Landing_Content hFlex layout vertical center-center">
				<div className="Landing_Principal hFlex layout center around-justified">
					<div className="form__group field">
						<input type="input" className="form__field" placeholder="Name" name="name" id='name' required 
							onChange={e => setTitle(e.target.value)}
							onKeyDown={handleKeyDown}
						/>
						<label className="form__label">Pesquise por artigo ou autor</label>
					</div>
				</div>
			</div>
		</div>
	);
}
