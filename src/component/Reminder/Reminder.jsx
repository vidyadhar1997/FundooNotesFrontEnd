
import DisplayIcon from "../Note/DisplayIcon";
import { useEffect } from 'react';
import { Card, InputBase } from '@material-ui/core';
import React from 'react';
import '../Reminder/Reminder.scss'
import AppBarAndDrawer from "../AppBarAndDrawer/AppBarAndDrawer";
import { getAllNoteWhoseReminderSet } from "../../services/userServices";

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
                    <div className="displayIcon"><DisplayIcon/></div>
                </Card>
                </div>
                )
        })}
    </div>
    </div>
)
}