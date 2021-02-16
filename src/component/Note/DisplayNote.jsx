import React from 'react';
import { displayNote } from '../../services/userServices';
import { useEffect } from 'react';
import { Card, InputBase } from '@material-ui/core';
import '../Note/DisplayNote.scss'

export default function DisplayNote(){
    const [data, setdata] = React.useState([]); 

    const getNote=() => {
        displayNote().then((responce) => {
            console.log("resp ",responce.data.data)
           setdata(responce.data.data)
    }) .catch((error) => {
       console.log("error is ",error)
      });
    }
    useEffect(() => {
        getNote()
    }, []);
    
    return(
       <div className="users">
        {data.map((note,index) => {
            return(
              <Card id="Card">
                  <InputBase multiline value={note.title}></InputBase>
                  <InputBase multiline value={note.description}></InputBase>
               </Card>  
            )
        })}
      </div>
    )
}