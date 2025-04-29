'use client';

import Image from "next/image";

export default function Home() {
  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="bg-[#272642] text-white min-h-screen">

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#5a5a9e] rounded-md flex items-center justify-center pt-1">
            <Image src="/HEIF.png" alt="logo" width={32} height={32} />
          </div>
          <span className="text-xl font-semibold">FaradayBanana</span>
        </div>
        <div className="hidden md:flex gap-10">
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("skills");
            }}
            className="hover:text-gray-300"
          >
            Skills
          </a>
          <a
            href="#expertise"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("expertise");
            }}
            className="hover:text-gray-300"
          >
            Experience
          </a>
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className="hover:text-gray-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="hover:text-gray-300"
          >
            Contact
          </a>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-14 py-16 relative">
        <div className="flex flex-col md:flex-row gap-12 w-full">
          {/* Left Content */}
          <div className="md:w-1/2 z-20">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Hi, I am<br />
              Suthep Jantawee<br />
              Full Stack Developer
            </h1>
            <p className="text-gray-300 mb-10 max-w-md">
              Agency provides a full service range including technical skills, design, business understanding.
            </p>
            <div className="flex gap-6 flex-wrap">
              <button className="bg-[#e76f51] px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                Resume
              </button>
              <button className="bg-[#e76f51] px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                Github
              </button>
            </div>
          </div>

          {/* Right Content - Images & Graphics */}
          <div className="w-full mx-10 md:w-1/2 md:absolute right-0 md:min-h-[400px]">
            {/* Purple Circle with Laptop */}
            <div className="absolute top-0 right-10 md:right-20 bg-purple-500 rounded-full w-40 h-40 mt-10 sm:w-60 sm:h-60 flex items-center justify-center">
              <Image
                src="/HEIF.png"
                alt="Laptop illustration"
                width={300}
                height={120}
                className=""
              />
            </div>

            {/* Orange Circle with Stars */}
            <div className="hidden md:flex md:absolute top-25 right-48 md:right-96 bg-[#e76f51] rounded-full w-16 h-16  items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.5 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9.5L12 2Z" fill="white" />
              </svg>
            </div>

            {/* Yellow Circle with Person */}
            <div className="hidden md:flex md:absolute top-40 right-50 bg-yellow-400 rounded-full w-44 h-44 md:w-64 md:h-64 overflow-hidden">
            </div>

            {/* Squiggly lines - top right */}
            <svg className="hidden md:flex md:absolute top-20 right-0 w-24 h-24 text-gray-400" viewBox="0 0 100 100">
              <path d="M10,30 Q30,5 50,30 T90,30" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>

            {/* Squiggly lines - bottom left */}
            <svg className="hidden md:flex md:absolute  bottom-10 left-0 w-24 h-24 text-gray-400" viewBox="0 0 100 100">
              <path d="M10,50 Q30,25 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>

            {/* Document illustration - bottom */}
            <div className="hidden md:flex md:absolute  bottom-20 right-44 bg-white rounded-lg w-44 h-24 shadow-lg">
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
            <svg className="hidden md:flex md:absolute  bottom-20 right-20 w-32 h-32 text-gray-400" viewBox="0 0 100 100">
              <path d="M10,80 Q50,10 90,80" fill="none" stroke="currentColor" strokeWidth="2" />
              <polygon points="90,80 85,70 95,70" fill="currentColor" />
            </svg>
          </div>
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section id="skills" className="pt-24 relative mt-10">
        <div className="w-full text-center justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Our Tech Stack</h2>

          {/* Technology Orbit Visual */}
          <div className="relative w-full h-[400px] flex justify-center items-center">
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

      {/* Experience Section */}
      <section id="expertise" className="py-24 bg-gradient-to-b ">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Experience</h2>
          <div className="flex flex-row items-start">
            {/* Timeline */}
            <div className="hidden md:flex relative flex-col items-center mr-10" style={{ minWidth: 160 }}>
              {/* Vertical line */}
              {/* <div className="absolute left-1/2 top-8 bottom-0 w-1 bg-black" style={{ transform: 'translateX(-50%)' }}></div> */}
              {/* Year 1 */}
              <div className="flex flex-col items-center">
                <div className="w-1 h-20 bg-black"></div>
                <span className="text-black text-2xl font-medium mt-2 mb-2">2020 - 2021</span>
              </div>
              <div className="w-1 h-[200px] bg-black"></div>
              {/* Year 2 */}
              <div className="flex flex-col items-center">
                <span className="text-black text-2xl font-medium mt-2 mb-2">2022 - Current</span>
              </div>
            </div>
            {/* Experience Cards */}
            <div className="flex flex-col gap-24 w-full">
              {/* Card 1 */}
              <div className="border border-black rounded-xl p-6 bg-white text-black shadow-md max-w-3xl">
                <h3 className="text-2xl md:hidden">2020 - 2021</h3>
                <h3 className="text-2xl font-semibold mb-2 text-[#e76f51] drop-shadow-md">แข่ง A-math</h3>
                <p className="text-sm mb-1">กีฬามหาวิทยาลัยไทย (2018) กีฬามหาวิทยาลัยไทย (2018)</p>
                <p className="text-sm">เป็นกีฬาที่เกี่ยวกับการวางแผนที่มีการคำนวณเลขมาผสม โดยใช้หลักการของสมการเบื้องต้น</p>
                <p className="text-sm">เป็นกีฬาที่เกี่ยวกับการวางแผนที่มีการคำนวณเลขมาผสม โดยใช้หลักการของสมการเบื้องต้น</p>
              </div>
              {/* Card 2 */}
              <div className="border border-black rounded-xl p-8 bg-white text-black shadow-md max-w-3xl">
                <h3 className="text-2xl md:hidden">2022 - Current</h3>
                <h3 className="text-2xl font-semibold mb-2 text-[#e76f51] drop-shadow-md">แข่ง A-math</h3>
                <p className="text-sm mb-1">กีฬามหาวิทยาลัยไทย (2018) กีฬามหาวิทยาลัยไทย (2018)</p>
                <p className="text-sm">เป็นกีฬาที่เกี่ยวกับการวางแผนที่มีการคำนวณเลขมาผสม โดยใช้หลักการของสมการเบื้องต้น</p>
                <p className="text-sm">เป็นกีฬาที่เกี่ยวกับการวางแผนที่มีการคำนวณเลขมาผสม โดยใช้หลักการของสมการเบื้องต้น</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b">
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-[#272642] to-[#1a1730]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Contact</h2>
        </div>
      </section>
    </div>
  );
}
