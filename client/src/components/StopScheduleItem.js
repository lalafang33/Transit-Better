import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


export default function StopScheduleItem(props) {
  return (

    
    <List>

      <ListItem>
        <ListItemIcon>
            <DirectionsBusIcon fontSize="small"/>
          </ListItemIcon>
          <ListItemText>
            <b>Route:</b> {props.headsign}
          </ListItemText>
      </ListItem>

      <ListItem>
        <ListItemIcon>
          <AccessTimeIcon fontSize="small"/>
        </ListItemIcon>
        <ListItemText>
           Departure Time: {props.time}
        </ListItemText>
      </ListItem>
      <Divider/>
    </List>

  )
}