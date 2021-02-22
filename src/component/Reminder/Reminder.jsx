import DisplayIcon from "../Icons/DisplayIcon";
import { useEffect } from 'react';
import { Card, InputBase } from '@material-ui/core';
import React from 'react';
import '../Reminder/Reminder.scss'
import AppBarAndDrawer from "../AppBarAndDrawer/AppBarAndDrawer";
import { getAllNoteWhoseReminderSet } from "../../services/userServices";
import Chip from '@material-ui/core/Chip';
import {format} from 'date-fns'
import AccessTimeIcon from '@material-ui/icons/AccessTime';

export default function Reminder(){
    const [reminder, setReminder] = React.useState([]);

    const getNoteWhoesReminder =() => {
        // let userid=parseInt(window.localStorage.getItem('userId'));
       getAllNoteWhoseReminderSet().then((responce) => {
            console.log("resp ddd ", responce.data.data)
            setReminder(responce.data.data)
        }).catch((error) => {
            console.log("error is ", error)
        });
    }
    useEffect(() => {
        getNoteWhoesReminder()
    }, []);

    const handleDelete = () => {
        console.info('You clicked the delete Reminder icon.');
    };
return (
    <div>
        <AppBarAndDrawer/>
    <div className="users">
        {reminder.reverse().map((note, index) => {
            return (
                <div className="dk">
                <Card id="Card"  style={{ backgroundColor: note.colour }}>
                    <InputBase multiline value={note.title}></InputBase>
                    <InputBase multiline value={note.description}></InputBase>
                    { ( note.reminder!="" )? <Chip  icon={<AccessTimeIcon fontSize="small" />}
                        label={format(new Date(note.reminder),"dd/MM/yyyy , hh:mm")}
                        onDelete={handleDelete}
                        id="chip"
                   />:undefined}
                     { note.label!="" ? <Chip label={note.label}  onDelete={handleDelete}
                        id="chip"/>:undefined}
                    <div className="displayIcon"><DisplayIcon Notedata={note}/></div>
                </Card>
                </div>
                )
        })}
    </div>
    </div>
)
}