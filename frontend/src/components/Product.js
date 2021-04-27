import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {Link} from 'react-router-dom'

import Rating from "./Rating";

const useStyles = makeStyles({
    root: {
        maxWidth: 350,
    },
});

function Product({ data }) {
    const classes = useStyles();

    const click = () => {
        // console.log('clicked');
    };

    return (
        <div className='my-3 p-2'>
            <Card className={classes.root}>

                <CardActionArea onClick={click}>
                    <Link to={`/product/${data._id}`}>
                        <CardMedia component="img" alt={data.name} height="200" image={data.image} title={data.name}/>

                        <CardContent>

                            <Rating value={data.rating} text={`${data.numReviews} reviews`} color={'#f8e25'}/>

                            <h5>{data.name}</h5>
                            <h4>MUR{data.price}</h4>
                        </CardContent>
                    </Link>
                </CardActionArea>

                {/*<CardActions>*/}
                {/*    <Button size="small" color="primary">*/}
                {/*        Open*/}
                {/*    </Button>*/}
                {/*</CardActions>*/}

            </Card>
        </div>
    );
}

export default Product;