import React from 'react'
import Comments from '../components/comments';
import '../components/comments.css'
import countriesApi from '../components/countriesApi';
import "../components/countries.css"

function Africa() {
    const { africaCountries } = countriesApi()
    const { comments, handleCommentChange, saveCommentsToLocalStorage } = Comments();
    return (
        <div>
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
            <div>
                <div className='base-container'>
                    {africaCountries.map(country => {
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
        </div>


    )
}

export default Africa
