import React from 'react'
import ImageComponent from '../Image/Image'
import portrait from '../../assets/portrait.jpg'
function Grid() {
  return (
    <div className="grid grid-cols-2 gap-4 h-screen">
    <div className="flex flex-col justify-center items-center space-y-4">
      <div className="text-center">
        <h2 className="font-serif font-bold text-red-600 text-4xl">Who is this guy?</h2>
      </div>
      <div className="text-center">
        <p className="text-gray-700 p-4">
        During my early career I pursued a PhD in Biomedical sciences with a strong focus on bioinformatics. During this period got the opportunity to develop software that helped me and others in their work to uncover biological phenomena or aid in the discovery of treatments in diseases such as cancer. 
        </p>
        <p className="text-gray-700 p-4">
        After my PhD, I joined another lab for post-doctoral studies. Soon I realised that the career path within academia is not the path I would like to continue. I decided to pivot into software development, as this was a part I enjoyed, perhaps the most, during my PhD studies. 
        </p>
        <p className="text-gray-700 p-4">
        My goal is to continue advancing in within software development while expanding my expertise in CI/CD practices and system architecture design. I am particularly interested in developing efficient, scalable, and robust systems, for cloud-based or on premise solutions. Above all, I am committed to lifelong learning and continuously improving my skills to deliver meaningful and impactful work.
        </p>
        <p className="text-gray-700 p-4">
        On the personal side of things, I am a huge fan of the outdoors. Most of my time is spend climbing some rock or, if I have a long-term project, one particular piece of rock. When I am not climbing, I am a professionally amateur photographer. It is nice to put things into perspective sometimes and capture moments. 
        </p>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <ImageComponent ImageSource={portrait} alt="Portrait" className="border rounded-full" />
    </div>
  </div>
  )
}

export default Grid
