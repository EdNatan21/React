import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/baixados.png'
import Head from './Head'

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft` }>
      <Head title='Ranek | Contato' description='Entre em contato'/>
      <img src={foto} alt="imagem"/>
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>Edsonnatan30@gmail.com</li>
          <li>(11)93258-0474</li>
          <li>Rua ali perto, 100</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato
