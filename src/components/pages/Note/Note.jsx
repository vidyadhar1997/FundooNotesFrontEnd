import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Card from '@material-ui/core/Card';
import React from 'react';
import '../Note/Notes.scss'
import { TextField } from '@material-ui/core'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import IconButton from '@material-ui/core/IconButton';
import Pin from  "../../../assets/push.svg"
import Push from "../../../assets/Pin.svg"

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
        settitle(e.target.value)
        console.log("title ", title)
    }
    const titleHandler = (e) => {
        setNote(e.target.value)
        console.log("Note ", Note)
    }

    const [pin, unpin] = React.useState(false);
    const pins = () => {
      unpin(!pin);
      console.log("pin ",pin)
    }
    return (
        <ClickAwayListener onClickAway={onHandleClick}>
            <div className="mainCard">
                {card ?<Card id="active" >
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
                           {pin ? <img id="pin" src={Pin}  onClick={pins} />:<img id="unPin" src={Push}  onClick={pins}/>}
                    </div>
                        <div className="textFieldContainer">
                            <TextField
                                className="textfield"
                                fullWidth
                                placeholder='Takes Note...'
                                textdecaration='none'
                                onChange={NoteHandler}
                                multiline
                                InputProps={{ disableUnderline: true }}
                            />
                        </div>
                    </Card>
                    :
                    <Card id="inactive" onClick={inactiveNote}>
                        Take Note...
                        <IconButton><ImageOutlinedIcon fontSize='medium' /> </IconButton>
                     </Card>}
            </div>
        </ClickAwayListener>
    )
}