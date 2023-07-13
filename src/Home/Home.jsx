import React from 'react'
import Banner from './Banner';
import NewArrivals from './NewArrivals';
import TopHeadlines from '../Components/TopHeadlines';

function Home() {
    return (
        <div>
            <TopHeadlines></TopHeadlines>
            <Banner></Banner>
            <NewArrivals></NewArrivals>
        </div>
    )
}

export default Home