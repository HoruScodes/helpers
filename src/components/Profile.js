import React from "react";

import { Badge } from "primereact/badge";

import { Avatar } from "primereact/avatar";

// {
//   props : {
//     data : {
//       name: DynamicsCompressorNode

//     }
//   }
// }

function Profile({ data: { avatar, name, bio, total, links } }) {
  // const { avatar, name, bio } = data;
  return (
    <div>
      <div className="p-d-flex p-jc-center p-ai-center">
        <Avatar
          image={avatar}
          size="xlarge"
          shape="circle"
          className="p-overlay-badge"
        >
          <Badge value={links.length} severity="info" />
          {console.log(avatar, name, bio, total)}
        </Avatar>
        <h1 className="p-m-2">{name} </h1>
      </div>

      <div className="p-d-flex p-jc-center">
        <p> {bio}!</p>
      </div>
    </div>
  );
}
export default Profile;
