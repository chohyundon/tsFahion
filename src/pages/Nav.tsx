import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid;
  display: flex;
`;

const Title = styled.h2`
  height: 20px;
  display: flex;
  align-items: center;
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

type NavProps = {
  toggleTheme: () => void;
  theme: string;
};

export default function Nav({ toggleTheme, theme }: NavProps) {
  const navigate = useNavigate();

  return (
    <NavBar>
      <Title onClick={() => navigate("/")}>오늘 뭐입지 📝</Title>
      <Btn onClick={toggleTheme}>{theme === "lightTheme" ? "🌕" : "🌞"}</Btn>
    </NavBar>
  );
}
