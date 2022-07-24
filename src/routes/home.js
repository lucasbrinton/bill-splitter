import { withLayout } from "../components/common/layout";
import { Link } from "react-router-dom";
import Plate from "../plate.png";
import "./style.scss";

const Home = withLayout(() => (
  <div className="home">
    <div className="home__image">
      <img src={Plate} alt="img" />
    </div>
    <div className="home__name">Bill Pay {"&"} Splitter</div>
    <div className="home__bottom-container">
      <h2 className="home__title">Just 1 Click Split Your Bill</h2>
      <p className="home__description">
        Easy way to split bills with your friends, colleague {"&"} anyone
      </p>
      <div className="home__nav">
        <Link className="home__nav-link" to="/active-bill">
          {">"}
        </Link>
      </div>
    </div>
  </div>
));

export default Home;
