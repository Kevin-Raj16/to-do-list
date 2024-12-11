

const Footer = () => {
  return (
    <div className='text-[#9290C3] w-screen p-2 fixed bottom-0 bg-[#070F2B] flex justify-evenly max-sm:flex-col max-sm:justify-center max-sm:items-center '>
        <h2 className='cursor-default font-antiquas'>Created By : Kevin Raj</h2>
        <div className="social flex gap-2 font-antiquas">
            <a href="https://github.com/Kevin-Raj16" className=' hover:text-[#E4CCFF] active:text-[#5E2F9C]'>GitHub</a><p>|</p>
            <a href="https://www.linkedin.com/in/kevin-raj-36853a287" className=' hover:text-[#E4CCFF] active:text-[#5E2F9C]'>LinkedIn</a>
        </div>
    </div>
  )
}

export default Footer