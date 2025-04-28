import "./homepage.css";


export default function Homepage() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
        <img alt="Illustration of a person wearing a traditional hat and backpack standing in tall grass by a lake with rocks, looking at a large mountain with orange and purple hues during sunset, with birds flying in the sky and clouds" className="absolute inset-0 w-full h-full object-cover -z-10" height="1080" src="https://storage.googleapis.com/a1aa/image/0501a407-5ce9-4b7f-f79f-cb6f8cf285a9.jpg" width="1920"/>
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-[#2e2a5a] via-[#3a2f6e] to-[#fba94c] opacity-90 -z-5">
        </div>
       </div>
    );
}