import React from 'react'
import Comments from '../components/comments';
import Navbar from '../components/Navbar';
import countriesApi from '../components/countriesApi';
import "../components/countries.css"

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
            <div className='base-container'>
                {europeCountries.map(country => {
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
    );
}

export default Europe;
