import React from "react";
import { Member } from "./Member";
import { TeamMembers } from "../../data/data";
import "./team.scss"

export const Team = () => {
  return (
    <div className="team">
      <h1>Our Team</h1>
      <div className="teamBox">
        {TeamMembers?.map((member) => (
          <Member
            key={member?.id}
            mImg={member?.photo} 
            mName={`${member?.name} ${member?.surname}`}
            mPosition={member?.position}
          />
        ))}
      </div>
    </div>
  );
};
