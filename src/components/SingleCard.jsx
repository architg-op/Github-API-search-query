import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function SingleCard(props) {
  const { repo } = props;
  console.log('props', props);
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Avatar:
        </Typography>
        <Typography variant="h5" component="div">
          Repo name: {repo.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Stars: {repo.stars}
        </Typography>
        <Typography variant="body2">Description: {repo.description}</Typography>
        <Typography variant="body2">Language: {repo.language}</Typography>
      </CardContent>
    </React.Fragment>
  );
  return (
    <div>
      <Card variant="outlined">{card}</Card>
    </div>
  );
}
