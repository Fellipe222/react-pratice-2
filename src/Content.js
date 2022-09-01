import img_pointer from './img/pointer.png'

export default function Content(props){
    return(
      <div className='content--wrapper'>
        <img src={props.imageUrl} className='content--image' alt='place'></img>
        <div className='content--text--wrapper'>
          <div className='content--location--wrapper'>
            <img src={img_pointer} className='content--pointer' alt='pointer'></img>
            <span className='content--country'><b>{props.location.toUpperCase()}</b></span>
            <a href={props.googleMapsUrl} className='content--map-url'>Visualizar no Google Maps</a>
          </div>
          <h2 className='content--place-name'>{props.title}</h2>
          <span className='content--booking'>{props.startDate} - {props.endDate}</span>
          <p>{props.description}</p>
        </div>
      </div>
    )
  }