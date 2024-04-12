import Hero from "../Component/Hero/Hero";
import wave from '../assets/wave.svg'


const Home = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-116px)]">
            {/* navBar */}
            
            <Hero></Hero>
           
            <img className="absolute bottom-0 w-full" src={wave} alt="" />
        </div>
    );
};

export default Home;