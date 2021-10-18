import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className="container">

            <h1 className="text-center fw-bold my-5 title">Soul Sense <span>Blog</span></h1>

            <div className="blog1">
                <div className="blog-img">
                    <img className="img-fluid text-center" src="https://halcyonrehab.net/wp-content/uploads/2021/10/GettyImages-1297420369-scaled.jpg" alt="" />
                </div>
                <div className="blog-text">
                    <h2>Wellness Works | Spices with Powerful Health Benefits</h2>
                    <p>By <span>Andy Maron</span> | October 5, 2021</p>
                    <p>
                        Most of the spices that we know of and use today originate from the Middle East, Asia, and the Mediterranean. These regions used spices for both healing and culinary purposes dating back well before the common era.
                    </p>
                </div>
            </div>

            <div className="blog1 my-5">
                <div className="blog-img">
                    <img className="img-fluid text-center" src="https://halcyonrehab.net/wp-content/uploads/2021/08/GettyImages-1216575500-scaled.jpg" alt="" />
                </div>
                <div className="blog-text">
                    <h2>Wellness Works | How to Boost Your Body’s Natural Defenses!</h2>
                    <p>By <span>Sara Lynda</span> | August 3, 2021</p>
                    <p>
                        If you want to boost your immune health, you may wonder how to help your body fight off illnesses. Several dietary and lifestyle changes may strengthen your body's natural defenses and help you fight harmful pathogens, or disease-causing organisms.
                    </p>
                </div>
            </div>

            <div className="blog1 my-5">
                <div className="blog-img">
                    <img className="img-fluid text-center" src="https://halcyonrehab.net/wp-content/uploads/2021/07/Veggies.jpg" alt="" />
                </div>
                <div className="blog-text">
                    <h2>Wellness Works | How to Feel More Energetic in the Morning!</h2>
                    <p>By <span>Victor Op</span> | June 2, 2021

                    </p>
                    <p>
                        Morning fatigue is normal for many people. While it is important to focus on underlying causes to ensure good quality sleep, there are some ways to energize the body to help someone feel more awake in the mornings.
                    </p>
                </div>
            </div>

            <div className="blog1 my-5">
                <div className="blog-img">
                    <img className="img-fluid text-center" src="https://halcyonrehab.net/wp-content/uploads/2021/03/Goodnight-of-Sleep.jpg" alt="" />
                </div>
                <div className="blog-text">
                    <h2>Wellness Works: 11 Ways to Get a Better Night of Sleep</h2>
                    <p>By <span>Carlo Jhon</span> | March 2, 2021

                    </p>
                    <p>
                        Yawning your way through your workday? Wondering to yourself, "why can't I sleep?" According to the Centers for Disease Control and Prevention, roughly 30% of us sleep fewer than 6 hours a night. For the record, sleep experts say we should aim for somewhere between 7 and 9 hours.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;