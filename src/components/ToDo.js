import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const ToDo = ({ text, updateMode, deleteToDo }) => { 
  return (
    <div className='todo'>
      <div className='text'>{text}</div>
      <div className='icons'>
        <FontAwesomeIcon icon={faEdit} className ="icon" onClick={updateMode} />
       
        <FontAwesomeIcon icon={faTrash} className ="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
}

export default ToDo;
