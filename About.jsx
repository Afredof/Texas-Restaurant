import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <h1 className='cmain'>About Us</h1>
            <h1 className='c1main'>Welcome to Texas Restaurant</h1>
            

            <section className="about-section">
                <h2>Our Story</h2>
                <p>
                    Founded in the heart of Texas, our restaurant has been serving authentic,
                    mouth-watering dishes inspired by the rich culinary traditions of the Lone Star State.
                    From juicy steaks to smoky BBQ ribs, we strive to bring the flavors of Texas to your table.
                </p>
            </section>

            <section className="about-section">
                <h2>Our Mission</h2>
                <p>
                    At Texas Restaurant, we aim to deliver the best dining experience by combining exceptional
                    flavors with warm hospitality. Our mission is to create a place where families and friends
                    can gather to celebrate food, life, and togetherness.
                </p>
            </section>

            <section className="gallery-section">
                <h2>Gallery</h2>
                <div className="gallery">
                    <img src="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2021-11-Arrabbiata-Sauce%2F211029-PAMU-THEKITCHN-0061" alt="Delicious Dish 1" />

                    <img src="https://texasroadhouse.com.ph/cdn/shop/products/texas-cheese-fries.webp?v=1721614663" alt="Delicious Dish 2" />

                    <img src="https://www.fsrmagazine.com/wp-content/uploads/2023/07/TR-2.jpg" alt="Restaurant Interior" />
                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/56/33/a8/exhibition-kitchen-cook.jpg" alt="Our Chefs at Work" />
                </div>
            </section>

            <section className="team-section">
                <h2>Meet Our Team</h2>
                <div className="team">
                    <div className="team-member">
                        <img src="https://www.lecoursgroup.com/wp-content/uploads/2023/12/executive-chef-careers.webp" alt="Chef John" />
                        <h3>Chef John</h3>
                        <p>Head Chef</p>
                    </div>
                    <div className="team-member">
                        <img src="data:image/jpeg;base64,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" alt="Manager Sarah" />
                        <h3>Sarah Lee</h3>
                        <p>Restaurant Manager</p>
                    </div>
                </div>
            </section>

           
        </div>
    );
};

export default About;
