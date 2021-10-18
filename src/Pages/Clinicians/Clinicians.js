import React from 'react';
import './Clinician.css'

const Clinicians = () => {
    return (
        <div>
            <div className="goal row">
                <h3 className="container col-md-6">It’s our goal to assist you, our family of healthcare professionals, to become the very best you can be, both professionally and personally. <br />

                    You are extraordinary, and Halcyon Rehabilitation appreciates your hard work and dedication. We are always open to hearing from you on how we can enhance our services to our residents, our partners, and our clinicians.</h3>
            </div>

            <div className="news row">
                <div className="container col-md-6 news-contents">
                    <h2 className="text-center ">Stay Informed</h2>
                    <p>
                        <h4>Soul Sense  Herald</h4>
                        The Halcyon Herald newsletter is an opportunity for our entire Halcyon Family to see what we’re doing in other facilities and states, and showcase our clinicians who are going above and beyond.
                    </p>

                    <p>
                        <h4>Wellness Works</h4>
                        Our monthly edition of “Wellness Works”, written by our Vice President of Clinical Services, offers you and your families tips on health and wellness.

                        Do you know other good therapists looking for a good place to work?
                    </p>
                </div>
            </div>

            <div className="learning row">
                <div className="container col-md-6 learning-contents">
                    <h2 className="text-center">Keep Learning</h2>

                    <p>
                        We’re committed to your growth and development as a clinician and offer two types of free continuing education as part of your benefits as a Halcyon employee.
                    </p>

                    <p>
                        <h4>CEU Courses</h4>
                        We periodically offer Halcyon proprietary/developed continuing education courses. They’re offered internally and are taught by our Corporate clinical staff. Courses and seminars are approved for CEU credit by the American Physical Therapy Association (APTA), the American Occupational Therapy Association (AOTA) and the American Speech and Hearing Association (ASHA).

                        Halcyon Rehabilitation also supports and encourages you to attend learning opportunities to increase your knowledge of advanced and aggressive rehabilitation programs through educational workshops, webinars, external seminars, facility level in-services, management training, and mentoring.
                    </p>

                    <p>
                        <h4>E-Learning</h4>
                        We have an e-learning platform where you can take mandatory CEUs for you state licenses, as well as an entire video library of additional online accredited courses. There is no limit on the number of classes you can take for enhanced learning.

                        CEU360 – Offers over 1000 hours of elite continuing education content covering the professions of Physical Therapy, Occupational Therapy, and Speech-Language Pathology, with 300+ new hours of content developed annually.
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Clinicians;