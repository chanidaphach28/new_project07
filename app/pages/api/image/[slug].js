export default function handler(req, res) {
  // const hotels = [
  //   {
  //     id: 'asdiofjdsio',
  //     name: 'blabla hotel',
  //     imagePath: '/images/hotel2.jpg'
  //   },
  //   {
  //     id: 'asdiofjdsio',
  //     name: 'blabla hotel',
  //     imagePath: 'http://localhost:3000/image/hotel1.jpg'
  //   }
  // ]

  return (
    <div>
      {hotels.map(hotel => {
        return <img src={hotel.imagePath} />
      })}
    </div>
  )
  


  res.status(200).json({ message: 'Hello from Next.js!' })
}