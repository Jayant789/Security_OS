import PropTypes from 'prop-types';
import { useState } from 'react';
//import { useSelector } from 'react-redux';

// material-ui
//import { useTheme } from '@mui/material/styles';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';

// third-party
import ReactPlayer from 'react-player'; // Replace with the actual video player component
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

const status = [
  {
    value: 'Face Recognition',
    label: 'Face Recognition'
  },
  {
    value: 'Pose Estimation',
    label: 'Pose Estimation'
  },
  {
    value: 'Spill Detection',
    label: 'Spill Detection'
  }
];

// ==============================|| DASHBOARD DEFAULT - VIDEO PLAYING CARD ||============================== //

const VideoPlayingCard = ({ isLoading }) => {
  const [value, setValue] = useState('Face Recognition');
  //const theme = useTheme();
  //const customization = useSelector((state) => state.customization);

  
  return (
    <MainCard>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Typography variant="subtitle2">Live Video</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3">{value}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <TextField id="standard-select-currency" select value={value} onChange={(e) => setValue(e.target.value)}>
                {status.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {isLoading ? (
            // You can replace this with a loading indicator or message
            <Typography>Loading video...</Typography>
          ) : (
            // Replace VideoPlayer with your actual video player component
            <ReactPlayer url="C:\Users\jayan\Desktop\00144.mp4_out.mp4" controls={true} />
          )}
        </Grid>
      </Grid>
    </MainCard>
  );
};

VideoPlayingCard.propTypes = {
  isLoading: PropTypes.bool
};

export default VideoPlayingCard;
