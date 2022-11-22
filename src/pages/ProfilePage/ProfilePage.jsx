import ProfileForm from '../../components/ProfileForm/ProfileForm'
import UserGamesForm from '../../components/UserGamesForm/UserGamesForm';
import './ProfilePage.css';

export default function ProfilePage({user}) {
  return (
    <main className="profile-page">
        <ProfileForm user={user} />
        <UserGamesForm user={user} />
    </main>
  );
}