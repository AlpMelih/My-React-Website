import React from 'react'
import Comments from '../components/comments';
import Navbar from '../components/Navbar';

function Europe() {
    const { comments, handleCommentChange, saveCommentsToLocalStorage } = Comments();

    return (
        <div>
            Europe page
            <div className='Center-text'>
                Gitmek istediğiniz yerleri buraya not alabilirsiniz
            </div>
            <div className='note-container'>



                <textarea className='notes'
                    value={comments.EuropeC}
                    onChange={(e) => handleCommentChange('EuropeC', e.target.value)}
                    placeholder="EuropeC"
                />
                <button className='note-save-button' onClick={(e) => saveCommentsToLocalStorage()}>
                    Kaydet
                </button>
            </div>
        </div>
    );
}

export default Europe;
