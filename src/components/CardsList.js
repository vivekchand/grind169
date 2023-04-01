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

  function handleLinkClick(event) {
    // Stop the event propagation to prevent card from flipping
    event.stopPropagation();
  }

  function markCompleted(props) {
    console.log("completed")
      // If problem is not completed , then add to local storage 
    if (!completedProblems.find(problem => problem.Id === props.Id)) {
      setCompletedProblems([...completedProblems, props]); 
    } else { //If restaurant is already in local storage, then remove from it.
      const modifiedCompletedProblems = completedProblems.filter((problem) => problem.Id !== props.Id);
      setCompletedProblems(modifiedCompletedProblems);
    }

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
      isCompleted={completedProblems.some((problem) => problem.Id === selectedCard.Id)}>
          <div className={`card card-modal ${selectedCard.flipped ? 'flip' : ''}`} 
            onClick={() => setSelectedCard({ ...selectedCard, flipped: !selectedCard.flipped })}>
            <div className="front">
                {selectedCard.Problem}
              </div>
              <div className="back">
                <p className='summary'>{selectedCard.Summary}</p>
                <div className='additional'>
                  <div className='question'> <a href={selectedCard.Url} target="_blank" rel="noreferrer" onClick={handleLinkClick} >Open Question URL</a></div>
                  <div className='solution'> <a href={selectedCard.Solution} target="_blank" rel="noreferrer" onClick={handleLinkClick}>Open Solution</a></div>
                </div>
              </div>
          </div>
      </Modal>
    </>
  )
}

export default CardsList
