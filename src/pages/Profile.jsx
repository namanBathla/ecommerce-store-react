import { useParams } from 'react-router-dom';

const Profile = () => {
    const params = useParams()
  return (
    <div>Welcome user {params.username}</div>
  )
}

export default Profile