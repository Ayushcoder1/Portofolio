import axios from "axios";

async function getUserData() {
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
}

export default async function Home() {
  const userData = await getUserData();
  return (
    <div>
      Hi there
      <br />
      {userData.name}
      <br />
      {userData.email};
    </div>
  );
}
