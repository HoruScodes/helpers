import Profile from "./Profile";
import Socials from "./Socials";
import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

function Links() {
  const { username } = useParams();

  const [profile, setProfile] = useState({
    name: "404",
    bio: "-",
    avatar:
      "https://avatars.githubusercontent.com/u/83689669?s=400&u=e474f2a5eddc2df7877163dc5fdaef5a4b920edb&v=4",
    links: [],
    total: 0,
  });
  useEffect(() => {
    console.log(username);
    fetch(`/data/${username}.json`)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
      });
  }, [username]);

  return (
    <div>
      <Profile data={profile} />
      <Socials links={profile.links} />
    </div>
  );
}

export default Links;
