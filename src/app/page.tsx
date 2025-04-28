import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#272642] text-white min-h-screen">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#e76f51] rounded-md flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 8.5L12 15L22 8.5L12 2Z" fill="white" />
            </svg>
          </div>
          <span className="text-xl font-semibold">Agency</span>
        </div>
        <div className="hidden md:flex gap-10">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#pricing" className="hover:text-gray-300">Pricing</a>
          <a href="#blog" className="hover:text-gray-300">Blog</a>
        </div>
        <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-[#272642] transition-colors">
          CONTACT
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 relative">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Content */}
          <div className="md:w-1/2">
            <p className="text-[#e76f51] font-medium mb-4">MODERN STUDIO</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              We're Help<br />
              To Build Your<br />
              Dream Project
            </h1>
            <p className="text-gray-300 mb-10 max-w-md">
              Agency provides a full service range including technical skills, design, business understanding.
            </p>
            <div className="flex gap-6 flex-wrap">
              <button className="bg-[#e76f51] px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                HOW WE WORK
              </button>
              <button className="text-white hover:underline py-3">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Content - Images & Graphics */}
          <div className="md:w-1/2 relative min-h-[400px]">
            {/* Purple Circle with Laptop */}
            <div className="absolute top-0 right-0 md:right-20 bg-purple-500 rounded-full w-40 h-40 md:w-60 md:h-60 flex items-center justify-center">
              <Image
                src="/laptop.png"
                alt="Laptop illustration"
                width={180}
                height={120}
                className="transform -rotate-12"
              />
            </div>

            {/* Orange Circle with Stars */}
            <div className="absolute top-10 right-48 md:right-96 bg-[#e76f51] rounded-full w-16 h-16 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.5 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9.5L12 2Z" fill="white" />
              </svg>
            </div>

            {/* Yellow Circle with Person */}
            <div className="absolute bottom-0 right-0 bg-yellow-400 rounded-full w-44 h-44 md:w-64 md:h-64 overflow-hidden">
              <Image
                src="/person.png"
                alt="Person smiling"
                width={250}
                height={250}
                className="object-cover"
              />
            </div>

            {/* Squiggly lines - top right */}
            <svg className="absolute top-20 right-0 w-24 h-24 text-gray-400" viewBox="0 0 100 100">
              <path d="M10,30 Q30,5 50,30 T90,30" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>

            {/* Squiggly lines - bottom left */}
            <svg className="absolute bottom-10 left-0 w-24 h-24 text-gray-400" viewBox="0 0 100 100">
              <path d="M10,50 Q30,25 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>

            {/* Document illustration - bottom */}
            <div className="absolute bottom-40 right-40 bg-white rounded-lg w-44 h-24 shadow-lg">
              <div className="flex p-3">
                <div className="w-8 h-8 rounded-full bg-[#e76f51]"></div>
                <div className="ml-3">
                  <div className="h-2 w-20 bg-gray-200 rounded mb-2"></div>
                  <div className="h-2 w-16 bg-gray-200 rounded mb-2"></div>
                  <div className="h-2 w-24 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>

            {/* Curved arrow */}
            <svg className="absolute bottom-20 right-20 w-32 h-32 text-gray-400" viewBox="0 0 100 100">
              <path d="M10,80 Q50,10 90,80" fill="none" stroke="currentColor" strokeWidth="2" />
              <polygon points="90,80 85,70 95,70" fill="currentColor" />
            </svg>
          </div>
        </div>

      </section>

      {/* Skills & Technologies Section */}
      <section id="skills" className="pt-10 relative">
        <div className="w-full text-center justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Our Tech Stack</h2>

          {/* Technology Orbit Visual */}
          <div className="relative w-full h-[300px] flex justify-center items-center">
            <div className="relative z-20 flex justify-center items-center w-[140px] h-[140px] rounded-full bg-gradient-to-tr from-[#4b2f8a] to-[#2e1a5a] shadow-[0_0_80px_20px_rgba(107,70,193,0.7)]">
              <svg aria-hidden="true" className="w-20 h-20 text-white" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewBox="0 0 24 24">
                <path d="M8 7h8M8 17h8M8 12h8 s">
                </path>
                <path d="M12 7 8 12 12 17">
                </path>
              </svg>
            </div>
            <svg aria-hidden="true" className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="450" cy="280" rx="380" ry="80" stroke="#6b46c1" strokeOpacity="0.3" strokeWidth="1">
              </ellipse>
              <ellipse cx="450" cy="280" rx="320" ry="70" stroke="#6b46c1" strokeOpacity="0.3" strokeWidth="1">
              </ellipse>
              <ellipse cx="450" cy="280" rx="260" ry="60" stroke="#6b46c1" strokeOpacity="0.3" strokeWidth="1">
              </ellipse>
            </svg>
        
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex space-x-4">
              <img alt="Figma logo colorful circle icon" className="w-8 h-8 rounded-full" height="32" src="https://storage.googleapis.com/a1aa/image/27ccee54-0b15-48b0-e841-2ae4d1d6b7f4.jpg" width="32" />
              <img alt="React logo blue circle icon" className="w-8 h-8 rounded-full" height="32" src="https://storage.googleapis.com/a1aa/image/d9571db9-c694-4553-587a-c4a6c2b44982.jpg" width="32" />
              <img alt="C programming language logo blue circle icon" className="w-8 h-8 rounded-full" height="32" src="https://storage.googleapis.com/a1aa/image/88400998-eaf7-4851-f856-9539f1c1b246.jpg" width="32" />
              <img alt="Node.js logo green circle icon" className="w-8 h-8 rounded-full" height="32" src="https://storage.googleapis.com/a1aa/image/047bea6b-98a9-493c-48d7-827768829b58.jpg" width="32" />
              <img alt="Redux logo purple circle icon" className="w-8 h-8 rounded-full" height="32" src="https://storage.googleapis.com/a1aa/image/320809d8-14da-42ca-800e-0557c6b4861c.jpg" width="32" />
              <img alt="JavaScript logo yellow circle icon" className="w-8 h-8 rounded-full" height="32" src="https://storage.googleapis.com/a1aa/image/5cf32692-2926-4b51-7d00-24b8a154012c.jpg" width="32" />
              <img alt="CSS3 logo blue circle icon" className="w-8 h-8 rounded-full" height="32" src="https://storage.googleapis.com/a1aa/image/1f22178b-579f-41e1-2dfa-7d4f249dd1b4.jpg" width="32" />
            </div>
            <div className="absolute top-[40px] left-1/2 -translate-x-1/2 flex space-x-6">
              <img alt="Adobe XD logo pink circle icon" className="w-7 h-7 rounded-full" height="28" src="https://storage.googleapis.com/a1aa/image/579fe2e0-c6c1-47d5-95e6-e5ba8b21aff6.jpg" width="28" />
              <img alt="Next.js logo dark circle icon" className="w-7 h-7 rounded-full" height="28" src="https://storage.googleapis.com/a1aa/image/df035971-c3ea-44e5-3592-dc2195962b6e.jpg" width="28" />
              <img alt="Gatsby logo white circle icon" className="w-7 h-7 rounded-full" height="28" src="https://storage.googleapis.com/a1aa/image/036a624f-6b00-4853-cfea-19c90c8f801d.jpg" width="28" />
              <img alt="Adobe Illustrator logo orange circle icon" className="w-7 h-7 rounded-full" height="28" src="https://storage.googleapis.com/a1aa/image/9379254d-e9e3-4bd8-f4b7-6ca685d749a1.jpg" width="28" />
              <img alt="Express.js logo gray circle icon" className="w-7 h-7 rounded-full" height="28" src="https://storage.googleapis.com/a1aa/image/8136c8a2-67fc-451f-968b-8df897700dc9.jpg" width="28" />
              <img alt="MongoDB logo dark circle icon" className="w-7 h-7 rounded-full" height="28" src="https://storage.googleapis.com/a1aa/image/fbc50dc2-5771-4612-fd98-777461026fea.jpg" width="28" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-[#272642] to-[#1a1730]">
        <div className="max-w-7xl mx-auto px-8">
          {/* Project 1 */}
          <div className="mb-40">
            <div className="flex flex-col md:flex-row items-start gap-10">
              {/* Left Content */}
              <div className="md:w-1/2 mt-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Example Project</h2>

                {/* Project Description Card */}
                <div className="bg-[#1e1a35] rounded-xl p-8 max-w-md">
                  <p className="text-gray-300 leading-relaxed">
                    A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
                  </p>
                </div>

              </div>

              {/* Right Content - Project Image */}
              <div className="md:w-1/2 relative">
                <div className="shadow-2xl rounded-lg overflow-hidden border border-gray-800">
                  <Image
                    src="/project1.png"
                    alt="Project mockup showing a website wireframe"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 - Reversed layout */}
          <div>
         
          </div>
        </div>

      </section>
    </div>
  );
}
