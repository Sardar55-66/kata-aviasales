
import React, { useState } from 'react';

import { Checkbox } from 'antd';
import { connect } from 'react-redux';
// import {allF, noTransfersF, oneTransferF, twoTransfersF, threeTransferF} from "../Actions/Actions";
// import { bindActionCreators } from "redux";
import * as actions from '../Actions/Actions'

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

import './Filter.scss';

import { getTicketsArray, getTicketsWitThreeTransfer, getTicketsWithNoTransfer, getTicketsWithOneTransfer, getTicketsWithTwoTransfer } from '../../async-actions/async-actions';
import DisabledContext from 'antd/es/config-provider/DisabledContext';
const _ = require('lodash');















const Filter = function () {




  const filters = useSelector(state => state.filters)
  const dispatch = useDispatch()
  
  const check = filters.filters
  


    
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
      
      
      if (e.target.value === 'ALL') {
        dispatch(getTicketsArray())
      }
      if (e.target.value === 'NO') {
        dispatch(getTicketsWithNoTransfer())
      }
      if (e.target.value === 'ONE') {
        dispatch(getTicketsWithOneTransfer())
      }
      if (e.target.value === 'TWO') {
        dispatch(getTicketsWithTwoTransfer())
      }
      if (e.target.value === 'THREE') {
        dispatch(getTicketsWitThreeTransfer())
      }
      

      switch (e.target.value) {
        case 'ALL': return dispatch({type: 'ADD_ALL_FILTERS'})
        // case 'ALL': dispatch(getTicketsArray())
        case 'NO': return dispatch({type: 'ADD_FILTER', payload: 'NO'})
        case 'ONE': return dispatch({type: 'ADD_FILTER', payload: 'ONE'})
        case 'TWO': return dispatch({type: 'ADD_FILTER', payload: 'TWO'})
        case 'THREE': return dispatch({type: 'ADD_FILTER', payload: 'THREE'})
      }
      

      
     

      
     };


    
    //  if (filters.filters.includes('NO')) {
    //   dispatch(getTicketsWithNoTransfer())
    //  }

    //  if (filters.filters.includes('ONE')) {
    //   dispatch(getTicketsWithOneTransfer())
    //  }

    //  if (filters.filters.includes('TWO')) {
    //   dispatch(getTicketsWithTwoTransfer())
    //  }
    //  if (filters.filters.includes('THREE')) {
    //   dispatch(getTicketsWitThreeTransfer())
    //  }
    //  if (filters.filters.length > 3) {
    //   dispatch(getTicketsArray())
    //  }
    //  if (filters.filters.includes('ALL')) {
    //     dispatch(getTicketsArray())
    //  }
     
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