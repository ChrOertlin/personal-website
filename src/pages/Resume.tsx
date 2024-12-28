import ResumeLeft from '../components/ResumeLeft/ResumeLeft'
import ResumeRight from '../components/ResumeRight/ResumeRight'

function Resume() {

  return (
    <div className="min-h-screen flex flex-col sm:flex-row bg-white mt-16">
      <ResumeLeft />
      <ResumeRight />
    </div>
  )
}

export default Resume
