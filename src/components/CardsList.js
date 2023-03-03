import React, {useState} from 'react'
import { data } from '../config';
import Modal from '../components/Modal/Modal';


const CardsList = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [flip, setFlip] = useState(false);
  const [ selectedCard, setSelectedCard ] = useState({});

  function openModal(card) {
    console.log("open clicked", card)
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
              <div className="back">
                <p className='summary'>{selectedCard.Summary}</p>
                <div className='additional'>
                  <div className='question'> <a href={selectedCard.Url} target="_blank">Open Question URL</a></div>
                  <div className='solution'> <a href={selectedCard.Solution} target="_blank">Open Solution</a></div>
                </div>
              </div>
          </div>
      </Modal>
    </>
  )
}

export default CardsList