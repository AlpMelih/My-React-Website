import React from 'react'
import Comments from '../components/comments'
function NorthAmerica() {
    const { comments, handleCommentChange, saveCommentsToLocalStorage } = Comments();
    return (
        <div>
            KUZEY AMERİKA
            <div className='Center-text'>
                Gitmek istediğiniz yerleri buraya not alabilirsiniz
            </div>
            <div className='note-container'>
                <textarea className='notes'
                    value={comments.NorthAmericaC}
                    onChange={(e) => handleCommentChange('NorthAmericaC', e.target.value)}
                    placeholder="NorthAmericaC"
                />
                <button className='note-save-button' onClick={(e) => saveCommentsToLocalStorage()}>
                    Kaydet
                </button>
            </div>
        </div>
    )
}

export default NorthAmerica
