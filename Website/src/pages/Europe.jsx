import React from 'react'
import Comments from '../components/comments';
import Navbar from '../components/Navbar';

function Europe() {
    const { comments, handleCommentChange, saveCommentsToLocalStorage } = Comments();

    return (
        <div>
            Europe page
            <textarea
                value={comments.EuropeC}
                onChange={(e) => handleCommentChange('EuropeC', e.target.value)}
                placeholder="EuropeC"
            />
            <button onClick={(e) => saveCommentsToLocalStorage()}></button>
        </div>
    );
}

export default Europe;
