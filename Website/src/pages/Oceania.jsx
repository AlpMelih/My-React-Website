import React from 'react'
import Comments from '../components/comments'
import '../components/comments.css'
import countriesApi from '../components/countriesApi';

function Oceania() {
    const { oceaniaCountries } = countriesApi()
    const { comments, handleCommentChange, saveCommentsToLocalStorage } = Comments();
    return (
        <div>
            Oceania Page
            <div className='Center-text'>
                Gitmek istediğiniz yerleri buraya not alabilirsiniz
            </div>
            <div className='note-container'>
                <textarea className='notes'
                    value={comments.OceaniaC}
                    onChange={(e) => handleCommentChange('OceniaC', e.target.value)}
                    placeholder="Notlarınız"
                />
                <button className='note-save-button' onClick={(e) => saveCommentsToLocalStorage()}>
                    Kaydet
                </button>
            </div>
            <div>
                {oceaniaCountries.map(country => {
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

export default Oceania
