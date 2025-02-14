import React from 'react';
import incognito from '../assets/incognito.png';
import config from '../assets/config.png';
import backend1 from '../assets/backend1.png';

// export default function ProjectPage() {
//     return (
//         <div className='flex flex-col md:grid md:grid-cols-2 items-center justify-center px-4 md:px-[5rem] gap-10'>
//             <div className='col-span-1 flex flex-col md:flex-row items-center'>
//                 <div className='flex-shrink-0'>
//                     <img src={incognito} alt="" className='h-32 w-32 md:h-40 md:w-40 object-contain max-w-full' />
//                 </div>
//                 <div className='mt-4 md:mt-0 md:ml-4'>
//                     <a href="https://github.com/SiddhantDas18/crypto-steg" target='_blank' rel='noopener noreferrer'>
//                         <h1 className='text-2xl'>CryptoSteg</h1>
//                     </a>
//                     <p>A python app where we can encrypt and decrypt messages with a password and also hide text inside an image using steganography with the help of image processing.</p>
//                 </div>
//             </div>

//             <div className='col-span-1 flex flex-col md:flex-row items-center'>
//                 <div className='flex-shrink-0'>
//                     <img src={config} alt="" className='h-32 w-32 md:h-40 md:w-60 object-contain max-w-full' />
//                 </div>
//                 <div className='mt-4 md:mt-0 md:ml-4'>
//                     <a href="https://github.com/SiddhantDas18/Colaborative-compiler" target='_blank' rel='noopener noreferrer'>
//                         <h1 className='text-2xl'>Collaborative Compiler</h1>
//                     </a>
//                     <p>A collaborative compiler made with React and WebSocket where we can collaboratively edit code in local college-level hackathons with 2-3 participants.</p>
//                 </div>
//             </div>

//             <div className='col-span-2 flex flex-col md:flex-row items-center justify-center'>
//                 <div className='flex-shrink-0'>
//                     <img src={backend1} alt="" className='h-32 w-32 md:h-40 md:w-40 object-contain max-w-full' />
//                 </div>
//                 <div className='mt-4 md:mt-0 md:ml-4'>
//                     <a href="https://github.com/SiddhantDas18/Backend-Rockpaper-" target='_blank' rel='noopener noreferrer'>
//                         <h1 className='text-2xl'>Backend Rock papaer Sciccors</h1>
//                     </a>
//                     <p>Backend rock paper sciccors game which can be played on using postman</p>
//                 </div>
//             </div>

            
//         </div>
//     );
// }

export default function ProjectPage() {
    return (
        <div className='flex flex-col md:grid md:grid-cols-2 items-center justify-center px-4 md:px-[5rem] gap-10 pb-[20vh] min-h-screen'>
            <div className='col-span-1 flex flex-col md:flex-row items-center'>
                <div className='flex-shrink-0'>
                    <img src={incognito} alt="CryptoSteg" className='h-32 w-32 md:h-40 md:w-40 object-contain max-w-full' />
                </div>
                <div className='mt-4 md:mt-0 md:ml-4'>
                    <a href="https://github.com/SiddhantDas18/crypto-steg" target='_blank' rel='noopener noreferrer'>
                        <h1 className='text-2xl font-bold'>CryptoSteg</h1>
                    </a>
                    <p>A Python app where we can encrypt and decrypt messages with a password and also hide text inside an image using steganography with the help of image processing.</p>
                </div>
            </div>

            <div className='col-span-1 flex flex-col md:flex-row items-center'>
                <div className='flex-shrink-0'>
                    <img src={config} alt="Collaborative Compiler" className='h-32 w-32 md:h-40 md:w-60 object-contain max-w-full' />
                </div>
                <div className='mt-4 md:mt-0 md:ml-4'>
                    <a href="https://github.com/SiddhantDas18/Colaborative-compiler" target='_blank' rel='noopener noreferrer'>
                        <h1 className='text-2xl font-bold'>Collaborative Compiler</h1>
                    </a>
                    <p>A collaborative compiler made with React and WebSocket where we can collaboratively edit code in local college-level hackathons with 2-3 participants.</p>
                </div>
            </div>

            <div className='col-span-2 flex flex-col md:flex-row items-center justify-center'>
                <div className='flex-shrink-0'>
                    <img src={backend1} alt="Backend Rock Paper Scissors" className='h-32 w-32 md:h-40 md:w-40 object-contain max-w-full' />
                </div>
                <div className='mt-4 md:mt-0 md:ml-4'>
                    <a href="https://github.com/SiddhantDas18/Backend-Rockpaper-" target='_blank' rel='noopener noreferrer'>
                        <h1 className='text-2xl font-bold'>Backend Rock Paper Scissors</h1>
                    </a>
                    <p>Backend rock paper scissors game which can be played using Postman.</p>
                </div>
            </div>
        </div>
    );
}

