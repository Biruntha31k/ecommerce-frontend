import React from 'react';
import Banner from '../components/Banner';
import ShopByCategory from './Shopbycategory';
import UserProfile from '../components/UserProfile';

function Dashboard() {
  return (
    <div>
      <UserProfile/>
      <Banner/>
      <ShopByCategory/>
    </div>
  );
}

export default Dashboard;