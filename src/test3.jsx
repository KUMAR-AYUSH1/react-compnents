import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    
  );
}
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export function IconButtonWithBadge() {
  return (
    <IconButton aria-label="view cart with 2 items" color="inherit">
      <ShoppingCartIcon fontSize="medium" variant="outlined" />
      <CartBadge badgeContent={7} color="secondary" overlap="circular" />
    </IconButton>
  );
}


import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export function Checkboxes() {
  return (
    <div className="bg-gray-900 p-4">
      <FormControlLabel
        control={<Checkbox defaultChecked sx={{ color: "white", "&.Mui-checked": { color: "#90caf9" } }} />}
        label="Checkbox 1"
        sx={{ color: "white" }}
      />

      <FormControlLabel
        control={<Checkbox sx={{ color: "white", "&.Mui-checked": { color: "#90caf9" } }} />}
        label="Checkbox 2"
        sx={{ color: "white" }}
      />
     
    </div>
  );
}


import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export function FloatingActionButtonSize() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      
      <Fab size="medium" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      
    </Box>
  );
}



import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export function RadioButtonsGroup() {
  const id = React.useId();
  return (
    <div className="bg-gray-900 p-4 w-40">
      <FormControl>
      <FormLabel id={`${id}-label`} sx={{ color: "white" }}>Gender</FormLabel>
      <RadioGroup
        aria-labelledby={`${id}-label`}
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    </div>
  );
}

export function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [value, setValue] = React.useState("bg-gray-900 p-4 w-40");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    if (event.target.value === 'a') {
      setValue("bg-gray-900 p-4 w-40");
      console.log('A');
    }
    if (event.target.value === 'b') {
      setValue("bg-gray-900 p-4 w-60");
      console.log('B');
    }
  };

  return (
    <div className={value}>
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        slotProps={{ input: { 'aria-label': 'A' } }}
      />
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        slotProps={{ input: { 'aria-label': 'B' } }}
      />
    </div>
  );
}


import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <div className="bg-gray-900 p-4 w-40">
      <Box sx={{ '& > legend': { mt: 2 } }}>
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Uncontrolled</Typography>
      <Rating
        name="simple-uncontrolled"
        onChange={(event, newValue) => {
          console.log(newValue);
        }}
        defaultValue={2}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
      </Box>
    </div>
  );
}



import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <div className="bg-gray-900 p-4 w-90">  
      <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        size="large" 
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
    </div>
  );
}


import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export function CustomizedRating() {
  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      <Typography component="legend">Custom icon and color</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Typography component="legend">10 stars</Typography>
      <Rating name="customized-10" defaultValue={2} max={10} />
    </Box>
  );
}



import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  slotProps: {
    paper: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div className="bg-white p-4 w-100">
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Placeholder</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}



import Slider from '@mui/material/Slider';
function valuetext(value) {
  return `${value}°C`;
}
export function SliderSizes() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
      <Slider aria-label="Temperature" defaultValue={30} getAriaValueText={valuetext} valueLabelDisplay="auto" shiftStep={30} step={10} marks min={10} max={110}/>
    </Box>
  );
}

