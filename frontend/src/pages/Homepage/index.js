import React, { useState, useEffect } from 'react';

import Input from '../../components/Input';
import { Form } from '@unform/web';
import { Modal, Button } from 'react-bootstrap'

import './style.css';
import '../../theme/flexbox/Flexbox.css';

import api from '../../services/api'


export default function Homepage() {
	const [showNotFound, setShowNotFound] = useState(false);
	const [showFound, setShowFound] = useState(false);
	const [listArticles, setListArticles] = useState([])

	const handleClose = () => { setShowNotFound(false); setShowFound(false) }

	async function handleSubmit(data) {

		await api.get(`/article?title=${data.name}`).then(response => {
			const total = response.data.length
			if (total < 1) {
				setShowNotFound(true)
				setShowFound(false)
	
	
			} else {
				setShowNotFound(false)
				setShowFound(true)
	
				setListArticles(response.data)
			}
		})
		
	}

	return (
		<>
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

			<Modal show={showNotFound} onHide={handleClose} data-type="Not found">
				<Modal.Header closeButton>
					<Modal.Title>Nada encontrado :( </Modal.Title>
				</Modal.Header>
				<Modal.Body>Você gostaria de ser o primeiro a criar um artigo sobre isso ?</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}> Não </Button>
					<Button variant="primary" onClick={handleClose}> Sim </Button>
				</Modal.Footer>
			</Modal>
			<Modal show={showFound} onHide={handleClose} data-type="Found">
				<Modal.Header closeButton>
					<Modal.Title>Encontramos :) </Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Artigos relacionados a pesquisa:
					<ul>
					{
						listArticles &&
						listArticles.map(article => {
							return <li key={article.id}> {article.title} </li>
						})
					}
					</ul>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}> Não </Button>
					<Button variant="primary" onClick={handleClose}> Sim </Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
