import React from 'react';
import { Tooltip } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import '../Icons/DeleteIcon.scss'
import { deleteNoteForever, trashNotesById } from '../../services/userServices';

export default function DeleteIcon(props) {
    const deleteForever = () => {
        console.log("props.Notedata.noteId ",props.Notedata.noteId)
     
        const noteId=props.Notedata.noteId
     deleteNoteForever(noteId).then((responce) => {
               console.log("resp ", responce)
           }).catch((error) => {
               console.log("error is ", error)
           });
        }

       const restoreNotes = () => {
        console.log("props.Notedata.noteId ",props.Notedata.noteId)
        const noteId=props.Notedata.noteId
            trashNotesById (noteId).then((responce) => {
                console.log("resp ", responce)
            }).catch((error) => {
                console.log("error is ", error)
            });
       }

    return(
        <div className="iconsContainer">
        <Tooltip title="Delete forever">
        <IconButton>
                < DeleteForeverIcon fontSize="small" onClick={deleteForever} />
            </IconButton>
    </Tooltip>
      <Tooltip title="Restore">
      <IconButton>
              < RestoreFromTrashIcon fontSize="small" onClick={restoreNotes} />
          </IconButton>
  </Tooltip>
  </div>
)
}
