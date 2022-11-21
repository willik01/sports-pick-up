import ProfileForm from '../../components/ProfileForm/ProfileForm'
import './ProfilePage.css';

export default function ProfilePage({user}) {
  return (
    <main className="profile-page">
        <ProfileForm user={user} />
        {/* <ProfileForm /> */}
    </main>
  );
}