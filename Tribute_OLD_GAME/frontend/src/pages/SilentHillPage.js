import React from 'react';
import '../styles/components/pages/SilentHillPage.css';
import CultHistory from '../components/layout/Cult-Section';
import ShHistory from '../components/layout/SHHistory';
import SliderCHSH from '../components/layout/SliderChSH';
import SliderSH from '../components/layout/ShMonsters';
import Footer from '../components/layout/Footer';

const SHPage = (props) => {
    return (
        <main className="portal-topSH" >
            <article className="Initial-pageSH">
                <div className="Format-Image-BoxSH">
                    <section className="fog">
                        <img className="Image-cover" src="ImagesVideos/images/Silent-Hill/Silent-hillffff.jpg" id="Image-Background"
                            alt="" />
                        <div className="fog-container">
                            <div className="fog-img fog-img-first"></div>
                            <div className="fog-img fog-img-second"></div>
                        </div>
                    </section>
                </div>
                <aside className="nav-topSh">
                    <div className="image-stick">
                        <p className="logo-position"><img src="ImagesVideos/images/Silent-Hill/Silent_Hill_Downpour.png" width="600"
                            height="200" loading="lazy" alt="" /></p>
                    </div>

                    <div className="Nav-sh">
                        <ul>
                            <li><a data-glich="THE CULT" href="#Cult-Section">THE CULT</a></li>
                            <li><a data-glich="HISTORY" href="#History-Section">HISTORY</a></li>
                            <li><a data-glich="GAMES" href="#games-Section">GAMES</a></li>
                            <li><a data-glich="CHARACTERS" href="#characters-Section">CHARACTERS</a></li>
                            <li><a data-glich="MONSTERS" href="#monsters-Section">MONSTERS</a></li>
                        </ul>
                    </div>
                </aside>
            </article>
            <article className="contents-pageSH">
                <section className="Cult-section">
                    <div className="inner-cult">
                        <h3 className="h3-section-title" data-glich2="THE CULT" id="Cult-Section">The Cult
                            <span>Flame Purifies All</span>
                        </h3>
                        <CultHistory />
                    </div>
                </section>
                <section className="history-section-sh">
                    <div className="inner-history-sh">
                        <h3 className="h3-section-title-h" data-glich2="HISTORY" id="History-Section">History
                            <span>Welcome to Silent Hill</span>
                        </h3>
                        <ShHistory />
                    </div>
                </section>
                <section className="games-section-sh">
                    <div className="inner-games-sh">
                        <h3 className="h3-section-title-h" data-glich2="GAMES" id="games-Section">Games
                            <span>Dive into Horror</span>
                        </h3>
                        <div className="SH-slider">
                            <div className="box-games-sh">
                                <span className="image-left" style={{ '--i': 1 }}><img
                                    src="Images-video/Silent-Hill/SH-shattered-memories.jpg" alt="" /></span>
                                <span className="image-left" style={{ '--i': 2 }}><img src="Images-video/Silent-Hill/SH-Origins.jpg"
                                    alt="" /></span>
                                <span className="image-left" style={{ '--i': 3 }}><img src="Images-video/Silent-Hill/SH-Downpour.jpg"
                                    alt="" /></span>
                                <span className="image-left" style={{ '--i': 4 }}><img src="Images-video/Silent-Hill/SH-Homecoming.jpg"
                                    alt="" /></span>
                                <span className="image-right" style={{ '--i': 5 }}><img src="Images-video/Silent-Hill/SH-The-Room.jpg"
                                    alt="" /></span>
                                <span className="image-right" style={{ '--i': 6 }}><img src="Images-video/Silent-Hill/SH-3.jpg"
                                    alt="" /></span>
                                <span className="image-right" style={{ '--i': 7 }}><img src="Images-video/Silent-Hill/SH-2.jpg"
                                    alt="" /></span>
                                <span className="image-right" style={{ '--i': 8 }}><img src="Images-video/Silent-Hill/SH-1.jpg"
                                    alt="" /></span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="characters-section-sh">
                    <div className="inner-characters-sh">
                        <h3 className="h3-section-title-h" data-glich2="CHARACTERS" id="characters-Section">Characters
                            <span>Actors Of This Horror</span>
                        </h3>
                        <SliderCHSH />
                    </div>
                </section>
                <section className="monsters-section-sh">
                    <div className="inner-monsters-sh">
                        <h3 className="h3-section-title-h" data-glich2="MONSTERS" id="monsters-Section">Monsters
                            <span>Creatures Of The Dark</span>
                        </h3>
                        <SliderSH />
                    </div>

                </section>
                <div className="l-firespark tranparency">
                    <div className="videoInner">
                        <video src="ImagesVideos/images/Silent-Hill/fire.mp4" autoPlay loop muted>
                        </video>
                    </div>
                </div>
                <Footer />
            </article>
        </main>
    );
}

export default SHPage;