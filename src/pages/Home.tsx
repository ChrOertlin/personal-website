import ImageComponent from '../components/Image/Image';
import welcome_main_image from "../assets/welcome_main.jpg";
function Home() {
  return (
    <div className="min-h-screen flex flew-col sm:flex-row">
      <div className="min-h-screen flex-1 items-center justify-center border-r border-black border">
        <div className="p-4">
          <h1 className="text-5xl font-bold text-center font-sans text-red-600 mt-4">Hi</h1>
          <p className="text-xl text-center text-gray-700 mt-2 mb-4">Feel free to wander!</p>
        </div>
      </div>
      <div className="min-h-screen flex-[3]">
        <ImageComponent ImageSource={welcome_main_image} alt="image" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
export default Home;