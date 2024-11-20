import './welcome_main.css';
import ImageComponent from '../Image/Image';
import welcome_main_image from "../../assets/welcome_main.jpg";
function WelcomeMain() { 
    return (
<div className="flex h-screen">
      <div className="w-1/3 flex flex-col items-center justify-center border-r border-black border">
        <div className="p-4">
        <h1 className="text-5xl font-bold text-center font-sans text-red-600 mt-4">Hi</h1>
        <p className="text-xl text-center text-gray-700 mt-2 mb-4">Feel free to wander!</p>
        </div>
      </div>
      <div className="w-2/3 h-full">
        <ImageComponent ImageSource={welcome_main_image} alt="Image" />
      </div>
    </div>
      );
};
export default WelcomeMain;