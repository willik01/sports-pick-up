import ProfileForm from '../../components/ProfileForm/ProfileForm'

export default function ProfilePage(user, setUser) {
    
  return (
    <main className="profile-page">
        <ProfileForm user={user} setUser={setUser} />
        {console.log("i am in the profile page")}
    </main>
  );
}