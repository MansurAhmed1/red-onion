import React from 'react';
import Services from '../Services/Services';
import ControlledTabs from '../Tabs/Tabs';
import TopSection from '../TopSection/TopSection';

const Home = () => {
    return (
        <div>
            <TopSection></TopSection>
            <ControlledTabs></ControlledTabs>
            <Services></Services>
        </div>
    );
};

export default Home;