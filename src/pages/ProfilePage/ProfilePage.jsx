import ProfileForm from '../../components/ProfileForm/ProfileForm'
import NewUserGameForm from '../../components/NewUserGameForm/NewUserGameForm';
import './ProfilePage.css';
import UsersGamesListForm from '../../components/UsersGamesListForm/UsersGamesListForm';

export default function ProfilePage({user}) {
  return (
    <main className="profile-page">
        <ProfileForm user={user} />
        <UsersGamesListForm />
        <NewUserGameForm user={user} />
    </main>
  );
}