import * as jose from "jose";
import { useAuth } from "@pangeacyber/react-auth";
import { useState } from "react";

const Profile = () => {
  const { user, refresh } = useAuth();
  const [loading, setLoading] = useState(false);

  const token = user?.active_token?.token || "";
  const isJwt = token.length > 36;
  const claims = isJwt ? jose.decodeJwt(token) : "";

  const handleRefresh = async () => {
    setLoading(true);
    await refresh();
    setLoading(false);
  }

  return (
    <div className="profile">
      <h1>Profile</h1>
      <div>Username: {user?.username}</div>
      <div>Email: {user?.email}</div>
      {user?.profile?.first_name && <div>First Name: {user?.profile?.first_name}</div>}
      {user?.profile?.last_name && <div>Last Name: {user?.profile?.last_name}</div>}
      {user?.profile?.phone && <div>Phone: {user?.profile?.phone}</div>}
      <div>JWT:</div>
      {isJwt ? <div style={{ paddingLeft: "12px" }}><pre>{JSON.stringify(claims, null, 4)}</pre></div>
        : <div>Token: {user?.active_token?.token}</div>}
      <p />
      <button onClick={(e) => handleRefresh()} disabled={loading}>Refresh Token</button>
    </div>
  );
}

export default Profile;