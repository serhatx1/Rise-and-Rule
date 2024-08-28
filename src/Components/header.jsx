import React from 'react'
import { useCount } from '../Context/context';

     const Header = () => {
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
    
    <div className='HeaderSection'>
        <div className='HeaderFirstSection'>
            <div>
            <span>Name:</span>
             {name}
            </div>
           <div>
           <span>Money:</span>{money}$
           </div>
          
        </div>
        <div className='HeaderSecondSection'>
            <div>
          <span> Luck:</span>  {luck}

            </div>
            <div>
        <span>Int:</span>{intelligence}

            </div>
            <div>
           <span>Charisma: </span>{charisma}

            </div>
            <div>
        <span>LeaderShip:</span>{leadership}

            </div>
        </div>
        <div className='HeaderThirdSection'>
            <div>
           <span>Wife:</span>{wife}

            </div>
            <div>
            <span>Vote:</span>{currVote}%

            </div>
            <div>
            <span>Day</span>{day}

            </div>
        </div>
    </div>
  )
}
export default Header