import * as jose from "jose";
import { useAuth } from "@pangeacyber/react-auth";

const Profile = () => {
  const { user, refresh } = useAuth();

  const token = user?.active_token?.token || "";
  const isJwt = token.length > 36;
  const claims = isJwt ? jose.decodeJwt(token) : "";

  return (
    <div className="profile">
      <h1>Profile</h1>      
      <div>Email: {user?.email}</div>
      <div>First Name: {user?.profile?.first_name}</div>
      <div>Last Name: {user?.profile?.last_name}</div>
      <div>Phone: {user?.profile?.phone}</div>
      <div>Token: {user?.active_token?.token}</div>
      <p/>
      <div>JWT Content</div>
      { isJwt && (
        <div><pre>{JSON.stringify(claims, null, 4)}</pre></div>
      )}
      <p />
      <button onClick={(e) => refresh(true) }>Refresh Token</button>
    </div>
  );
}

export default Profile;