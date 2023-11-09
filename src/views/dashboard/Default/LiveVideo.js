import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';
import ReactPlayer from 'react-player';

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

const VideoPlayingCard = () => {
  const [value, setValue] = useState('Face Recognition');
  const videoUrl = 'http://127.0.0.1:8000/video_feed'; // Set the video URL directly

  return (
    <Grid container spacing={2}>
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
        <ReactPlayer url={videoUrl} controls={true} />
      </Grid>
    </Grid>
  );
};

VideoPlayingCard.propTypes = {
  isLoading: PropTypes.bool
};

export default VideoPlayingCard;
