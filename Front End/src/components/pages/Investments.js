import { React, useEffect } from 'react';
import './Investments.css';


function Investments() {
    useEffect(() => {
        document.title = "R1649 - Investments";  
    }, []);

    return (
        <>
            <div className="page-container">
                <h1 className='page-header' id='our-differentiated-approach'>OUR DIFFERENTIATED APPROACH</h1>
                <div className="page-text">
                    <p>
                        We aim to deliver strong long-term performance by investing in
                        businesses supported by favorable trends, operating in close partnership with management
                        teams that contribute responsibly to impartant sustainability objectives.
                    </p>
                    <ul className='first'>
                        <li>
                            We are thematic investors and focus on sectors and businesses with durable tailwinds that provide essential services.
                        </li>
                        <li>
                            We partner with management teams to drive operational excellence, and support our companies' growth ambitions through our capital allocation and strategic guidance.
                        </li>
                        <li>
                        We mitigate downside risk through our underwriting, structuring, and operational expertise.
                        </li>
                        <li>
                        We seek out transaction opportunities that are ‘off-the-run’ which typically lead to more attractive entry
                        valuations, and we execute with speed and certainty.
                        </li>
                        <li>
                        We believe businesses demonstrating sustainability leadership will generate more favorable investment and
                        societal outcomes, and we work with our management team partners to steward our investments accordingly.
                        </li>
                    </ul>
                </div>
                <h1 className='page-header' id='our-strategy'>OUR STRATEGY</h1>
                <div className="page-text">
                    <p>
                    We believe that past success is a great indicator of future performance. That’s why we invest in companies whose
                    leaders have a history of proven success in building a business.
                    </p>
                    <p>
                    We seek privately held companies in the large but underserved small-to-lower middle market business sector with
                    EBITDA of less than $15 million.   
                    </p>
                    <p>
                    Over the decades, our experience has taught us how to identify the paths businesses need to take to increase their
                    opportunities and reach their full potential. We partner with strong entrepreneurs whose primary limitations to
                    continued growth are long-term capital and the expertise to take their company to the next level.
                    </p>
                    <p>
                    R1649 works with these entrepreneurs at the appropriate stage of the business cycle, ready to lend our know-how and connections{/* <a className = 'invest-link' href = 'https://www.rockhillcap.com/about-us/investment-team'>our know-how and connections </a> */}
 to match resources, potential, capital and leadership. Our goal is not to take over a
                    company. It is to work with our entrepreneurial partners to learn hoe to best move the company forward -- and then follow through.
                    </p>
                    <p>
                    Our private equity firm partners with companies seeking:
                    </p>
                    <ul className='first'>
                        <li>
                        Recapitalizations
                        </li>
                        <li>
                            Financial restructuring
                        </li>
                        <li>
                        Growth initiatives
                        </li>
                        <li>
                            Growth minority capital
                        </li>
                        <li>
                            Management buyouts
                        </li>
                    </ul>
                </div>
                <h1 className='page-header' id='portfolio-highlights'>PORTFOLIO HIGHLIGHTS</h1>
                <div className="page-text">
                    <p>
                    Behind every investment there’s a story to be told. A story about investment themes and understanding market
                    drivers and tailwinds, about ESG fundamentals and business track records, and about management teams and
                    partnerships.
                    </p>
                    <p className='story'>
                    These are some of our stories. We hope they provide some depth and color and give you a better sense of how we
                    operate at R1649.
                    </p>
                    <div className="grid-container">
                        <div className="text-link">
                            <p>
                            Lineage is the world’s largest temperature-controlled
                            logistics company. With a stated mission to "feed the
                            world," the company serves as a mission-critical
                            component of the global food supply chain and is
                            focused on preserving, protecting, and optimizing the
                            distribution of food around the world.
                            </p>
                            <div className="link-container">
                                <a className = 'invest-link' href="https://stonepeak.com/portfolio-highlights/lineage-logistics"> 
                                    Read more about Lineage Logistics
                                </a>
                            </div>
                        </div>
                        <div class="image">
                            <img className = "picture" src="media_image.png"/>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div class="image">
                            <img className = "picture" src="media_image.png"/>
                        </div>
                        <div className="text-link">
                            <p>
                            Cologix is the leading private interconnection and
                            hyperscale edge platform in North America, connecting
                            businesses to more than 700+ networks and 350+ cloud
                            providers across North American data centers.
                            </p>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="text-link">
                            <p>
                            Cologix is the leading private interconnection and
                            hyperscale edge platform in North America, connecting
                            businesses to more than 700+ networks and 350+ cloud
                            providers across North American data centers.
                            </p>
                        </div>
                        <div class="image">
                            <img className = "picture" src="media_image.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Investments