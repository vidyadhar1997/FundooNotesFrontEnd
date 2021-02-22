import Dialog from "@material-ui/core/Dialog";
import React from 'react';
import '../Update/Update.scss'
import { TextField } from '@material-ui/core'
import DisplayIcon from "../Icons/DisplayIcon";

export default function Update(props){
    
    const [title, settitle] = React.useState('');
    const titleHandler = (e) => {
        settitle(e.target.value)
        console.log("title ", title)
        console.log("prop ",props.updateD)
    }
    const [description, setdescription] = React.useState('');
    const descriptionHandler = (e) => {
        setdescription(e.target.value)
        console.log("title ", description)
        console.log("prop ",props.updateD)
    }
    
    return(
        <div>
        <div className='dialogContainer'>
        <Dialog 
        open={props.OpenCards}
        onClose={props.close()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
            <div className="Dialogue">
            <div className="textFieldContainer">
                        <TextField
                            className="textfield"
                            fullWidth
                            textdecaration='none'
                            defaultValue={props.updateD.title}
                            onChange={titleHandler}
                            multiline
                            InputProps={{ disableUnderline: true }}
                        />
                         </div>
                         <div className="textFieldContainer">
                         <TextField
                            className="textfield"
                            fullWidth
                            textdecaration='none'
                            defaultValue={props.updateD.description}
                            onChange={descriptionHandler}
                            multiline
                            InputProps={{ disableUnderline: true }}
                        />
                    </div>
                    <div>
                    <DisplayIcon Notedata={props.updateD}/>
                    </div>
            </div></Dialog>
     </div>
     </div>

    )
}