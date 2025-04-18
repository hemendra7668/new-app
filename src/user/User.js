import React, { useEffect, useState } from "react";

const User = () => {
  const [userNames, setuserNames] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "http://20.244.56.144/evaluation-service/users", {
            headers: {
              Authorization: "Bearer ",
            },
          }
        );
        const data = await response.json();
        console.log(data);
        setuserNames(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <p>Top user list</p>

      <ul>
        {userNames.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </>
  );
};
export default User;
