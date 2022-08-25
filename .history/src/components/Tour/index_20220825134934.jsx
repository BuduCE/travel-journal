import './styles.css'
import camp from './camp.jpg'

const Tour = (props) => {
  return (
    <div className='Tour'>
      {/* Section 1 */}
      <div className="tour-img">
        {/* <img src={camp} alt="" /> */}
        <img src={props.image} alt="" />
      </div>

      {/* Section 2 */}
      <div className="tour-info">
        <div className="tour-loc">
          <img src="" alt="" />
          <span>{props.location}</span>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2>{props.title}</h2>
        <div className="tour-data">
          <p><b>{props.startDate}</b></p>
          <p><b>- {props.endDate}</b></p>
        </div>

        <p className='tour-desc'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi soluta nam animi fugit porro suscipit atque dolores in, saepe.
        </p>
      </div>

    </div>
  )
}

export default Tour