import React from "react";
import "./ProfileCards.css";

const ProfileCards = () => {
  const profiles = [
    { name: "Jemuel Santiago", age: 24, location: "Rizal", school: "CIIT College of Arts and Technology QC"},
    { name: "Ressie Gavin", age: 21, location: "Rizal", school: "TIP Manila" },
    { name: "Ibrahim Ouabed", age: 23, location: "Rizal", school: "National University Manila" },
  ];

  return (
    <div className="profile-container">
      {profiles.map((profile, index) => (
        <div className="profile-card" key={index}>
          <h2>{profile.name}</h2>
          <p>Age: {profile.age}</p>
          <p>Location: {profile.location}</p>
          <p>School: {profile.school}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileCards;
