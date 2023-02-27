import React, {useState} from 'react'
import { data } from '../config';
import Modal from '../components/Modal/Modal';


const CardsList = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [flip, setFlip] = useState(false);
  const [ selectedCard, setSelectedCard ] = useState({});

  function openModal(card) {
    console.log("open clicked")
    setModalIsOpen(true);
    setSelectedCard(card);
  }

  function closeModal() {
    setModalIsOpen(false);
    
  }

  return (
    <>
      <div className='card-grid'>
        {data.map((card,index) => {
          return (
            <div key={index} className="card" onClick={()=> { openModal(card)}}>
              <span>
                {card.Problem}
              </span>
            </div>
          )
        })}
      </div>

      <Modal show={modalIsOpen} handleClose={closeModal} >
          
          <div className={`card card-modal ${flip ? 'flip' : ''}`} onClick={()=> setFlip(!flip)} >
              <div className="front">
                {selectedCard.Problem}
              </div>
              <div className="back">{selectedCard.Summary}</div>
          </div>
         
      </Modal>
    </>
  )
}

export default CardsList