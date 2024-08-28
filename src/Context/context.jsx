import React, { createContext, useState, useEffect, useContext } from 'react';

const CountContext = createContext();

const STORAGE_KEYS = {
  name: 'context_name',
  day: 'context_day',
  age: 'context_age',
  luck: 'context_luck',
  money: 'context_money',
  intelligence: 'context_intelligence',
  charisma: 'context_charisma',
  leadership: 'context_leadership',
  currVote: 'context_currVote',
  wife: 'context_wife',
  currPage: 'context_currPage'
};

export const CountProvider = ({ children }) => {
  const [name, setName] = useState(() => localStorage.getItem(STORAGE_KEYS.name) || "");
  const [day, setDay] = useState(() => parseInt(localStorage.getItem(STORAGE_KEYS.day), 10) || 1);
  const [age, setAge] = useState(() => parseInt(localStorage.getItem(STORAGE_KEYS.age), 10) || 20);
  const [luck, setLuck] = useState(() => parseInt(localStorage.getItem(STORAGE_KEYS.luck), 10) || 1);
  const [money, setMoney] = useState(() => parseInt(localStorage.getItem(STORAGE_KEYS.money), 10) || 50000);
  const [intelligence, setIntelligence] = useState(() => parseInt(localStorage.getItem(STORAGE_KEYS.intelligence), 10) || 1);
  const [charisma, setCharisma] = useState(() => parseInt(localStorage.getItem(STORAGE_KEYS.charisma), 10) || 1);
  const [leadership, setLeadership] = useState(() => parseInt(localStorage.getItem(STORAGE_KEYS.leadership), 10) || 1);
  const [currVote, setVote] = useState(() => parseInt(localStorage.getItem(STORAGE_KEYS.currVote), 10) || 0);
  const [wife, setWife] = useState(() => (localStorage.getItem(STORAGE_KEYS.wife)) || "No");
  const [currPage, setCurrPage] = useState(() => localStorage.getItem(STORAGE_KEYS.currPage) || "start");
  const [started, setStarted] = useState(() => localStorage.getItem(STORAGE_KEYS.started) || false);
  const [special, setSpecial] = useState(() => localStorage.getItem(STORAGE_KEYS.special) || 10);


  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.name, name);
    localStorage.setItem(STORAGE_KEYS.day, day);
    localStorage.setItem(STORAGE_KEYS.age, age);
    localStorage.setItem(STORAGE_KEYS.luck, luck);
    localStorage.setItem(STORAGE_KEYS.money, money);
    localStorage.setItem(STORAGE_KEYS.intelligence, intelligence);
    localStorage.setItem(STORAGE_KEYS.charisma, charisma);
    localStorage.setItem(STORAGE_KEYS.leadership, leadership);
    localStorage.setItem(STORAGE_KEYS.currVote, currVote);
    localStorage.setItem(STORAGE_KEYS.wife, wife);
    localStorage.setItem(STORAGE_KEYS.currPage, currPage);
    localStorage.setItem(STORAGE_KEYS.special, special);


    
  }, [name, day, age, luck, money, intelligence, charisma, leadership, currVote, wife, currPage,special]);

  return (
    <CountContext.Provider
      value={{
        name,
        setName,
        day,
        setDay,
        age,
        setAge,
        money,
        setMoney,
        luck,
        setLuck,
        intelligence,
        setIntelligence,
        charisma,
        setCharisma,
        leadership,
        setLeadership,
        currVote,
        setVote,
        wife,
        setWife,
        currPage,
        setCurrPage,
        special,
        setSpecial
      }}
    >
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => useContext(CountContext);
