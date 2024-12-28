import ImageComponent from '../components/Image/Image';
import welcome_main_image from "../assets/welcome_main.jpg";
function Home() {
  return (
    <div className="h-screen grid grid-cols-1 sm:grid-cols-4">
      <div className="w-full flex flex-col sm:col-span-1 items-center justify-center border-r border-black">
        <div className="p-4">
          <h1 className="text-5xl font-bold text-center font-sans text-red-600 mt-4">Hi</h1>
          <p className="text-xl text-center text-gray-700 mt-2 mb-4">Feel free to wander!</p>
        </div>
      </div>
      <div className="w-full h-full hidden sm:block sm:col-span-3">
        <div className="min-w-full h-full">
          <ImageComponent ImageSource={welcome_main_image} alt="image" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};
export default Home;