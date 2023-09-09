import { React, useEffect } from 'react';
import './Mediapage.css';
import{ Link } from 'react-router-dom';
import '../MediaHeroSection';
import MediaHeroSection from '../MediaHeroSection';
import MediaItem from '../MediaItem';

function Mediapage() {
    useEffect(() => {
        document.title = "R1649 - Media";  
    }, []);

    return (
        <>
            <MediaHeroSection/>
            <div className='page-container'>
                <div className='links-container'>
                    <h3 style={{textAlign: 'center'}}>
                        No News Yet!
                    </h3>
                    {/* <MediaItem
                        pagelink='https://www.rockhillcap.com/rock-hill-news/kv-power-announces-recapitalization-and-subsequent-acquisition-of-station-electric'
                        title='KV POWER ANNOUNCES RECAPITALIZATION AND SUBSEQUENT ACQUISITION OF STATION ELECTRIC'
                        date='January 19, 2023'>
                    </MediaItem>
                    <MediaItem
                        pagelink='https://www.rockhillcap.com/rock-hill-news/park-energy-services-announces-its-acquisition-of-great-texas-compression'
                        title='PARK ENERGY SERVICES ANNOUNCES ITS ACQUISITION OF GREAT TEXAS COMPRESSION'
                        date='May 20, 2022'>
                    </MediaItem>
                    <MediaItem
                        pagelink='https://www.rockhillcap.com/rock-hill-news/park-energy-services-announces-its-acquisition-of-additional-compression-units'
                        title='PARK ENERGY SERVICES ANNOUNCES ITS ACQUISITION OF ADDITIONAL COMPRESSION UNITS'
                        date='July 26, 2021'>
                    </MediaItem>
                    <MediaItem
                        pagelink='https://www.rockhillcap.com/rock-hill-news/rock-hill-capital-group-announces-the-sale-of-big-city-access-to-brandsafway'
                        title='ROCK HILL CAPITAL GROUP ANNOUNCES THE SALE OF BIG CITY ACCESS TO BRANDSAFWAY'
                        date='December 02, 2020'>
                    </MediaItem>
                    <MediaItem
                        pagelink='https://www.rockhillcap.com/rock-hill-news/park-energy-services-appoints-tim-knox-as-president-and-coo'
                        title='PARK ENERGY SERVICES APPOINTS TIM KNOX AS PRESIDENT AND COO'
                        date='August 20, 2019'>
                    </MediaItem>
                    <MediaItem
                        pagelink='https://www.rockhillcap.com/rock-hill-news/jp-services-announces-launch-of-nitrogen-services-division'
                        title='JP SERVICES ANNOUNCES LAUNCH OF NITROGEN SERVICES DIVISION'
                        date='July 16, 2019'>
                    </MediaItem>
                    <MediaItem
                        pagelink='https://www.rockhillcap.com/rock-hill-news/jp-services-announces-launch-of-water-management-division-1'
                        title='JP SERVICES ANNOUNCES LAUNCH OF WATER MANAGEMENT DIVISION'
                        date='June 04, 2019'>
                    </MediaItem>
                    <MediaItem
                        pagelink='https://www.rockhillcap.com/rock-hill-news/duracoatings-earns-easa-145-repair-station-certification'
                        title='DURACOATINGS EARNS EASA 145 REPAIR STATION CERTIFICATION'
                        date='April 02, 2019'>
                    </MediaItem>
                    <MediaItem
                        pagelink='https://www.rockhillcap.com/rock-hill-news/rock-hill-capital-group-announces-investment-in-kvp-holdings-llc'
                        title='ROCK HILL CAPITAL GROUP ANNOUNCES INVESTMENT IN KVP HOLDINGS, LLC'
                        date='December 19, 2018'>
                    </MediaItem>
                    <MediaItem
                        pagelink='https://www.rockhillcap.com/rock-hill-news/park-energy-services-announces-its-acquisition-of-midcon-compression'
                        title='PARK ENERGY SERVICES ANNOUNCES ITS ACQUISITION OF MIDCON COMPRESSION'
                        date='October 31, 2018'>
                    </MediaItem>
                    <Link to="/">
                        <button type="button" class="media-button">
                            READ MORE
                        </button>  
                    </Link> */}
                </div>
            </div>
        </>
    )
}

export default Mediapage

