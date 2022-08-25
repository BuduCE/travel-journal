import Tour from '../Tour'
import data from '../../data'
import './styles.css'

const Home = () => {
  // Mapping through the data file
  const places = data.map(place => {
    return <Tour 
              key = {place.id}
              {...place}
            />
  })

  return (
    <div>
      <section>
        <p>mytraveljournal.</p>
      </section>
      <section className='tour-list'>
        {places}
      </section>
    </div>
  )
}

export default Home