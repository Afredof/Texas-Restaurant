import { Link } from 'react-router-dom';
import restaurantVideo from '../../public/assets/HomePage.mp4';

import './Home.css';

const Home = () => (
  <div>
  {/* Video Background Section */}
  <div className="video-background">
    <video
      src={restaurantVideo}
      autoPlay
      loop
      muted
      playsInline
      className="background-video"
    />
  </div>
  

  {/* Content Section */}
  <div className="content">
    <h1>Welcome to Our Restaurant</h1>
    <p>Enjoy the finest dining experience.</p>
    <Link to="/menu" className="homebtn">Explore Menu</Link>
  </div>
  
  <div className='content2'>
    <div className='content2-text'>
      <h1>The legendary steak restaurant serving American cuisine from the best steaks and ribs to made-from-scratch sides & fresh-baked rolls.</h1>
    </div>
    <div className='content2-img-container'>
      <img className='content2-img' src="//texasroadhouse.com.ph/cdn/shop/files/TRH_Steak.png?v=1720151638&width=550" alt="" />
    </div>
  </div>
  
</div>
);

export default Home;
