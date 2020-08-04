import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHPhPW6ZxhL0g/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=q_UkoasURH470Vz5te3pTSs3uDboRHJocvuqTf29m74" alt="Caio Mateus"/>
            <div>
                <strong>Caio Mateus</strong>
                <span>Educação Física</span>
            </div>
        </header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure dolorem totam nemo itaque aliquam eligendi voluptatem molestiae impedit, repellendus quis quas nesciunt sed ratione! Aperiam reprehenderit porro aspernatur in fugit. 
        </p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ 100,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;