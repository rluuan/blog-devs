import React, { useState } from 'react';
import Input from '../../components/Input';
import { Form } from '@unform/web';

import './style.css';
import '../../theme/flexbox/Flexbox.css';

import api from '../../services/api'

export default function Homepage() {

	async function handleSubmit(data) {
		const article = await api.get(`/article?title=${data.name}`)
		console.log(article)
	}
	

	return (
		<Form onSubmit={handleSubmit}>
			<div className="Landing_Wrapper">
				<div className="Landing_Content hFlex layout vertical center-center">
					<div className="Landing_Principal hFlex layout center around-justified">

						<div className="form__group field">

							<Input type="input" className="form__field" name="name" id='name' required />
							<label className="form__label">Pesquise por artigo ou autor</label>
						</div>
					</div>
				</div>
			</div>
		</Form>
	);
}
