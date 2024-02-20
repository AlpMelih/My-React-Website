import React, { useEffect, useState } from 'react'
import Comments from '../components/comments';
import '../components/comments.css'
import countriesApi from '../components/countriesApi';

function Asia() {
    const { assianCountries } = countriesApi()

    const { comments, handleCommentChange, saveCommentsToLocalStorage } = Comments();
    return (
        <div>
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
                        placeholder="Notlarınız"
                    />
                    <button className='note-save-button' onClick={(e) => saveCommentsToLocalStorage()}>
                        Kaydet
                    </button>
                </div>

            </div>
            <div >
                {assianCountries.map(country => {
                    return (

                        <div key={country.name.common}>
                            <h2>
                                {country.name.common}

                            </h2>
                            <img src={country.flags.png} />
                        </div>
                    );

                })}
            </div>
        </div>

    )
}

export default Asia
