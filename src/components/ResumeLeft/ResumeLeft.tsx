import ImageComponent from '../../components/Image/Image'
import portrait from '../../assets/portrait.jpg'
import { BiCurrentLocation, BiData, BiEnvelope, BiLogoDocker, BiLogoGithub, BiLogoLinkedin, BiLogoPython, BiLogoReact, BiPhone } from 'react-icons/bi'
import { GiComputing, GiGameConsole, GiMountainClimbing, GiPhotoCamera } from 'react-icons/gi'

function ResumeLeft() {
    return (
        <div className="min-h-screen flex-1 sm:grid-cols-1">

            <div className="flex flex-col gap-5">

                <div className="flex flex-col gap-5 justify-center items-center">
                    <ImageComponent ImageSource={portrait} alt="Portrait" className="w-32 rounded-full" />
                    <div className="text-center space-y-1">
                        <h1 className="text-2xl font-bold">Christian Oertlin</h1>
                        <p className="text-lg text-gray-500">Software Developer</p>
                    </div >
                </div>
                <div className= "flex flex-col items-start justify-start gap-5 border-b p-5">
                    <ul className = "space-y-3">
                        <li className = "text-lg font-bold">Contact</li>
                        <li className='flex items-center gap-2'>
                            <BiPhone className="text-xl"/>
                            <span>+46 (0)7 60 65 99 82</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <BiEnvelope className="text-xl"/>
                            <span>c.oertlin@gmail.com</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <BiCurrentLocation className="text-xl"/>
                            <span>Stockholm, Sweden</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <BiLogoGithub className="text-xl"/>
                            <a href="https://github.com/ChrOertlin">
                            <span>@ChrOertlin</span>
                            </a>
                        </li>
                        <li className='flex items-center gap-2'>
                            <BiLogoLinkedin className="text-xl"/>
                            <a href="https://se.linkedin.com/in/christian-oertlin-phd-96828993">
                            <span>christian-oertlin-phd</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
                    <ul className = "space-y-3">
                        <li className = "text-lg font-bold">Skills</li>
                        <li className="flex items-center gap-2">
                            <BiLogoPython className="text-xl"/>
                            <span>Python</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <BiData className="text-xl"/>
                            <span>SQL</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <BiLogoReact className="text-xl"/>
                            <span>React</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <BiLogoDocker className="text-xl"/>
                            <span>Docker</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <BiLogoGithub className="text-xl"/>
                            <span>Version Control</span>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
                    <ul className = "space-y-3">
                        <li className = "text-lg font-bold">Hobbies</li>
                        <li className="flex items-center gap-2">
                            <GiMountainClimbing className="text-xl"/>
                            <span>Climbing</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <GiGameConsole className="text-xl"/>
                            <span>Gaming</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <GiPhotoCamera className='text-xl'/>
                            <span>Photography</span>
                        </li>
                        <li className="flex items-center gap-2">
                        <GiComputing className="text-xl"/>
                            <span>Coding</span>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
                    <ul className = "space-y-3">
                        <li className = "text-lg font-bold">Languages</li>
                        <li className="flex items-center gap-2">
                            <span>English; Fluent</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span>German; Fluent</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span>Dutch; Fluent</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span>Swedish; Intermediate</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ResumeLeft
