import React, {useState} from 'react'
import { data } from '../config';
import Modal from '../components/Modal/Modal';
import useLocalStorage from '../utils/useLocalStorage';

const CardsList = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ selectedCard, setSelectedCard ] = useState({ flipped: false });
  const [completedProblems, setCompletedProblems] = useLocalStorage("completedProblems"); /* Custom Hook */

  
  const uncompletedProblems = data.filter(
    (problem) => !completedProblems.some((c) => c.Id === problem.Id)
  );


  function openModal(card) {
    console.log("open clicked", card)
    setModalIsOpen(true);
    setSelectedCard({...card, flipped: false});
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function markCompleted(props) {
      // If problem is not completed , then add to local storage 
      if (!completedProblems.find(problem => problem.Id === props.Id)) {
        setCompletedProblems([...completedProblems, props]); 
      } else { //If restaurant is already in local storage, then remove from it.
        const modifiedCompletedProblems = completedProblems.filter((problem) => problem.Id !== props.Id);
        setCompletedProblems(modifiedCompletedProblems);
      }
    closeModal();
  }


  return (
    <>
      <div className='card-grid'>
        {uncompletedProblems.map((card) => {
    
          return (
            <div key={card.Id} className="card" style={ {backgroundColor: card.Type === "Easy" ? "#aaf683" : ( card.Type === "Medium"  ? "#ffd97d":"#ee6055" )
        }} onClick={()=> { openModal(card)}}>
              <span>
                {card.Problem}
              </span>
            </div>
          )
        })}
      </div>
      <br/>
      <hr/>
        <center><p>Completed count: {completedProblems ? completedProblems.length : 0}</p></center>
      <hr/>
      <br/>
      <div className='card-grid'>
        {completedProblems.map((card) => {
    
          return (
            <div key={card.Id} className="card" style={ {backgroundColor: card.Type === "Easy" ? "#aaf683" : ( card.Type === "Medium"  ? "#ffd97d":"#ee6055" )
        }} onClick={()=> { openModal(card)}}>
              <span>
                {card.Problem} (Understood)
              </span>
            </div>
          )
        })}
      </div>


      <Modal show={modalIsOpen} 
      handleClose={closeModal} 
      handleComplete={()=>markCompleted(selectedCard)}
      backgroundColor={selectedCard.Type === "Easy" ? "#aaf683" : ( selectedCard.Type === "Medium"  ? "#ffd97d":"#ee6055" )}
      isCompleted={completedProblems.some((problem) => problem.Id === selectedCard.Id)}>
          <div className={`card card-modal ${selectedCard.flipped ? 'flip' : ''}`} 
            style={{ backgroundColor: selectedCard.Type === "Easy" ? "#aaf683" : ( selectedCard.Type === "Medium"  ? "#ffd97d":"#ee6055" ) }}>
            <div className="card-inner" onClick={() => setSelectedCard({ ...selectedCard, flipped: !selectedCard.flipped })}>
              <div className="front">
                {selectedCard.Problem}
              </div>
              <div className="back">
                <p className='summary'>{selectedCard.Summary}</p>
                <div className='additional'>
                  <div className='question'> 
                    <button className="view-btn" onClick={(e) => { e.stopPropagation(); window.open(selectedCard.Url, '_blank'); }}>View Question</button>
                    <button className="view-btn" onClick={(e) => { e.stopPropagation(); window.open(selectedCard.Solution, '_blank'); }}>View Solution</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Modal>
    </>
  )
}

export default CardsList
