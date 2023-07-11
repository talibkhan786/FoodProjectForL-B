import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function MyCard() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      gap: '36px',
      listStyle: 'none',
      padding: '0',
      margin: '0',

    }}>
      <style>{`
        @media (max-width: 768px) {
          div > div {
            flex-basis: 100%;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          div > div {
            flex-basis: 50%;
          }
        }
        @media (min-width: 1025px) {
          div > div {
            flex-basis: 33.33%;
          }
        }
      `}</style>
      <Card sx={{ maxWidth: "360px", width: "16rem", ml: 1, mb: 1, mt: 1 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1585032226651-759b368d7246"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography sx={{ mb: 1 }} variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
            <Select labelId="demo-select-small-label" id="demo-select-small">
              {Array.from(Array(6), (e, i) => {
                return (
                  <MenuItem key={i + 1} value={i + 1}> {i + 1}</MenuItem>
                )

              })}</Select>
            <Select sx={{ ml: 1, minWidth:"60px", width: "6rem"}}labelId="demo-select-small-label">
              <MenuItem value="half">Half</MenuItem>
              <MenuItem value="full">Full</MenuItem>
            </Select>
            <Typography gutterBottom variant="h5" component="div">
              Total Price
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: "360px", width: "16rem", ml: 1, mb: 1, mt: 1 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1585032226651-759b368d7246"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip describeChild title="Does not add if it already exists.">
              <Button>Add</Button>
            </Tooltip>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: "360px", width: "16rem", ml: 1, mb: 1, mt: 1 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1585032226651-759b368d7246"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip describeChild title="Does not add if it already exists.">
              <Button>Add</Button>
            </Tooltip>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
