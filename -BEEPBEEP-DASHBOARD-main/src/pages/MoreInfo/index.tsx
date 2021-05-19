/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Navbar } from '../../components/Navbar';
import "./style.css";

export function MoreInfo(){
    return(
        <div>
            <Navbar/>
            <div className='flex-container'>
                <div style={{backgroundColor:''}} className='flex-item'>

                <div className='teste'>
                    <div className='imagem-teste'>
                        <img src="https://assinecarlm.com.br/wp-content/uploads/2019/07/carro-1-mobile.png" alt="" className='carro-imagem'/>
                        <ul>
                            <li>ENI - 4679</li>
                            <li>ARIZO SE</li>
                            <li>2019</li>
                            <li>BRANCO</li>
                            <li>Chassi VF5566EDG</li>
                            <li>RENAVAM 1999</li>
                        </ul>
                    </div>
                </div>

                <div className='container'>
                    <div className='imagem-teste'>
                        <h4>AVARIAS</h4>
                        <div></div>
                    </div>
                </div>

                <div className='container'>
                    <div className='imagem-teste'>
                        <h4>STATUS</h4>
                    </div>
                </div>

                <div className='container'>
                    <div className='imagem-teste'>
                        <h4>CORRIDA</h4>

                    </div>
                </div>

                <div className='container'>
                    <div className='imagem-teste'>
                        <h4>COMANDOS</h4>
                    </div>
                </div>

               <div className='container01'>

                    <div className='excluir'>
                        <div>
                            <h4>Excluir</h4>
                        </div>
                    </div>

                    <div className='atualizarInfos'>
                        <div>
                            <h4>Atualizar informações</h4>
                        </div>
                    </div>
                    
                
                

               </div>
                
                
               
                
                  
                </div>
                
                {/** MAPA - API GOOGLE MAPS  */}
                <div style={{backgroundColor:'red', height: '410px'}}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0488661539!2d-46.87549743438982!3d-23.681531449872665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1620656944610!5m2!1spt-BR!2sbr" loading="lazy" style={{height: '100%', width: '100%'}}></iframe></div>
               
                <div>
                    
                    <div className='grid-teste1'>
                        <div className='container0'>
                        <div className='imagem-teste'>
                        <h4>POSIÇÃO</h4>
                    </div>
                         </div>
                         <div className='container0'>
                         <div className='imagem-teste'>
                        <h4>SENSORES</h4>
                    </div>
                         </div>
                    </div>

                    <div className='grid-teste2'>
                         <div className='imagem-teste-telemetria'>
                         <div className='imagem-teste'>
                        <h4>TELEMETRIA</h4>
                    </div>
                         </div>
                         <div className='imagem-teste-telemetria'>
                         <div className='imagem-teste'>
                        <h4>DISPOSITIVO</h4>
                    </div>
                         </div>
                    </div>

                    


                </div>
            </div>

            

            



        </div>   
    )
}
