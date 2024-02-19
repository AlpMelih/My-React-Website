import React from 'react'
import './home.css';
import { Link } from 'react-router-dom'
import Avrupafoto from '../assets/avrupa.jpg'
import AsyaFoto from '../assets/asya.jpg';
import AfricaFoto from '../assets/afrika.jpg';
import KuzeyAmerika from '../assets/kuzeyamerika.jpg';
import GuneyAmerika from '../assets/guneyamerika.jpg';
import Okyanusya from '../assets/okyanusya.jpg'

function Home() {
    return (
        <div>
            <div id='bg'>
                <div>
                    <h1>GEZİNTİ</h1>
                    <h2>Gezinti sitesine hoş geldiniz bu sitede farklı kıtalarda gezilecek yerleri keşfedebilirsiniz
                    </h2>
                    <div className='container'>
                        <div className='card-container'>

                            <Link to='./europe' > <img className='card-img' src={Avrupafoto}></img>
                            </Link>
                            <Link to="/europe" className='card-title'>Avrupa</Link>
                            <p className='card-details'>Avrupa, tarihi yapıları, zengin kültürel mirası, doğal güzellikleri ve çeşitli aktiviteleriyle dünya çapında turistlerin ilgisini çeken, her yıl milyonlarca ziyaretçiye ev sahipliği yapan ve geniş bir turizm altyapısına sahip olan önemli bir kıtadır.
                            </p>
                        </div>
                        {/*----*/}
                        <div className='card-container'>
                            <Link to='./asia' > <img className='card-img' src={AsyaFoto}></img>
                            </Link>
                            <Link to="/asia" className='card-title'>Asya</Link>
                            <p className='card-details'>Asya, muhteşem tarihi zenginlikleri, mistik atmosferi, farklı kültürleri ve gelenekleriyle birçok turistin hayallerini süsleyen, her köşesinde benzersiz deneyimler sunan, dünya çapında popüler turistik destinasyonlara ev sahipliği yapan ve her yıl milyonlarca gezginin akınına uğrayan, keşfedilmeyi bekleyen büyüleyici bir kıtadır. Göz kamaştırıcı tapınakları, renkli pazarları, nefes kesici manzaraları, gurme mutfağı ve etkileyici doğal güzellikleriyle Asya, turizm tutkunları için sonsuz bir keşif ve macera dolu bir dünyadır.
                            </p>
                        </div>
                        {/*----*/}

                        <div className='card-container'>
                            <Link to='./africa' > <img className='card-img' src={AfricaFoto}></img>
                            </Link>
                            <Link to="/africa" className='card-title'>Afrika</Link>
                            <p className='card-details'>
                                Afrika, eşsiz doğal güzelliklerinin yanı sıra zengin tarihi ve kültürel mirasıyla turistler için keşfedilmeyi bekleyen bir kıta olup, safarilerde yaban hayatı izleme, tropikal adalarda dinlenme, tarihi eserleri ziyaret etme, renkli pazarlarda alışveriş yapma ve çeşitli macera sporlarını deneyimleme gibi geniş bir yelpazede unutulmaz deneyimler sunmaktadır.
                            </p>
                            {/*Alp Melih İlgin*/}
                        </div>
                        {/*----*/}



                    </div>
                    <div className='container'>

                        <div className='card-container' id='north-america-container'>
                            <Link to="/north-america"><img className='card-img' src={KuzeyAmerika}></img></Link>
                            <Link to='/north-america' className='card-title'> Kuzey Amerika</Link>
                            <p className='card-details'>
                                Kuzey Amerika, muazzam bir coğrafi çeşitlilik sunan geniş arazileri, eşsiz doğal güzellikleri, çarpıcı manzaralarıyla ünlü ulusal parkları, tarihi ve kültürel zenginlikleriyle birlikte, dinamik şehirleri, müzeleri, sanat galerileri, alışveriş olanakları ve eğlence mekanlarıyla gezginleri büyüleyen, keşfedilmeyi bekleyen bir kıtadır. Turistler, Kuzey Amerika'da Alaska'nın buzullarıyla kaplı dağlarından, Kanada'nın ormanlık bölgelerine, ABD'nin büyüleyici batı sahilindeki kanyonlara, Meksika'nın antik Maya kalıntılarına ve Karayip Adaları'nın sıcak kumsallarına kadar geniş bir yelpazede keşfedecekleri benzersiz deneyimlerle karşılaşırlar.
                            </p></div>
                        {/*----*/}

                        <div className='card-container'>
                            <Link to='/south-america' ><img src={GuneyAmerika} className='card-img'></img></Link>
                            <Link to='/south-america' className='card-title'>Güney Amerika</Link>
                            <p className='card-details'>
                                Güney Amerika, And Dağları’nın zirvelerinden Amazon Nehri’nin sularına, Machu Picchu’nun antik kalıntılarından Rio de Janeiro’nun hareketli plajlarına, Patagonya’nın vahşi doğasından Buenos Aires’in canlı tango sahnelerine kadar, zengin bir tarih, çeşitli bir kültür, nefes kesici manzaralar ve sıcakkanlı insanlarla dolu, keşfedilmeyi bekleyen bir kıta.
                            </p>
                            {/*----*/}

                        </div>


                        <div className='card-container' id='okyanusya-container'>

                            <Link to='./ocenia' > <img className='card-img' src={Okyanusya}></img>
                            </Link>
                            <Link to="/ocenia" className='card-title'>Okyanusya</Link>
                            <p className='card-details'>
                                Okyanusya, göz alıcı doğal güzellikleri, ikonik manzaraları, eşsiz vahşi yaşamı, berrak sulardaki adaları ve zengin kültürel çeşitliliğiyle turistler için keşfedilmeyi bekleyen bir cennet; Avustralya'nın Sydney'inin ikonik Opera Evi ve Harbour Köprüsü, Büyük Bariyer Resifi'nin muhteşemliği, Melbourne'un canlı kültürel sahnesi, Yeni Zelanda'nın Fiordland Ulusal Parkı ve Milford Sound gibi doğa harikaları, Fiji Adaları'nın bembeyaz kumsalları ve berrak suları, Tahiti'nin egzotik güzelliği ve Fransız Polinezyası'nın mistik cazibesiyle her türlü seyahat zevkine hitap eden bir kıtadır.
                            </p>
                        </div>

                    </div>




                </div>
            </div>

        </div>
    )
}

export default Home
