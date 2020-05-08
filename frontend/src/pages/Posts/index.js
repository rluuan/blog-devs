import React from 'react';
import '../../theme/flexbox/Flexbox.css'
import './styles.css';

import { Outlet } from 'react-router'
import { FaUserAstronaut } from "react-icons/fa";


function Posts() {
    return (
        <>
            <div className="Article_Wrapper">
                <div className="hFlex layout center">
                    <div className="Article_Header hFlex layout vertical center">
                        <div class="Article_HeaderContent hFlex layout vertical around-justified">
                            <div className="hFlex layout vertical center">
                                <FaUserAstronaut size="3em" color="#fff" />

                                <span>Rodrigo Luan</span>
                            </div>

                            <div className="hFlex layout vertical center">
                                <ul>
                                    <li>Utilizando a Context API do React 16.3</li>
                                    <li>O que sao Hooks no React ?</li>
                                    <li>Quando devemos criar um componente ?</li>
                                    <li>Porque utilizar vueJS</li>
                                    <li>Quando utilizar o ContextAPI</li>
                                    <li>ContextAPI x Redux</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="Article_Content hFlex layout around-justified start">
                        <div className="Article_ContentArticle hFlex layout vertical center">
                            <h1>Utilizando a Context API do React 16.3</h1>
                            
                            <i style={{marginTop: 20}}>A nova versão do React saiu com algumas novidades, e dentre elas está a Context API. 
                                Esta API nos oferece uma nova forma de passar o estado de um componente na parte superior da árvore React para componentes abaixo. 
                                Para conseguir que os dados cheguem até esse componente precisávamos passar eles por props através de componentes que nem sequer as 
                                utilizavam. Com a Context API podemos injetar esses dados em qualquer nível da árvore, algo semelhante com o connect do react-redux..</i>

                            <div style={{marginTop: 20}}>Primeiro precisamos entender 3 novas coisas: React.createContext, Provider e Consumer. </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Posts;