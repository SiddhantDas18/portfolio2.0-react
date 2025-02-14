import React from "react";
import collegelogo from '../assets/collegelogo.png';

export default function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="flex flex-col gap-10 md:gap-20 justify-center items-center w-full max-w-4xl">
                <div className="flex items-center justify-center text-xl w-full md:w-3/4">
                    <p>
                        Hi, I am Siddhant. Nothing too much here because for the recruiters these are not important stuffs. So let's get into the project. You can visit my <b><a href="https://github.com/siddhantdas18" target="_blank" rel="noopener noreferrer">Github</a></b> or may <a href="https://linktr.ee/siddhant05" target="blank"><b>Linktree</b></a> to learn more about my projects, and here is my <a href="https://drive.google.com/file/d/1SUA6cvUuw0UXL-GuLKEg8LgIgkUeUy0-/view?usp=sharing" target="blank"><b>Resume</b></a>. Thank you.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-full">
                    <div>
                        <a href="https://www.abacusinstitute.org/" target="blank"><img src={collegelogo} alt="College Logo" className="h-20 w-20 md:h-30 md:w-30" /></a>
                    </div>
                    <div className="w-full md:w-3/4">
                        <p className="text-2xl">Abacus Institute Of Engineering and Management</p>
                        <p>2020 - 2024 (CGPA - 9.04)</p>
                        <p>I completed my UG Degree in <b>B.TECH</b> Computer Science and Engineering in 2024. I had an aggregated CGPA of <b>9.04</b>. In university under <b>Maulana Abul Kalam Azad University of Technology</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
}