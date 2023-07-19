import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function MyCard(props) {
  const [quantity, setQuantity] = React.useState(1);
  const [size, setSize] = React.useState('');

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  let options = props.options
  let priceOptions = Object.keys(options)



  return (
    <div >
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
            image={props.imgSrc}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.foodName}
            </Typography>
            <Typography sx={{ mb: 1 }} variant="body2" color="text.secondary">
              {props.description}
            </Typography>
            <Select
              labelId="demo-select-quantity-label"
              id="demo-select-quantity"
              value={quantity}
              onChange={handleQuantityChange}
            >
              {Array.from(Array(6), (e, i) => (
                <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
              ))}
            </Select>
            <Select
              sx={{ ml: 1, minWidth: "60px", width: "6rem" }}
              labelId="demo-select-size-label"
              id="demo-select-size"
              value={size}
              onChange={handleSizeChange}
            >
              {priceOptions.map((data)=>{
                  return <MenuItem key={data} value={data}>{data}</MenuItem>
              })}
            </Select>
            <Typography gutterBottom variant="h5" component="div">
              Total Price
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
