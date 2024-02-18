import React from 'react'
import Comments from '../components/comments';

function Asia() {
    const { comments, handleCommentChange, saveCommentsToLocalStorage } = Comments();
    return (
        <div>
            Asia page
            <textarea
                value={comments.AsiaC}
                onChange={(e) => handleCommentChange('AsiaC', e.target.value)}
                placeholder="EuropeC"
            />
            <button onClick={(e) => saveCommentsToLocalStorage()}></button>
        </div>
    )
}

export default Asia
