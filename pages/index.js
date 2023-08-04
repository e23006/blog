import Hero from 'components/hero'

const params = { title: 'CUBE', subtitle: 'アウトプットしていくサイト' }
const Users = () => {
  return (
    <>
      <Hero {...params} imageOn />
    </>
  )
}

export default Users
