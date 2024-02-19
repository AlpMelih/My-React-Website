import React from 'react'
import Comments from '../components/comments';
import '../components/comments.css'

function Africa() {
    const { comments, handleCommentChange, saveCommentsToLocalStorage } = Comments();
    return (
        <div>
            Africa page
            <div className='Center-text'>
                Gitmek istediğiniz yerleri buraya not alabilirsiniz
            </div>
            <div className='note-container'>
                <textarea className='notes'
                    value={comments.AfricaC}
                    onChange={(e) => handleCommentChange('AfricaC', e.target.value)}
                    placeholder="Notlarınız"
                />
                <button className='note-save-button' onClick={(e) => saveCommentsToLocalStorage()}>
                    Kaydet
                </button>
            </div>
        </div>

    )
}

export default Africa
