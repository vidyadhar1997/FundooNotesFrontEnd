import React from 'react';
import '../Icons/DisplayIcon.scss'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import IconButton from '@material-ui/core/IconButton';
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

export default function DisplayIcon() {

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
    const LableHandler=(event)=>{
        setLabel(event.target.value)
        console.log("lable",Labless)
    }

    return (
        <div className="iconContainers">
            <Tooltip title="Reminde me">
                <div>
                    <IconButton>
                        <AddAlertOutlinedIcon fontSize="small" />
                    </IconButton>
                </div>
            </Tooltip>
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
            {/* {cards ? <Card id="cardMoreOptions"> */}
            {(!lablePickers && cards) ? <Card id="cardMoreOptions">
                <div>
                    Delete note
                    </div>
                <div onClick={LableDate}>
                    Add Label
                            </div>
            </Card> : lablePickers ? <Card id="cardMoreOptionss">
                Label note
                <div>
                    <InputBase placeholder="Enter label name" onChange={LableHandler} />
                </div>
            </Card> : undefined}

        </div >
    )
}