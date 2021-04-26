import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

function Product({ data }) {
    const classes = useStyles();
    console.log(data);
    return (
        <div className='my-3 p-2'>

        <Card className={classes.root}>

            <CardActionArea>

                <CardMedia component="img" alt={data.name} height="200" image={data.image} title={data.name}/>

                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {data.name}
                    </Typography>
                </CardContent>

            </CardActionArea>

            <CardActions>

            </CardActions>

        </Card>
        </div>
    );
}

export default Product;