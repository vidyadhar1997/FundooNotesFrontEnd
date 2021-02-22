import React, { useEffect } from 'react';
import AppBarAndDrawer from '../../component/AppBarAndDrawer/AppBarAndDrawer';
import DisplayNote from '../../component/DisplayNote/DisplayNote';
import Notes from '../../component/Note/Note';
import { displayNote } from '../../services/userServices';

export default function Home(){
  const [data, setdata] = React.useState([]);

  const getNote = () => {
      let userid=parseInt(window.localStorage.getItem('userId'));
      displayNote(userid).then((responce) => {
          console.log("resp ", responce.data.data)
          setdata(responce.data.data)
      }).catch((error) => {
          console.log("error is ", error)
      });
  }
  useEffect(() => {
      getNote()
  }, []);
  
  return(
      <div>
        <AppBarAndDrawer/>
        < Notes GetData={getNote}/>
       <DisplayNote item={data} GetData={getNote}/>
      </div>    
  );
}