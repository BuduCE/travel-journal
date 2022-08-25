import Tour from '../Tour'
import './styles.css'

const Home = () => {
  // Mapping through the data file
  const places = data.map(place => {
    retrun <Tour 
              key = {place.id}
            />
  })

  return (
    <div>
      <section>
        <p>mytraveljournal.</p>
      </section>
      <section className='tour-list'></section>
    </div>
  )
}

export default Home