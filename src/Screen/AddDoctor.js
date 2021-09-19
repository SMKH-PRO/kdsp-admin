import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { Container, Typography, TextField, Button, InputLabel, Select, Box, Chip, MenuItem, OutlinedInput, FormControl } from '@mui/material'
import { OT, PT, ST } from '../Utils/constants';

const names = [
  OT,
  PT,
  ST
]

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const AddDoctor = () => {
  const theme = useTheme()
  const [personName, setPersonName] = useState([])

  const handleChange = (event) => {
    const {
      target: { value },
    } = event
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    }
  }

  return (
    <div>
      <div className='add-form'>
        <Container>
          <Typography fontSize={36} textAlign='center'>Add Doctor</Typography>
          <TextField
            fullWidth
            id='outlined-required'
            label='Name'
            margin='dense'
          />
          <TextField
            fullWidth
            id='outlined-required'
            label='Email'
            margin='dense'
          />
          <TextField
            fullWidth
            id='outlined-required'
            label='Phone Number'
            margin='dense'
          />
          <FormControl style={{ width: '100%' }} margin='dense'>
            <InputLabel id='therapy'>Therapy</InputLabel>
            <Select
              labelId='therapy'
              id='therapy-options'
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput id='select-multiple-chip' label='Chip' />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
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
          <Button variant='contained' fullWidth className='submit-button'>Submit</Button>
        </Container>
      </div>
    </div>
  )
}

export default AddDoctor
