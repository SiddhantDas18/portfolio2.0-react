import react from "react"
import collegelogo from '../assets/collegelogo.png';

export default function AboutPage() {
    return <div className="h- items-center justify-center">

        <div className="flex flex-col gap-20 justify-center items-center">

            <div className="flex items-center justify-center text-xl w-190">
                <p>Hi , I am Siddhant. Nothing too much here because for the recruiters these are not important stuffs. So lets get into project. You can visit my <b><a href="https://github.com/siddhantdas18" target="blank">Github</a></b> to learn more about my projects. Thank you.</p>
            </div>

            <div className="flex gap-10 items-center justify-center">
                <div>
                    <a href=""><img src={collegelogo} alt="" srcset="" className="h-30 w-30" /></a>
                </div>
                <div className="w-130">
                    <p className="text-2xl">Abacus Institute Of Engineering and Management</p>
                    <p>2020 - 2024 (CGPA - 9.04)</p>
                    <p>I completed my UG Degree in <b>B.TECH</b> Computer Science and Engineering on 2024. I had an aggregated CGPA of <b>9.04</b>. In university under <b>Maulana Abul Kalam Azad University of Technology</b></p>

                </div>

            </div>


        </div>
    </div>
}