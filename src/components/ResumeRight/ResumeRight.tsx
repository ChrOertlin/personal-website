function ResumeRight() {
    return (
        <div className="min-h-screen flex-[3]">
            <main className='flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14' >

                <div className="space-y-5">
                    <h1 className="text-2xl font-bold md:text-4xl">Profile</h1>
                    <p className="text-gray-500">
                    I am a software developer and data analyst with a focus on creating applications for, but not limited to, life sciences. 
                    My goal is to continue advancing in this field while expanding my expertise in CI/CD practices and system architecture design. 
                    I am particularly interested in developing efficient, scalable, and robust systems, especially for cloud-based solutions. 
                    Above all, I am committed to lifelong learning and continuously improving my skills to deliver meaningful and impactful work.
                    </p>
                </div>

                <div className="space-y-5">
                    <h1 className="text-2xl font-bold md:text-4xl">Experience</h1>
                    
                    <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-bold">Software Developer</h2>
                                <p className="text-gray-500">Self-employed, Stockholm, Sweden</p>
                                <p className="text-gray-500">2024 - present</p>
                            </div>
                            <p className="text-gray-500">
                                I am currently working on various side projects to expand my skills in software development and system infrastructure.
                                The projects range from web developement to hosting kubernetes clusters on Raspberry Pi's.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-bold">Software Developer</h2>
                                <p className="text-gray-500">Clinical Genomics, Stockholm, Sweden</p>
                                <p className="text-gray-500">2022 - present</p>
                            </div>
                            <p className="text-gray-500">
                                Developing backend services for the organisation's clinical genomics platform in Python.
                                Setting up APIs and microservices using Flask and FastAPI. Managing SQL and MongoDB databases.
                                Our infrastructure consists of a HPC and multiple VMs.
                                We use a CI/CD pipeline consisting of GitHub Actions and Docker.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-bold">Post-doctoral Researcher</h2>
                                <p className="text-gray-500">Karolinska Institutet, Stockholm, Sweden</p>
                                <p className="text-gray-500">2021 - 2022</p>
                            </div>
                            <p className="text-gray-500">
                                During my post-doc I was the lead of projects studying immune cells in pediatric lymphomas 
                                and under the influence of microgravity. 
                                The work involved analysis of single-cell RNA-seq and RNA-seq data.
                                I also gained experience in ethics and GPDR compliance using patient data.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-bold">PhD Student</h2>
                                <p className="text-gray-500">Karolinska Institutet, Stockholm, Sweden</p>
                                <p className="text-gray-500">2016 - 2021</p>
                            </div>
                            <p className="text-gray-500">
                                During my PhD I developed the anota2seq package for the Bioconductor project.
                                The package is used to analyse translational efficiency and differential translation from polysome profiling and ribosome profiling data.
                                Furthermore I analysed polysome and ribosome profiling data in various biological 
                                contexts ranging from cancer to immune cells.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-bold">Research Assistant</h2>
                                <p className="text-gray-500">Karolinska Institutet, Stockholm, Sweden</p>
                                <p className="text-gray-500">2016 - 2016</p>
                            </div>
                            <p className="text-gray-500">
                                During my time as research assistant I working on several projects that lead up to my PhD.
                            </p>
                        </div>
                </div>
                <div className="space-y-5">
                    <h1 className="text-2xl font-bold md:text-4xl">Education</h1>

                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-bold">Doctor Of Philosophy, Medical Sciences</h2>
                                <p className="text-gray-500">Karolinska Institutet, Stockholm, Sweden</p>
                                <p className="text-gray-500">2021</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-bold">MSc Bioinformatics</h2>
                                <p className="text-gray-500">Wageningen University, Wagening, The Netherlands</p>
                                <p className="text-gray-500">2015</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-bold">BSc Biomedical sciences</h2>
                                <p className="text-gray-500">Maastricht University, Maastricht, The Netherlands</p>
                                <p className="text-gray-500">2013</p>
                            </div>
                        </div>
                </div>
            </main>
        </div>
    )
}

export default ResumeRight
