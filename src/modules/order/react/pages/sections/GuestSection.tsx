"use client";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGuestsSection } from "@ratatouille/modules/order/react/pages/order/use-guests-section";

// notre GuestSection ne dépend que de notre interface useGuestsSection
export const GuestSection: React.FC = () => {
  const presenter = useGuestsSection();
  return (
    <Box>
      <Typography variant="h5">Guest Section</Typography>
      <Grid container sx={{ paddingTop: 2 }} rowSpacing={2}>
        {presenter.guests.map((guest) => (
          <Box key={Math.random()}>
            <GuestRow
              id={guest.id}
              firstName={guest.firstName}
              lastName={guest.lastName}
              age={guest.age}
              onChange={presenter.updateGuest}
              remove={presenter.removeGuest}
            ></GuestRow>
          </Box>
        ))}
      </Grid>
      <Grid
        container
        direction={"row"}
        alignItems={"center"}
        spacing={1}
        marginTop={2}
      >
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={presenter.addGuest}
          >
            Add Guest
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={presenter.onNext}
          >
            Suivant
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const GuestRow: React.FC<{
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  onChange: (id: string, key: string, value: any) => void;
  remove: (id: string) => void;
}> = ({ id, firstName, lastName, age, onChange, remove }) => {
  return (
    <Box>
      <Grid container direction={"row"} alignItems={"center"} spacing={1}>
        <Grid item>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <TextField
              value={firstName}
              onChange={(e) => onChange(id, "firstName", e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <TextField
              value={lastName}
              onChange={(e) => onChange(id, "lastName", e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <FormLabel>Age</FormLabel>
            <TextField
              value={age}
              onChange={(e) => onChange(id, "age", parseInt(e.target.value))}
            />
          </FormControl>
        </Grid>
        <Box>
          <Button
            variant="contained"
            color="error"
            onClick={() => remove(id)}
            startIcon={<DeleteIcon />}
          >
            Remove
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};
