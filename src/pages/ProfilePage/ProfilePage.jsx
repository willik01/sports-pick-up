import ProfileForm from '../../components/ProfileForm/ProfileForm'
import NewUserGameForm from '../../components/NewUserGameForm/NewUserGameForm';
import './ProfilePage.css';
import UsersGamesForm from '../../components/UsersGamesForm.jsx/UsersGamesForm';

export default function ProfilePage({user}) {
  return (
    <main className="profile-page">
        <ProfileForm user={user} />
        <UsersGamesForm />
        <NewUserGameForm user={user} />
    </main>
  );
}