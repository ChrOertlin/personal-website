import welcomeBkg from '../../assets/welcome_bkg.jpg';

function WelcomeBkg() {
  return (
    <div className="bg-cover" style={{ backgroundImage: `url(${welcomeBkg})`, height: "800px" }}></div>
  );
}
export default WelcomeBkg;