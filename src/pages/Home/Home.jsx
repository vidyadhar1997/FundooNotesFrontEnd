import React from 'react';
import AppBarAndDrawer from '../../component/AppBarAndDrawer/AppBarAndDrawer';
import Notes from '../../component/Note/Note';

export default function Home(){
  return(
      <div>
        <AppBarAndDrawer />
        < Notes/>
      </div>    
  );
}