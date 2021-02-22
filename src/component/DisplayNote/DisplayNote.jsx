import React from 'react';
import { displayNote } from '../../services/userServices';
import { useEffect } from 'react';
import { Card, InputBase } from '@material-ui/core';
import '../DisplayNote/DisplayNote.scss'
import DisplayIcon from '../Icons/DisplayIcon';
import Chip from '@material-ui/core/Chip';
import {format} from 'date-fns'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Update from '../Update/Update';


export default function DisplayNote(props) {
    // const [data, setdata] = React.useState([]);

    // const getNote = () => {
    //     let userid=parseInt(window.localStorage.getItem('userId'));
    //     displayNote(userid).then((responce) => {
    //         console.log("resp ", responce.data.data)
    //         setdata(responce.data.data)
    //     }).catch((error) => {
    //         console.log("error is ", error)
    //     });
    // }
    // useEffect(() => {
    //     getNote()
    // }, []);

    const handleDelete = () => {
        console.info('You clicked the delete Reminder icon.');
    };
   const[openDialogue,setOpenDialogue]=React.useState(false)
   const[updateD,setupdateD]=React.useState('')
    const updateCard=(values)=>{
        setOpenDialogue(true)
        setupdateD(values)
    }
    
   const  handleClose = () => {
    setOpenDialogue(false)
        console.log("hi this is close")
    }

    return (
        <div className="users">
            {props.item.reverse().filter((data) => data.isTrash === false).filter((data) => data.archive===false).map((note, index) => {
                return (
                    <div className="dk">
                    <Card id="Card"  style={{ backgroundColor: note.colour }} >
                        <InputBase multiline value={note.title} onClick={()=>updateCard(note)}></InputBase>
                        <InputBase multiline value={note.description} onClick={()=>updateCard(note)}></InputBase>`
                    <div>
                    { ( note.reminder!="" )? <Chip  icon={<AccessTimeIcon fontSize="small"  />}
                        // label={format(new Date(note.reminder),"dd/MM/yyyy, hh:mm")}
                        onDelete={handleDelete}
                        id="chip"
                   />:undefined}

                    { note.label!="" ? <Chip label={note.label}  onDelete={handleDelete}
                        id="chip"/>:undefined}
                     </div>
                        <div className="displayIcon"><DisplayIcon item={props.item} GetData={props.GetData} Notedata={note}/></div>
                    </Card>
                    <div>
                    <Update OpenCards={openDialogue} Notedata={note} updateD={updateD}  close={()=>handleClose}/>
                    </div>
                    </div>
              );
               })}
        </div>
    )
  
}