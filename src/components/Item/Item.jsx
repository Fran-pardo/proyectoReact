import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './style.css';

const Item = ({producto}) => {

    return(
        <div className='card'>

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" height="140" image={producto.img} alt={producto.nombre} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {producto.nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {producto.precio}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Ver más</Button>
                </CardActions>
            </Card>

        </div>
    )

}

export default Item;