import DisplayIcon from "../Icons/DisplayIcon";
import { useEffect } from 'react';
import { Card, InputBase } from '@material-ui/core';
import React from 'react';
import '../Trash/TrashNote.scss'
import AppBarAndDrawer from "../AppBarAndDrawer/AppBarAndDrawer";
import { trashNotes,emptyTrash } from "../../services/userServices";
import Chip from '@material-ui/core/Chip';
import {format} from 'date-fns'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DeleteIcon from "../Icons/DeleteIcon";

export default function TrashNote(props){
    const [data, setData] = React.useState([]);

    const getTrashNote = () => {
       trashNotes ().then((responce) => {
            console.log("resp ", responce.data.data)
            //setData(responce.data.data)
        }).catch((error) => {
            console.log("error is ", error)
        });
    }

    useEffect(() => {
        getTrashNote()
    }, []);

    const handleEmptyTrash = () => {
        emptyTrash ().then((responce) => {
            console.log("resp ", responce.data.data)
            //props.GetData()
             //setData(responce.data.data)
        }).catch((error) => {
            console.log("error is ", error)
        });

    }

    const handleDelete = () => {
        console.info('You clicked the delete Reminder icon.');
    };

return (
    <div>
        <AppBarAndDrawer/>
        <div className="ComponentHeader">
            <div className="Info">
                <p>Notes is Trash are deleted after 7 days</p>
            </div>
            <div className="Empty" onClick={handleEmptyTrash}>
                <b>Empty Trash</b>
            </div>
        </div>
    <div className="users">
        {data.reverse().map((note, index) => {
            return (
                <div className="dk">
                <Card id="Card"  style={{ backgroundColor: note.colour }}>
                    <InputBase multiline value={note.title}></InputBase>
                    <InputBase multiline value={note.description}></InputBase>
                    { ( note.reminder!="" )? <Chip  icon={<AccessTimeIcon fontSize="small" />}
                         label={(note.reminder)}
                        onDelete={handleDelete}
                        id="chip"
                   />:undefined}
                     { note.label!="" ? <Chip label={note.label}  onDelete={handleDelete}
                        id="chip"/>:undefined}
                        <br></br>
                    <div className="displayIcon"><DeleteIcon  Notedata={note}/></div>
                </Card>
                </div>
                )
        })}
    </div>
    </div>
)
}