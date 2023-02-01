import React from "react";
import lobby from "../Assets/Lobby.png";
import Chat from "../Assets/ic_chat.png";
import Assignment from "../Assets/ic_assignment.png";
import Rangking from "../Assets/ic_rangking.png";
import Profile from "../Assets/ic_profile.png";

export default function Footer() {
  return (
    <div class="flex justify-between px-8 py-2">
      <button class="hover:bg-orange-100">
        <img src={lobby} alt="lobby" />
      </button>
      <button class="hover:bg-orange-100">
        <img src={Chat} alt="chat" />
      </button>
      <button class="hover:bg-orange-100">
        <img src={Assignment} alt="assigment" />
      </button>
      <button class="hover:bg-orange-100">
        <img src={Rangking} alt="rangking" />
      </button>
      <button class="hover:bg-orange-100">
        <img src={Profile} alt="profile" />
      </button>
    </div>
  );
}
