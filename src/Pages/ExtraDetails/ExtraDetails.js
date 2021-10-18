import React from 'react';
import './ExtraDetails.css'

const ExtraDetails = () => {
    return (
        <div>
            <div className="container my-5 d-flex details ">
                <div className="patients text-center">
                    <div className="patients-img">
                        <img className="img-fluid" src="https://halcyonrehab.net/wp-content/uploads/2020/11/patients.png" alt="" />
                    </div>
                    <h2>PATIENTS</h2>
                    <p>Learn about our trusted care.</p>
                    <button className="homeBtn">Learn more</button>
                </div>

                <div className="patients text-center">
                    <div className="patients-img">
                        <img className="img-fluid" src="https://halcyonrehab.net/wp-content/uploads/2020/11/clinicians.png" alt="" />
                    </div>
                    <h2>CLINICIANS
                    </h2>
                    <p>Grow with us as an employee.</p>
                    <button className="homeBtn">Learn more</button>
                </div>

                <div className="patients text-center">
                    <div className="patients-img">
                        <img className="img-fluid" src="https://halcyonrehab.net/wp-content/uploads/2020/11/partners.png" alt="" />
                    </div>
                    <h2>PARTNERS
                    </h2>
                    <p>Work with us for better patient care.</p>
                    <button className="homeBtn">Learn more</button>
                </div>
            </div>

            <div className="atHome row">
                <div className="p-5 col-md-6 text-center">
                    <h2>Soul Sense <br /> <span>AT HOME</span></h2>
                    <p>Physical, Occupational, and Speech therapy services in the convenience of your own home. In-person and TeleTherapy services available.</p>
                    <button className="atHomeBtn">LEARN MORE</button>
                </div>
            </div>

            <div className="welcome row">
                <div className="p-5 col-md-6 text-center">
                    <h2>Welcome to Soul Sense.</h2>
                    <p>We’re a therapist-driven provider dedicated to exceeding expectations for our residents, patients, employees, and business associates. Our professional therapists deliver compassion, comfort and healing with personalized attention and individualized treatment in every setting.</p>

                </div>
            </div>
        </div>
    );
};

export default ExtraDetails;