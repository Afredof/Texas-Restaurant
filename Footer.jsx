// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Footer.css';
// import { FaFacebook } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa6";


// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="container">
//                 {/* Column 1 */}
//                 {/* <div className="column">
//                     <h3>About Us</h3>
//                     <p>Learn more about our company and mission to deliver quality services to our customers.</p>
//                 </div> */}

//                 {/* Column 2 */}
//                 <div className="column2">
//                     <h3>Quick Links</h3>
//                     <ul>
//                         <li><Link to="/">Home</Link></li>
//                         <li><Link to="/about">About</Link></li>
//                         <li><Link to="/menu">Menu</Link></li>
//                         <li><Link to="/cart">Cart</Link></li>
//                         <li><Link to="/contact">Contact Us</Link></li>

//                     </ul>
//                 </div>
//                 {/* Column2 */}
//                 <div className='column2main'>
//                     <h3 className='locations'>
//                         <div className="flex" style="flex-direction:column;">
//                             <a href="" >S' Maison</a>
//                             <a href="" >Uptown</a>
//                             <a href="" >Robinsons Manila</a>
//                             <a href="" >Greenbelt</a>
//                             <a href="" >Evia</a>
//                             <a href="" >Shangri La Plaza</a>
//                             <a href="" >RP Magnolia</a>
//                             <a href="" >Okada</a>
//                         </div>
//                     </h3>
//                 </div>

//                 {/* Column 3 */}
//                 <div className="column3">
//                     <h3 className='followushead'>Follow Us</h3>
//                     <div className="social-icons">
//                         <a href="https://www.facebook.com/TexasRoadhousePH/?ref=page_internal" target="_blank" rel="noopener noreferrer" ><FaFacebook /> &nbsp;Facebook</a>
//                         <a href="https://www.instagram.com/TexasRoadhousePH/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram />&nbsp;Instagram</a>
//                     </div>
//                 </div>
//             </div>
//             <div className="copyright">
//                 &copy; Texas Restauarant
//             </div>
//         </footer>
//     );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                {/* Column 2 */}
                <div className="column2">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Column2main */}
                <div className="column2main">
                    <h3 className="locations">Our Locations</h3>
                    <div className="locationdetails" style={{ flexDirection: "column" }}>
                        <a href="https://www.google.com/maps/place/Texas+Roadhouse/@14.532227,120.980286,16z/data=!4m6!3m5!1s0x3397cbf9699144e9:0x9bf313382eb9f15e!8m2!3d14.5322265!4d120.9802856!16s%2Fg%2F11g6bhwfdy?hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" className='locationmain'>S' Maison</a> <br />
                        <a href="https://www.google.com/maps?ll=14.556642,121.053735&z=18&t=m&hl=en&gl=AE&mapclient=embed&cid=10744548286858398530" className='locationmain'>Uptown</a> <br />
                        <a href="https://www.google.com/maps/place/Texas+Roadhouse+%7C+Robinsons+Manila/@14.574931,120.984073,16z/data=!4m6!3m5!1s0x3397cb32067eaa31:0x1126266abe9d89d5!8m2!3d14.5749309!4d120.984073!16s%2Fg%2F11flftt3hp?hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" className='locationmain'>Robinsons Manila</a> <br />
                        <a href="https://www.google.com/maps?ll=14.553029,121.020486&z=16&t=m&hl=en&gl=AE&mapclient=embed&cid=4118943623535933384" className='locationmain'>Greenbelt</a> <br />
                        <a href="https://www.google.com/maps/place/Texas+Roadhouse/@14.376323,121.011187,16z/data=!4m6!3m5!1s0x3397d1569379afdb:0xcabfc079163c20fb!8m2!3d14.3763227!4d121.0111869!16s%2Fg%2F11hdy4gzrn?hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" className='locationmain'>Evia</a> <br />
                        <a href="https://www.google.com/maps/place/Texas+Roadhouse+Shangri-La+Plaza/@14.580633,121.055913,16z/data=!4m6!3m5!1s0x3397c9f744216735:0xf4491cb83c0d8efd!8m2!3d14.5806328!4d121.0559125!16s%2Fg%2F11s2jbm28n?hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" className='locationmain'>Shangri La Plaza</a> <br />
                    </div>
                </div>

                {/* Column 3 */}
                <div className="column3">
                    <h3 className="followushead">Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/TexasRoadhousePH/?ref=page_internal" target="_blank" rel="noopener noreferrer">
                            <FaFacebook /> &nbsp;Facebook
                        </a>
                        <a href="https://www.instagram.com/TexasRoadhousePH/?hl=en" target="_blank" rel="noopener noreferrer">
                            <FaInstagram /> &nbsp;Instagram
                        </a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                &copy; Texas Restaurant
            </div>
        </footer>
    );
};

export default Footer;
