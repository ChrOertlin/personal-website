import ResumeLeft from '../components/ResumeLeft/ResumeLeft'
import ResumeRight from '../components/ResumeRight/ResumeRight'

function Resume() {

  return (
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-4 bg-white mt-18">
      <ResumeLeft />
      <ResumeRight />
    </div>
  )
}

export default Resume
