import React from 'react';
import AppBarAndDrawer from '../../component/AppBarAndDrawer/AppBarAndDrawer';
import DisplayNote from '../../component/Note/DisplayNote';
import Notes from '../../component/Note/Note';

export default function Home(){
  return(
      <div>
        <AppBarAndDrawer />
        < Notes/>
        <DisplayNote/>
      </div>    
  );
}