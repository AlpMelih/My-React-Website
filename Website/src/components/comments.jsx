import React, { useEffect, useState } from 'react';

function Comments() {
    const [comments, setComments] = useState({
        EuropeC: "",
        AsiaC: "",
        SouthAmericaC: "",
        OceaniaC: "",
        AfricaC: ""
    });

    const handleCommentChange = (region, value) => {
        setComments(prevComments => ({
            ...prevComments,
            [region]: value
        }));
    };
    const saveCommentsToLocalStorage = () => {
        localStorage.setItem('comments', JSON.stringify(comments));
    };
    useEffect(() => {
        const savedComments = localStorage.getItem('comments');
        if (savedComments) {
            setComments(JSON.parse(savedComments));
        }
    }, []);

    return {
        comments,
        handleCommentChange,
        saveCommentsToLocalStorage,
        useEffect
    };
}

export default Comments;