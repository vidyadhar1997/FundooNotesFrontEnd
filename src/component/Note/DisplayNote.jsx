import React from 'react';
import { displayNote } from '../../services/userServices';
import { useEffect } from 'react';
import { Card, InputBase } from '@material-ui/core';
import '../Note/DisplayNote.scss'
import DisplayIcon from './DisplayIcon';

export default function DisplayNote() {
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

    return (
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
    )
}