import Dialog from "@material-ui/core/Dialog";
import React from 'react';
import '../Update/Update.scss'
import { TextField } from '@material-ui/core'
import DisplayIcon from "../Icons/DisplayIcon";
import {updatesNotes} from "../../services/userServices";

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

    const updateNotesData = () => {
        console.log("hi")
            const notesData = {
                title: title,
                description:description,
                pin: props.updateD.pin,
                archive: props.updateD.archive,
                userId: props.updateD.userId,
                colour:props.updateD.colour,
                reminder: props.updateD.reminder,
                label: props.updateD.Labless,
                noteId:props.updateD.noteId
            }
            updatesNotes(notesData).then((responce) => {
                console.log("new notes created successfully", responce)
                //setCard(!card)
                //props.GetData()
                // props.Get()
                // history.push("/home")
            }).catch((error) => {
                console.log("error is ", error)
            })
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
                  
                   <div><DisplayIcon Notedata={props.updateD}/></div> 
                    <div onClick={()=>updateNotesData()}>
                        Close
                     </div>
                   
            </div></Dialog>
     </div>
     </div>

    )
}