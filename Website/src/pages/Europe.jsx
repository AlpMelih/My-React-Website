import React from 'react'
import Comments from '../components/comments';
import Navbar from '../components/Navbar';
import countriesApi from '../components/countriesApi';

function Europe() {
    const { comments, handleCommentChange, saveCommentsToLocalStorage } = Comments();
    const { europeCountries } = countriesApi();

    return (
        <div>
            Europe page
            <div className='Center-text'>
                Gitmek istediğiniz yerleri buraya not alabilirsiniz
            </div>
            <div className='note-container'>



                <textarea className='notes'
                    value={comments.EuropeC}
                    onChange={(e) => handleCommentChange('EuropeC', e.target.value)}
                    placeholder="Notlarınız"
                />
                <button className='note-save-button' onClick={(e) => saveCommentsToLocalStorage()}>
                    Kaydet
                </button>
            </div>
            <div >
                {europeCountries.map(country => {
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
    );
}

export default Europe;
