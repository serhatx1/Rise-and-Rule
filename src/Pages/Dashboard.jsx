import React from 'react';
import { useCount } from '../Context/context.jsx';

const Dashboard = () => {
  const {
    name, setName,
    day, setDay,
    age, setAge,
    money, setMoney,
    luck, setLuck,
    intelligence, setIntelligence,
    charisma, setCharisma,
    leadership, setLeadership,
    currVote, setVote,
    wife, setWife,
    currPage, setCurrPage
  } = useCount();

  return (
    <div>
    </div>
    
)}
export default Dashboard 