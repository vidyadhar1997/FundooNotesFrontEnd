import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Card from '@material-ui/core/Card';
import React from 'react';
import '../Note/Notes.scss'
import { TextField } from '@material-ui/core'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import IconButton from '@material-ui/core/IconButton';
import Pin from "../../assets/push.svg"
import Push from "../../assets/pin.svg"
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import { Tooltip } from "@material-ui/core";
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import { Button } from '@material-ui/core';
import { createNote } from "../../services/userServices";

export default function Notes() {

    const [card, setCard] = React.useState(false);
    const [title, settitle] = React.useState('');
    const [Note, setNote] = React.useState('');
    const onHandleClick = () => {
        setCard(false);
    }

    const inactiveNote = () => {
        setCard(true)
    }
    const NoteHandler = (e) => {
        setNote(e.target.value)
        console.log("Note ", Note)
    }
    const titleHandler = (e) => {
        settitle(e.target.value)
        console.log("title ", title)
    }

    const [pin, unpin] = React.useState(false);
    const pins = () => {
        if (pin === false) {
            unpin(true);
            console.log("Note pinned");
        }
        else {
            unpin(false);
            console.log("Note unpinned");
        }
    }

    const [archive, unArchive] = React.useState(false);
    const archives = () => {
        if (archive === false) {
            unArchive(true);
            console.log("Note Archive");
        }
        else {
            unArchive(false);
            console.log("Note unArchive");
        }
    }

    const [reminders, setReminders] = React.useState(false);
    const reminder = () => {
        setReminders(!reminders)
    }

    const createNotes = () => {
        if (title.length > 0 || Note.length > 0) {
            const noteData = {
                title: title,
                description: Note,
                pin: pin,
                archive: archive,
                userId: 3,
            }
            createNote(noteData).then((responce) => {
                console.log("new notes created successfully", responce)
                setCard(!card)
            }).catch((error) => {
                console.log("error is ", error)
            })
        }
        else {
            console.log("title and discription should not be empty")
        }
    }
    return (
        <ClickAwayListener onClickAway={onHandleClick}>
            <div className="mainCard">
                {card ? <Card id="active" >
                    <div className="textFieldContainer">
                        <TextField
                            className="textfield"
                            fullWidth
                            placeholder='Title'
                            textdecaration='none'
                            onChange={titleHandler}
                            multiline
                            InputProps={{ disableUnderline: true }}
                        />
                        {!pin ? <Tooltip title="Pin note"><IconButton><img id="pin" src={Pin} onClick={pins} /> </IconButton></Tooltip> : <Tooltip title="Unpin note"><IconButton><img id="pin" src={Push} onClick={pins} /> </IconButton></Tooltip>}
                    </div>
                    <div className="textFieldContainer">
                        <TextField
                            className="textfield"
                            fullWidth
                            placeholder='Take a note...'
                            textdecaration='none'
                            onChange={NoteHandler}
                            multiline
                            InputProps={{ disableUnderline: true }}
                        />
                    </div>
                    <div className="icon">
                        <div className="iconContainer">
                            <Tooltip title="Reminde me">
                                <div>
                                    <IconButton onClick={reminder}>
                                        <AddAlertOutlinedIcon fontSize="small" />
                                    </IconButton>

                                    {reminders ? <Card id="card"> hi suraj</Card> : undefined}
                                </div>
                            </Tooltip>
                            <Tooltip title="Colabrator">
                                <div><IconButton > <PersonAddOutlinedIcon fontSize="small" /> </IconButton></div>
                            </Tooltip>
                            <Tooltip title="change Color">
                                <div><IconButton > <PaletteOutlinedIcon closefontSize="small" /></IconButton></div>
                            </Tooltip>
                            <Tooltip title="image add">
                                <div>
                                    <IconButton >
                                        <ImageOutlinedIcon
                                            fontSize="small" /> </IconButton>
                                </div>
                            </Tooltip>
                            <Tooltip title="Archive">
                                {archive ? <Tooltip title="Unarchive note"><IconButton> <ArchiveOutlinedIcon fontSize="small" onClick={archives} />  </IconButton></Tooltip> : <Tooltip title="Archive note"><IconButton><ArchiveOutlinedIcon fontSize="small" onClick={archives} /></IconButton></Tooltip>}
                            </Tooltip>
                        </div>
                        <div>
                            <Button id="button" onClick={createNotes}>close</Button>
                        </div>
                    </div>
                </Card>
                    :
                    <Card id="inactive" onClick={inactiveNote}>
                        <div>
                            Take a note...</div>
                        <div><IconButton><ImageOutlinedIcon id="image" fontSize='medium' /> </IconButton></div>
                    </Card>}
            </div>
        </ClickAwayListener>
    )
}