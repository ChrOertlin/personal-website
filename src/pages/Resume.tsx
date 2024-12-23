import ResumeLeft from '../components/ResumeLeft/ResumeLeft'
import ResumeRight from '../components/ResumeRight/ResumeRight'

function Resume() {

  return (
    <div className="min-h-screen flex flew-col sm:flex-row bg-white mt-5">
      <ResumeLeft />
      <ResumeRight />
    </div>
  )
}

export default Resume
