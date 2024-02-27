import React from 'react'
import Comments from '../components/comments'
import '../components/comments.css'
import countriesApi from '../components/countriesApi';
import "../components/countries.css"

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
                    onChange={(e) => handleCommentChange('OceaniaC', e.target.value)}
                    placeholder="Notlarınız"
                />
                <button className='note-save-button' onClick={(e) => saveCommentsToLocalStorage()}>
                    Kaydet
                </button>
            </div>
            <div className='base-container'>
                {oceaniaCountries.map(country => {
                    return (

                        <div class='country' key={country.name.common}>


                            <div className='country-container'>
                                <h2 className='country-name'>
                                    {country.name.common}

                                </h2>

                                <img src={country.flags.png} />
                            </div>

                        </div>
                    );

                })}
            </div>
        </div>
    )
}

export default Oceania
