import React from 'react';
import '../Icons/DisplayIcon.scss'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import { Tooltip } from "@material-ui/core";
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import InputBase from '@material-ui/core/InputBase';
import { archiveNotesById, trashNotesById, pinOrUnpin } from '../../services/userServices';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers';
import { Button } from '@material-ui/core';
import Pin from "../../assets/push.svg"
import Push from "../../assets/pin.svg"
import IconButton from '@material-ui/core/IconButton';

export default function DisplayIcon(props) {

    const useStyles = makeStyles((theme) => ({
        paper: {
            padding: theme.spacing(1),
            backgroundColor: theme.palette.background.paper,
        },
    }));

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    const [colour, setBgcolor] = React.useState('');
    const DATA = [
        { title: "Default", id: "#fff" },
        { title: "Red", id: "#CD5C5C" },
        { title: "Orange", id: "#fbbc04" },
        { title: "yello", id: "#fff475" },
        { title: "green", id: "#ccff90" },
        { title: "Teal", id: "#FAF0E6" },
        { title: "Blue", id: "#00FFFF" },
        { title: "Dark Blue", id: "#0000FF" },
        { title: "Purple", id: "#800080" },
        { title: "Pink", id: "#FFC0CB" },
        { title: "Browm", id: "#F4A460" },
        { title: "Grey", id: "#808080" }
    ];
    const [cards, setCards] = React.useState(false);
    const moreOptionHandler = () => {
        setCards(!cards);
        setLableDatePicker(false)
    }
    const [lablePickers, setLableDatePicker] = React.useState(false);
    const LableDate = () => {
        setLableDatePicker(!lablePickers)
    }
    const [Labless, setLabel] = React.useState('');
    const LableHandler = (event) => {
        setLabel(event.target.value)
        console.log("lable", Labless)
    }

    const deleteNote = () => {
        console.log("props.Notedata.noteId ", props.Notedata.noteId)
        let noteId = props.Notedata.noteId
        trashNotesById(noteId).then((responce) => {
            console.log("resp ", responce)
        }).catch((error) => {
            console.log("error is ", error)
        });
        //trashNotesById
        // trashNotesById(noteId).then(responce=>{
        //     console.log("deleted ",responce)
        // }).catch((err)=>{
        //     console.log("err",err)
        // })
    }
    const [archive, unArchive] = React.useState(false);
    const archives = () => {
        console.log("props.Notedata.noteId ", props.Notedata.noteId)

        const req = { noteId: props.Notedata.noteId }
        archiveNotesById(req).then((responce) => {
            console.log("resp ", responce)
        }).catch((error) => {
            console.log("error is ", error)
        });
        // if (archive === false) {
        //     unArchive(true);
        //     console.log("Note Archive");
        // }
        // else {
        //     unArchive(false);
        //     console.log("Note unArchive");
        // }
    }

    const [reminderPicker, setReminderDatePicker] = React.useState(false);
    const reminderDate = () => {
        setReminderDatePicker(!reminderPicker)
    }
    const [reminders, setReminders] = React.useState(false);
    const reminder = () => {
        setReminders(!reminders)
        setReminderDatePicker(false)
        setLableDatePicker(false)
    }
    const arrowHandle = () => {
        setReminderDatePicker(false)
    }
    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-02-18T21:11:54'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [saveDate, setsevDate] = React.useState('');
    const handleReminderNote = () => {
        setsevDate(selectedDate.toString()),
            setReminderDatePicker(false)
        setReminders(false)
    }

    const [pin, unpin] = React.useState(false);
    const pinss = () => {
        const noteId = props.Notedata.noteId

        pinOrUnpin(noteId).then((responce) => {
            console.log("resp ", responce)
            unpin(!pin);
        }).catch((error) => {
            console.log("error is ", error)
        });
    }
    return (
        <div className="iconContainers">
            <div className="pin-icon">
                {props.Notedata.pin ? <Tooltip title="Unpin note"><IconButton onClick={pinss}><img id="pin" src={Push} />
                </IconButton></Tooltip> : <Tooltip title="Pin note"><IconButton onClick={pinss}><img id="pin" src={Pin} />
                </IconButton></Tooltip>}
            </div>
            <Tooltip title="Reminde me">
                <IconButton onClick={reminder}>
                    <AddAlertOutlinedIcon fontSize="small" />
                </IconButton>
            </Tooltip>
            {(!reminderPicker && reminders) ? <Card id="cardssssss">
                <div className="reminderMesssss">
                    <div className="Remind">Reminder:</div>
                    <div className="Later">Later today:</div>
                    <div className="Tomorrow">Tomorrow:</div>
                    <div className="week">Next week:</div>
                    <div className="week" onClick={reminderDate}>
                        <AccessTimeIcon fontSize="small" />Pick date & time:
                                             </div>
                </div>

            </Card> : reminderPicker ? <Card id="cardssssss">
                <div className="arrowssss">
                    <ArrowBackIcon fontSize="small" onClick={arrowHandle} /> Pick date & time:
                                         </div>
                <div className="borders"></div>
                <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </div>
                <div className="times">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Time picker"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </div>
                <div>
                    <Button id="buttonssss" onClick={handleReminderNote}>save</Button>
                </div>
            </Card>
                    : undefined}

            <Tooltip title="Colabrator">
                <div><IconButton > <PersonAddOutlinedIcon fontSize="small" /> </IconButton></div>
            </Tooltip>
            <Tooltip title="change Color">
                <div><IconButton onMouseOver={handleClick}>
                    <PaletteOutlinedIcon closefontSize="small" />
                </IconButton>
                    <Popper id={id} open={open} anchorEl={anchorEl}>
                        <div className={classes.paper} id="NoteColor">
                            {DATA.map((item) => (
                                <Card className="palletColor" id="pallet" onClick={() => setBgcolor(item.id)} style={{ backgroundColor: item.id }}></Card>
                            ))}
                        </div>
                    </Popper>
                </div>
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
            <Tooltip title="MoreOptions">
                <IconButton onClick={moreOptionHandler} > <MoreVertOutlinedIcon />
                </IconButton>
            </Tooltip>
            {(!lablePickers && cards) ? <Card id="cardMoreOptions">
                <div onClick={deleteNote}>
                    Delete note
                    </div>
                <div onClick={LableDate}>
                    Add Label
                    </div>
            </Card> : lablePickers ? <Card id="cardMoreOptionss">
            <div className="inputBases">
                <div id="Label">
                    Label note
                     </div>
                <div>
                    <InputBase placeholder="Enter label name" onChange={LableHandler} />
                </div>
                <div>
                    Create
                </div>
                </div>
            </Card> : undefined}

        </div >
    )
}