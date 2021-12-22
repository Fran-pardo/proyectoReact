import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './style.css';

import {Link} from 'react-router-dom';

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
                        US${producto.precio}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/detail/${producto.id}`}>Ver más</Link>
                </CardActions>
            </Card>

        </div>
    )

}

export default Item;