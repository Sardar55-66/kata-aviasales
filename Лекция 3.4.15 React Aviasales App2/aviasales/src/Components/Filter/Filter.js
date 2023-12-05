import React, { useState } from 'react';

import { Checkbox } from 'antd';
import { connect } from 'react-redux';
// import {allF, noTransfersF, oneTransferF, twoTransfersF, threeTransferF} from "../Actions/Actions";
// import { bindActionCreators } from "redux";
import * as actions from '../Actions/Actions'

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

import './Filter.scss'
















const Filter = function (store) {




  const filters = useSelector(state => state.filters)
  const dispatch = useDispatch()
  
  const check = filters.filters

  console.log(check)
  


    
     const onChange = (e) => {

      
      if (check.includes(e.target.value) && e.target.value === 'ALL') {
        return dispatch({type: 'REMOVE_ALL_FILTERS'})
      }
      if (check.includes(e.target.value)) {
        return dispatch({type: 'REMOVE_ONE_FILTER', payload: e.target.value})
      }
      if (check.length === 3 && !check.includes('ALL')) {
         return dispatch({type: 'ADD_FIRST_FILTER', payload: 'ALL'})
      }
      if (check.includes('ALL')) {
        return dispatch({type: 'REMOVE_FIRST_FILTER', payload: 'ALL'})
      }
      
      
      

      switch (e.target.value) {
        case 'ALL': return dispatch({type: 'ADD_ALL_FILTERS'})
        case 'NO': return dispatch({type: 'ADD_FILTER', payload: 'NO'})
        case 'ONE': return dispatch({type: 'ADD_FILTER', payload: 'ONE'})
        case 'TWO': return dispatch({type: 'ADD_FILTER', payload: 'TWO'})
        case 'THREE': return dispatch({type: 'ADD_FILTER', payload: 'THREE'})
      }

      
      
     

      
     };
     
     
    return (
        <div className="filter">
            <div className="filter__title">
            Количество пересадок
            </div>

            <div className="filter__options">
      
            <label>
              <input 
            type="checkbox" value={'ALL'} 
            checked={check.includes('ALL') ? 'checked' : null}  
            onChange = {onChange}/>Все</label>

            <label>
              <input 
            type="checkbox"
            checked={check.includes('NO') ?'checked': null }
            value={'NO'} 
            onChange = {onChange}
            />Без пересадок</label>
            
            <label>
              <input 
            type="checkbox"
            checked={check.includes('ONE') ? 'checked' : null} 
            value={'ONE'}  
            onChange = {onChange}/>1 пересадка</label>

            <label><input 
            type="checkbox"
            checked={check.includes('TWO') ? 'checked' : null} 
            value={'TWO'} 
            onChange = {onChange}/>2 пересадки</label>
            
            <label>
              <input 
            type="checkbox"
            checked={check.includes('THREE') ? 'checked' : null} 
            value={'THREE'}  
            onChange = {onChange}/>3 пересадки</label>
            </div>
        </div>
    )
}



  const mapStateToProps = (filtersInitialState) => {
    return {
      all: filtersInitialState.all,
      noTransfer: filtersInitialState.noTransfer,
      oneTransfer: filtersInitialState.oneTransfer,
      twoTransfers: filtersInitialState.twoTransfers,
      threeTransfer: filtersInitialState.threeTransfer
    }
  }

  // const mapsDispatchToProps = (dispatch) => {
  //   return bindActionCreators(actions, dispatch)    
  // }

export default connect(mapStateToProps, actions)(Filter)