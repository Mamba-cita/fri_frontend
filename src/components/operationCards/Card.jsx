import React, { useState } from "react";
import {motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Card.css";
import { UilTimes } from "@iconscout/react-unicons";
import  Jobs from '../Jobs'

export default function Card(props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactedCard param={props} setExpanded={() => setExpanded(true)} />
      )}

      <div className="card"></div>
    </AnimateSharedLayout>
  );
}

//CompactedCard

function CompactedCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
      layoutId='expandableCard'

    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="details">
        <Png />
        <span>${param.value}</span>
        <span>Last 24HRs</span>
      </div>
    </motion.div>
  );
}

function ExpandedCard({ param, setExpanded }) {
  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId='expandableCard'
    >
      <div style={{alignSelf: 'flex-end',cursor:'pointer',color:'white'}}>
        <UilTimes onClick = {setExpanded } 
            
        />
      </div>

      <span>{param.title}</span>
      <div className="movesContainer">
        <Jobs/>
      </div>
      <span>Last 24HRs</span>
    </motion.div>
  );
}
