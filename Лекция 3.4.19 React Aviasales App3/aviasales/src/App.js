/* eslint-disable */
import './App.css';
import Header from './Components/Header/index';
import FlyCard from './Components/Fly-card/Fly-card';
import Filter from './Components/Filter/Filter';
import Btn from './Components/Button/index';

import { useDispatch, useSelector } from 'react-redux';
import { getCheapestTickets, getFastestTickets, getTicketsArray, getTicketsWithNoTransfer, getTicketsWithTwoTransfer } from './async-actions/async-actions';
import { Alert, Spin } from 'antd';

import { debounce } from 'lodash';







function App() {

  
  const dispatch = useDispatch()

  const err = useSelector(state => state.error)
  const spin = useSelector(state => state.spin)
  const tabs = useSelector(state => state.tabs)
  

  const tickets = useSelector(state => state.tickets)
  
  const arr = tickets.data

  
  const onClose = (e) => {
    console.log(e, 'I was closed.');
  }
  
  if (err.err) {
    return <Alert
    message={err.data}
    description="Error Description Error Description Error Description Error Description Error Description Error Description"
    type="error"
    closable
    onClose={onClose}
  />
  }
    return (
      <div className="App">
        {/* <button style={{width: 100, height: 100, display: 'block'}} onClick = {() => dispatch(getTicketsArray())}>Add tickets</button> */}
       <Header/>
       <Filter/>
       { spin.active && !tickets.dataReceived? <Spin/> : arr ? 
        arr.map((el, id) => {
        return <FlyCard key={id} mainData = {el} />}) : null
       }
       {
        arr.length === 0 && !spin.active ? <div 
        style={{fontSize: '28px', display: 'flex', justifyContent: 'center', width : '75%', marginTop: '10em'}}>
          По выбранным критериям билеты не найдены!
          </div>: <Btn/>
       }
      </div>
    );
  }

export default App;