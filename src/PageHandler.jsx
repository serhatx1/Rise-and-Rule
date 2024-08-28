import React from 'react'
import { useCount } from './Context/context';
import Dashboard from './Pages/Dashboard';
import Header from './Components/header.jsx';
import { Start } from './Pages/Start.jsx';

export const PageHandler = () => {
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
        <Header/>
        {currPage=="start"&&<Start/>}
    </div>
  )
}
