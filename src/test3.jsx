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
