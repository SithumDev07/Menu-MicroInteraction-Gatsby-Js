import React from 'react'
import Header from '../components/Header';
import ContactButton from '../components/ContactButton';

function Home() {
    return (
        <>
            <Header />
            <div className="main-container" id="main-container">
                <h1>Bleu <br /> Blanc <br /> Studio</h1>

                <ContactButton />
            </div>
        </>
    )
}

export default Home
