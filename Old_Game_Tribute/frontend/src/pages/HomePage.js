import React from 'react';
import VideoBackground from '../Images/Background-Section3.mp4'
let spanTexts = document.getElementsByTagName("span");
        window.onload = function () {
            for (spanTexts of spanTexts) {
                spanTexts.classList.add("active");
            }
        }

const HomePage = (props) => {
    return (
        <section class="showcase">
            <header>
                <div className="logo">
                    <h2>OLD GAME</h2>
                    <div className="back-text">
                        <span classNme="LetraT">T</span>
                        <span classNme="LetraR">R</span>
                        <span classNme="LetraI">I</span>
                        <span classNme="LetraB">B</span>
                        <span classNme="LetraU">U</span>
                        <span classNme="LetraT2">T</span>
                        <span classNme="LetraE">E</span>
                    </div>
                </div>
                <div className="toggle"></div>
            </header>
            <video src={VideoBackground} autoPlay loop muted />
            <div className="text-principal-page">
                <h2>Tribute Game</h2>
                <h3>Games that marked your childhood</h3>
                <p>Who hasn't played a video game that marked their childhood? On this page we pay tribute to some of those
                    magical games that made our childhood great with hours and hours of fun.</p>
            </div>
            <section className="hero">
                <div className="over-lay">
                    <div className="layer layer-1"></div>
                    <div className="layer layer-2"></div>
                    <div className="layer layer-3"></div>
                </div>
            </section>

        </section>
    )
}

export default HomePage;