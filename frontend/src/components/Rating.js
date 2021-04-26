import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarIcon from '@material-ui/icons/Star';

function Rating({value, text, color}) {
    return (
        <div className='rating'>
            <span>
                {(value > 1) ? <StarIcon style={{color: "gold"}} /> : ((value >= 0.5) ? <StarHalfIcon style={{color: "gold"}} /> : <StarBorderIcon style={{color: "gold"}} />)}
            </span>

            <span>
                {(value > 2) ? <StarIcon style={{color: "gold"}} /> : ((value >= 1.5) ? <StarHalfIcon style={{color: "gold"}} /> : <StarBorderIcon style={{color: "gold"}} />)}
            </span>

            <span>
                {(value > 3) ? <StarIcon style={{color: "gold"}} /> : ((value >= 2.5) ? <StarHalfIcon style={{color: "gold"}} /> : <StarBorderIcon style={{color: "gold"}} />)}
            </span>

            <span>
                {(value > 4) ? <StarIcon style={{color: "gold"}} /> : ((value >= 3.5) ? <StarHalfIcon style={{color: "gold"}} /> : <StarBorderIcon style={{color: "gold"}} />)}
            </span>

            <span>
                {(value > 5) ? <StarIcon style={{color: "gold"}} /> : ((value >= 4.5) ? <StarHalfIcon style={{color: "gold"}} /> : <StarBorderIcon style={{color: "gold"}} />)}
            </span>

            <span>{text && text}</span>
        </div>
    );
}

export default Rating;