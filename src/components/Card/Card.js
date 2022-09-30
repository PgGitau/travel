import './Card.css';
import image from '../../images/maldives.webp';

function Card(props) {
    // let number = props.contents.id; //returns array
    // console.log(number)
    // let newSource;
    // if (number === [1, 2, 3]) {
    //     newSource= {image}
    // }

// {`../../../public/images/${props.contents.coverImg}`}
    return(
        <div className='card-container'>
            
            <section className='card-image'>
                <img src={image}
                     alt={props.contents.alt}
                >
                </img>
            </section>

            <section className='card-content'>
                <div className='location-data'>
                    <p>{props.contents.location}</p>
                    <p><a href={`https:/google.com/maps/place/${props.contents.href}`} target="_blank" rel='noreferrer'>{props.contents.maps}</a></p>
                </div>
                <h1>{props.contents.title}</h1>
                <p className='date'>{props.contents.startDate} - {props.contents.endDate}</p>
                <p className='description'>{props.contents.description}</p>
            </section>

        </div>
    )
}

export default Card;