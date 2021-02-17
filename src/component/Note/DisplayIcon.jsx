import React from 'react';
import '../Note/DisplayIcon.scss'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import IconButton from '@material-ui/core/IconButton';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import { Tooltip } from "@material-ui/core";
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';

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

    return (
        <div  className="iconContainers">
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
    )
}