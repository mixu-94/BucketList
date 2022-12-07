import React from "react";
import Nav from "../components/Main/Nav";
import Navigation from "../components/Main/Navigation";
import TaskList from "../components/TaskList/TaskList";

const Home = () => {
  // TODO Funktionen für Seitenwechsel
  // useState übergaben

  return (
    <>
      <div className="text-xl text-black font-semibold m-4 border-width: 2px text-center bg-gray-400">
        <Nav />
        <br />
        <br />
        <br />
        <br />
        <TaskList />
        <h1>Ich bin die Home</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Navigation />
      </div>
    </>
  );
};

export default Home;
