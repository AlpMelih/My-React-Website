import React from 'react'
import Comments from '../components/comments';
import '../components/comments.css'

function Asia() {
    const { comments, handleCommentChange, saveCommentsToLocalStorage } = Comments();
    return (
        <div>
            <div>
                Asia page
            </div>
            <div className='Center-text'>
                Gitmek istediğiniz yerleri buraya not alabilirsiniz
            </div>
            <div className='note-container'>



                <textarea className='notes'
                    value={comments.AsiaC}
                    onChange={(e) => handleCommentChange('AsiaC', e.target.value)}
                    placeholder="EuropeC"
                />
                <button className='note-save-button' onClick={(e) => saveCommentsToLocalStorage()}>
                    Kaydet
                </button>
            </div>

        </div>
    )
}

export default Asia
