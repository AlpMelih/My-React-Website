import React from 'react'
import Comments from '../components/comments'
import countriesApi from '../components/countriesApi';
function NorthAmerica() {
    const { northAmericaCountries } = countriesApi()
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
                    placeholder="Notlarınız"
                />
                <button className='note-save-button' onClick={(e) => saveCommentsToLocalStorage()}>
                    Kaydet
                </button>
            </div>
            <div >
                {northAmericaCountries.map(country => {
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

export default NorthAmerica
