import "./portrait.css";
import portraitImage from '../../assets/portrait.jpg';
function Portrait() {
  return (
    <div className="portrait">
      <img className="rounded-full w-96 h-96" src={portraitImage} alt="Portrait" />
    </div>
    );
}

export default Portrait;
