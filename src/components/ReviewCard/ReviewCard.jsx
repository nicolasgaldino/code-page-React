import React from 'react';
import styles from './ReviewCard.module.css';
const {
  clienteImg,
  clientPicture,
  cliente,
} = styles;

export const ReviewCard = ({ ClientPicture, ClientName, ClientWorkPlace, ClientReview }) => {
  return (
    <>
      <div className={clienteImg}>
        <img className={clientPicture} src={ClientPicture} alt="Clientes" />
        <div className={cliente}>
          <p>{ClientReview}</p>
          <h1>{ClientName}</h1>
          <h2>{ClientWorkPlace}</h2>
        </div>
      </div>
    </>
  )
}
