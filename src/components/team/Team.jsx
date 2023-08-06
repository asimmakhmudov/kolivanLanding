import React from "react";
import { Member } from "./Member";
import { TeamMembers } from "../../data/data";
import "./team.scss"
import { useTranslation } from "react-i18next";

export const Team = () => {
  const { t } = useTranslation();
  return (
    <div className="team" id="team">
      <h1>{t("team.header")}</h1>
      <div className="teamBox">
        {TeamMembers?.map((member) => (
          <Member
            key={member?.id}
            mImg={member?.photo} 
            mName={`${member?.name} ${member?.surname}`}
            mPosition={member?.position}
            mLinkedin={member?.linkedin}
          />
        ))}
      </div>
    </div>
  );
};
