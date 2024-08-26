import { useAuth } from "@pangeacyber/react-auth";

const Profile = () => {
  const { user, refresh } = useAuth();

  return (
    <div className="profile">
      <h1>Profile</h1>      
      <div>Email: {user?.email}</div>
      <div>First Name: {user?.profile?.first_name}</div>
      <div>Last Name: {user?.profile?.last_name}</div>
      <div>Phone: {user?.profile?.phone}</div>
      <div>Token: {user?.active_token?.token}</div>
      <p />
      <button onClick={(e) => refresh() }>Refresh Token</button>
    </div>
  );
}

export default Profile;