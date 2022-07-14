import React, { useState, useEffect, useRef } from 'react'
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {

  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentElement = useRef();
  const commentatorName = useRef();
  const commentatorEmail = useRef();
  const storeDataLocally = useRef();

  useEffect(() => {
    commentatorName.current.value = window.localStorage.getItem('name');
    commentatorEmail.current.value = window.localStorage.getItem('email');
  }, [])
  

  const handleCommentSubmission = () => {
    setError(false)

    const { value: comment } = commentElement.current;
    const { value: name } = commentatorName.current;
    const { value: email } = commentatorEmail.current;
    const { checked: storeData } = storeDataLocally.current;

    if (!comment || !name || !email ) {
        setError(true);
        return; // This return statement allows us to step out (stop) of the function (the comment submission) once our conditional finishes it's duty
    }

    const commentObject = {
      name, email, comment, slug
    }

    if(storeData) {
      Window.localStorage.setItem('name', name);
      Window.localStorage.setItem('email', email);
    } else {
      Window.localStorage.removeItem('name', name);
      Window.localStorage.removeItem('email', email);
    }

    submitComment(commentObject).then((res) => {
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000)
    })
  }

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
          Comment area
        </h3>

        <div className='grid grid-cols-1 gap-4 mb-4'>
          <textarea name= "Comment" id= "" ref= { commentElement } placeholder = 'Leave a comment here' className= 'p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-100 bg-gray-200 text-gray-700' />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
          <input type="text" ref={ commentatorName } placeholder = 'Your name' className = 'p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-100 bg-gray-200 text-gray-700' />
          <input type="text" ref={ commentatorEmail } placeholder = 'Your email address' className = 'p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-100 bg-gray-200 text-gray-700' />
        </div>

        <div className='grid grid-cols-1 gap-4 my-5'> 
          <div className='flex align-center gap-2'>
            <input type= "checkbox" ref= { storeDataLocally } id= 'storeData' name='storeData' value={ true }/>
            <label htmlFor= 'storeData' className='text-gray-500 cursor-pointer'> Save email and name for future comments </label>
          </div>
        </div>

        { error && <p className='text-xs text-red-500'> In order to leave a comment all fields must be filled out. </p> }

        <div className='mt-8 text-center'>
          <button type = 'button' onClick={ handleCommentSubmission } className='transition duration-500 ease-in-out hover:bg-indigo-900 inline-block text-white bg-pink-600 text-lg rounded-full p-3 cursor-pointer'>
            Post comment
          </button>
          { showSuccessMessage && <p className='text-xl font-semibold mt-3 text-green-500'> Your comment has been submitted for review! </p>}
        </div>
    </div>
  )
}

export default CommentsForm