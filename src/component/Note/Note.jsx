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
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DateFnsUtils from '@date-io/date-fns';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import Chip from '@material-ui/core/Chip';
import InputBase from '@material-ui/core/InputBase';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers';
import { setDate } from "date-fns";

export default function Notes() {
    const [card, setCard] = React.useState(false);
    const [title, settitle] = React.useState('');
    const [Note, setNote] = React.useState('');

    const onHandleClick = () => {
        setCard(false);
        setReminderDatePicker(false)
        setReminders(false)
        setLableDatePicker(false)
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
        setReminderDatePicker(false)
        setLableDatePicker(false)
    }

    const useStyles = makeStyles((theme) => ({
        paper: {
            padding: theme.spacing(1),
            backgroundColor: theme.palette.background.paper,
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
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

    const [reminderPicker, setReminderDatePicker] = React.useState(false);
    const reminderDate = () => {
        setReminderDatePicker(!reminderPicker)
    }


    const arrowHandle = () => {
        setReminderDatePicker(false)
    }

    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-02-18T21:11:54'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [deleteReminder, setDeleteReminder] = React.useState(false);
    const handleDelete = () => {
        setsevDate('')
        setDeleteReminder(!deleteReminder)
        console.info('You clicked the delete Reminder icon.');
    };
    const [deleteLable, setDeleteLable] = React.useState(false);
    const handleDeletes = () => {
        setsaveLable('')
        setDeleteLable(!deleteLable)
        console.info('You clicked the delete Time icon.');
    };

    const handleClicks = () => {
        console.info('You clicked the Chip.');
    };
const [saveDate,setsevDate]= React.useState('');
    const handleReminderNote = () => {
        setsevDate(selectedDate.toString()),
        setReminderDatePicker(false)
        setReminders(false)

    }
    const [saveLable,setsaveLable]= React.useState('');
    const handleLableClicks = () => {
        setsaveLable(Labless)
       // setReminderDatePicker(false)
       // setReminders(false)

    }
    const [cards, setCards] = React.useState(false);
    const moreOptionHandler = () => {
        setCards(!cards);
    }

    const [lablePickers, setLableDatePicker] = React.useState(false);
    const LableDate = () => {
        setLableDatePicker(!lablePickers)
    }

    const [Labless, setLabel] = React.useState('');
    const LableHandler=(event)=>{
        setLabel(event.target.value)
        console.log("lable",Labless)
    }

    const createNotes = () => {
        if (title.length > 0 || Note.length > 0) {
            const noteData = {
                title: title,
                description: Note,
                pin: pin,
                archive: archive,
                userId: parseInt(window.localStorage.getItem('userId')),
                colour: colour,
                reminder: selectedDate.toString() !=  new Date('2021-02-18T21:11:54').toString()? selectedDate.toString():"",
                label:Labless
            }
            createNote(noteData).then((responce) => {
                console.log("new notes created successfully", responce)
                setCard(!card)
                // history.push("/home")
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
                {card ? <Card id="active" style={{ backgroundColor: colour }} >
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
                    <div className="ChipData">
                   { saveDate != ''?
                    <Chip
                        icon={<AccessTimeIcon fontSize="small" />}
                        label={saveDate}
                        onClick={handleClicks}
                        onDelete={handleDelete}
                        id="chip"
                    />:undefined}
                      { saveLable != ''?
                    <Chip
                        icon={<AccessTimeIcon fontSize="small" />}
                        label={saveLable}
                        onClick={handleClicks}
                        onDelete={handleDeletes}
                        id="chip"
                    />:undefined}
                    </div>
                    <div className="icon">
                        <div className="iconContainer">
                            <Tooltip title="Reminde me">
                                <div>
                                    <IconButton onClick={reminder}>
                                        <AddAlertOutlinedIcon fontSize="small" />
                                    </IconButton>
                                    {(!reminderPicker && reminders) ? <Card id="cards">
                                        <div className="reminderMe">
                                            <div className="Remind">Reminder:</div>
                                            <div className="Later">Later today:</div>
                                            <div className="Tomorrow">Tomorrow:</div>
                                            <div className="week">Next week:</div>
                                            <div className="week" onClick={reminderDate}>
                                                <AccessTimeIcon fontSize="small" />Pick date & time:
                                             </div>
                                        </div>

                                    </Card> : reminderPicker ? <Card id="cards">
                                        <div className="arrowss">
                                            <ArrowBackIcon fontSize="small" onClick={arrowHandle} /> Pick date & time:
                                         </div>
                                        <div className="bor"></div>
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
                                        <div className="time">
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
                                            <Button id="buttonsss" onClick={handleReminderNote}>save</Button>
                                        </div>
                                    </Card>
                                : undefined}
                                </div>
                            </Tooltip>
                            <Tooltip title="Colabrator">
                                <div><IconButton > <PersonAddOutlinedIcon fontSize="small" /> </IconButton></div>
                            </Tooltip>
                            <Tooltip title="change Color">
                                <div><IconButton onMouseOver={handleClick} >
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
                                <IconButton onClick={moreOptionHandler} >
                                    <MoreVertOutlinedIcon />

                                    {(!lablePickers && cards) ? <Card id="cardMoreOption">
                                        <div id="addLable" onClick={LableDate}>Add Lable</div>
                                    </Card> : lablePickers ? <Card id="cardMoreOptionss">
                                        <div className="inputBases">
                                            <div id="Label">
                                                Label note
                                         </div>
                                            <div>
                                                <InputBase placeholder="Enter label name" onChange={LableHandler}/>
                                            </div>
                                            <div onClick={handleLableClicks}>
                                                Create
                                            </div>
                                        </div>
                                    </Card> : undefined}
                                </IconButton>
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