import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';

const Input = styled(MuiInput)`
  width: 42px;
`;

export function InputSlider() {
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2} sx={{ alignItems: 'center' }}>
        <Grid>
          <VolumeUp />
        </Grid>
        <Grid size="grow">
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}



import Switch from '@mui/material/Switch';

const label = { slotProps: { input: { 'aria-label': 'Switch demo' } } };

export function BasicSwitches() {
  return (
    <div>
      <Switch {...label} defaultChecked />
      <Switch {...label} color="warning" />
      <Switch {...label} disabled defaultChecked size="small" color="success" />
      <Switch {...label} disabled color="secondary"/>
    </div>
  );
}

///////////////////////////////////////////////////////////////////////////////////////////


export const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#65C466',
        opacity: 1,
        border: 0,
        ...theme.applyStyles('dark', {
          backgroundColor: '#2ECA45',
        }),
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
      ...theme.applyStyles('dark', {
        color: theme.palette.grey[600],
      }),
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
      ...theme.applyStyles('dark', {
        opacity: 0.3,
      }),
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E9E9EA',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
    ...theme.applyStyles('dark', {
      backgroundColor: '#39393D',
    }),
  },
}));


import TextField from '@mui/material/TextField';

export function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" error/>
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" color="success" focused />
    </Box>
  );
}



import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export function AvatarGroupBasic() {
  return (
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="./assets/img1.jpg" />
      <Avatar alt="Travis Howard" src="/assets/img2.jpg" />
      <Avatar alt="Cindy Baker" src="/assets/img3.jpg" />
      <Avatar alt="Agnes Walker" src="/assets/hero.png" />
      <Avatar alt="Trevor Henderson" src="/assets/img1.jpg" />
    </AvatarGroup>
  );
}



import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export function BadgeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        variant="dot"
        className="animate-pulse"
      >
        <Avatar alt="Remy Sharp, online" src="/static/images/avatar/1.jpg" />
      </StyledBadge>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={2}
        color="primary"
      >
        <Avatar
          alt="Travis Howard, 2 unread messages"
          src="/static/images/avatar/2.jpg"
        />
      </Badge>
      <Badge
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={<SmallAvatar alt="" src="/static/images/avatar/1.jpg" />}
      >
        <InsertDriveFileIcon
          color="action"
          fontSize="large"
          titleAccess="Q4 budget spreadsheet, last edited by Remy Sharp"
        />
      </Badge>
    </Stack>
  );
}



import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import { color } from 'motion';

const maxVisibleNotifications = 99;
const unreadNotificationsCount = 100;

function getUnreadNotificationsLabel(count) {
  if (count === 0) {
    return 'show no unread notifications';
  }
  if (count > maxVisibleNotifications) {
    return `show more than ${maxVisibleNotifications} unread notifications`;
  }
  return `show ${count} unread notification${count === 1 ? '' : 's'}`;
}

export function BadgeIntro() {
  const label = getUnreadNotificationsLabel(unreadNotificationsCount);

  return (
    <IconButton aria-label={label}>
      <Badge
        badgeContent={unreadNotificationsCount}
        color="secondary"
        
        max={maxVisibleNotifications}
      >
        <MailIcon sx={{color:'white'}}/>
      </Badge>
    </IconButton>
  );
}
