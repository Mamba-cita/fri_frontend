import React from "react";
import AddClient from '../components/modals/AddClient';
import Clients from '../components/Clients'
import Jobs from "../components/Jobs";
import AddJob from "../components/modals/AddJob";


export default function Home() {
  return (
    <>
    <div className="d-flex gap-3 mb-4">
    <AddClient /> 
    <AddJob/>
    </div>
    <hr/>
      <Jobs />
      <hr/>
      <Clients />
    </>
  );
}
