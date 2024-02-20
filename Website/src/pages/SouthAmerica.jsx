import React from 'react'
import Comments from '../components/comments'
import countriesApi from '../components/countriesApi';
function SouthAmerica() {
    const { southAmericaCountries } = countriesApi()
    const { comments, handleCommentChange, saveCommentsToLocalStorage } = Comments();
    return (
        <div>
            SouthAmerica page
            <div className='Center-text'>
                Gitmek istediğiniz yerleri buraya not alabilirsiniz
            </div>
            <div className='note-container'>
                <textarea className='notes'
                    value={comments.SouthAmericaC}
                    onChange={(e) => handleCommentChange('SouthAmericaC', e.target.value)}
                    placeholder="Notlarınız"

                />
                <button className='note-save-button' onClick={(e) => saveCommentsToLocalStorage()}>
                    Kaydet
                </button>
            </div>
            <div>
                {southAmericaCountries.map(country => {
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

export default SouthAmerica
