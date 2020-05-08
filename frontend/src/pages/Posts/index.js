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
                                    <li>Como realizar isso ?</li>
                                    <li>O que sao Hooks no React ?</li>
                                    <li>Quando devemos criar um componente ?</li>
                                    <li>Porque utilizar vueJS</li>
                                    <li>Quando utilizar o ContextAPI</li>
                                    <li>ContextAPI x Redux</li>
                                </ul>
                        </div>
                        </div>
                    </div>
                    <div className="Article_Content">
                        <div className="hFlex layout center-center">
                            Text
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Posts;