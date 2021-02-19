import DisplayIcon from "../Icons/DisplayIcon";
import { useEffect } from 'react';
import { Card, InputBase } from '@material-ui/core';
import React from 'react';
import '../Archive/ArchiveNote.scss'
import AppBarAndDrawer from "../AppBarAndDrawer/AppBarAndDrawer";
import { trashNotes } from "../../services/userServices";

export default function TrashNote(){
    const [data, setData] = React.useState([]);

    const getTrashNote = () => {
       trashNotes ().then((responce) => {
            console.log("resp ", responce.data.data)
            setData(responce.data.data)
        }).catch((error) => {
            console.log("error is ", error)
        });
    }
    useEffect(() => {
        getTrashNote()
    }, []);

return (
    <div>
        <AppBarAndDrawer/>
    <div className="users">
        {data.reverse().map((note, index) => {
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