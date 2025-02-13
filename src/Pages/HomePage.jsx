import React from 'react';
import profileimg from '../assets/profileimg.png';
import gitlogo from '../assets/gitlogo.png';
import linkedin from '../assets/linkedin.png';

function HomePage() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen px-4'>
            <div className='flex flex-col md:flex-row gap-10 items-center'>
                <div className="image-container">
                    <img src={profileimg} alt="Profile" className="w-64 h-64 md:w-80 md:h-80 rounded-full" />
                </div>
                <div className='text-center md:text-left'>
                    <h1 className='text-4xl md:text-6xl font-bold'>Hello!</h1>
                    <p className='mt-4 text-lg md:text-xl'>I am <b>Siddhant Das</b></p>
                    <p>I am a Backend and Frontend Developer, who loves working on Cloud Technologies and DevOps.</p>
                    <div className='flex flex-row gap-4 mt-4 justify-center md:justify-start'>
                        <a href="https://github.com/siddhantdas18" target="_blank" rel="noopener noreferrer" className="inline-block">
                            <img src={gitlogo} alt="GitHub" className="w-8 h-8 md:w-10 md:h-10" />
                        </a>
                        <a href="https://www.linkedin.com/in/siddhant-das-591a861a0/" target="_blank" rel="noopener noreferrer" className="inline-block">
                            <img src={linkedin} alt="LinkedIn" className="w-8 h-8 md:w-10 md:h-10" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;