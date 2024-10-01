import React from 'react';
import MainDashboard from '../../pages/dashboard/mainDashboard/MainDashboard';
import Footer from '../../components/sheared/Footer';

const DashboardLayout = () => {
    return (
        <div>
        <MainDashboard/>
        <Footer/>
    </div>
    );
};

export default DashboardLayout;