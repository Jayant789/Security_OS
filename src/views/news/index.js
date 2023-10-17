import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports

import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const News = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            test
          </Grid>
          <Grid item xs={12} md={4}>
            test
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default News;
