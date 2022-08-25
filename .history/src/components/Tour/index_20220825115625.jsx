import './styles.css'
import camp from './camp.jpg'

const Tour = (props) => {
  return (
    <div className='Tour'>
      {/* Section 1 */}
      <div className="tour-img">
        {/* <img src={camp} alt="" /> */}
        <img src={props} alt="" />
      </div>

      {/* Section 2 */}
      <div className="tour-info">
        <div className="tour-loc">
          <img src="" alt="" />
          <span>Japan</span>
          <a href="">View on Google Maps</a>
        </div>
        <h2>Mount Fuji</h2>
        <div className="tour-data">
          <p><b>12 Jan, 2021</b></p>
          <p><b>- 30 Jan, 2021</b></p>
        </div>

        <p className='tour-desc'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi soluta nam animi fugit porro suscipit atque dolores in, saepe, reiciendis, optio esse accusamus autem hic recusandae alias magni magnam laudantium.
        </p>
      </div>

    </div>
  )
}

export default Tour