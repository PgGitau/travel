import './Hero.css';
// import headerimg from '../../images/maldives.webp';

function Hero() {
    return (
        <div className='hero-container'>
            <section className='headerimage'>
                <h1>Welcome to my travel vlog!</h1>
                <p>Come with me as we visit the most breathtaking destinations of the world.</p>
            </section>
            {/* <img className='headerimage' src={headerimg} alt="the maldives"></img> */}
        </div>
        
    )
}

export default Hero;