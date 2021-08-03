import React from 'react'

// Rating component that displays the rating of each product based on the number or reviews they have
// component takes in two props: value for rating, text for numReviews
const Rating = ({ value, text, starColor }) => {
    return (
        <div className="rating">
            {/* represents each rating with an icon */}
            <span>
                {/* checks for 1 star reviews */}
                <i style={{ color: starColor }} className={value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
                {/* checks for 2 star reviews */}
                <i style={{ color: starColor }} className={value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
                {/* checks for 3 star reviews */}
                <i style={{ color: starColor }} className={value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
                {/* checks for 4 star reviews */}
                <i style={{ color: starColor }} className={value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
                {/* checks for 5 star reviews */}
                <i style={{ color: starColor }} className={value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>

            {/* text  */}
            <span>
                {/* if text exists show it */}
                {text && text}
            </span>
        </div>
    )
}

// set a default value for the color stars in the rating component
// if a color is specified the component will 
Rating.defaultProps = {
    starColor: '#f8e825',
}


// set a default type of prop passed
// Rating.propTypes = {
//     value: propTypes.number.isRequired,
//     text: propTypes.string.isRequired,
//     color: propTypes.number,
// }

export default Rating
