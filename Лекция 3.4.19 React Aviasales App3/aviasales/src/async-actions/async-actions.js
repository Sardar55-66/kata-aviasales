import '../index.js'
import { Cheap, getError, getMoreTicketsData, getTickets, spinnerActivate } from "../Components/Actions/Actions"
import {debounce, set} from 'lodash'
const _ = require('lodash')


export const getTicketsArray = function () {

     return async (dispatch) => {

        dispatch(spinnerActivate())

            try {
                const res =  await fetch('https://aviasales-test-api.kata.academy/search')
                const res_1 = await res.json()
        
                
                const data = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${res_1.searchId}`)
                const newData = await data.json()
                const tickets = await newData.tickets
                
                 dispatch(getTickets(tickets))
                
                } catch (error) {
                    //dispatch(getError(error))
                    console.log(error)
                }
    }       
}


export const getTicketsWithNoTransfer = function () {

    return async (dispatch) => {

       dispatch(spinnerActivate())

           try {
               const res =  await fetch('https://aviasales-test-api.kata.academy/search')
               const res_1 = await res.json()
       
               
               const data = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${res_1.searchId}`)
               const newData = await data.json()
               const tickets = await newData.tickets
               const noTransfer = []
               
               tickets.filter(el => el.segments[0].stops.length === 0 ? noTransfer.push(el): null)
               console.log(noTransfer)
               dispatch(getTickets(noTransfer))
               } catch (error) {
                   //dispatch(getError(error))
                   console.log(error)
               }
   }       
}

export const getTicketsWithOneTransfer = function () {

    return async (dispatch) => {

       dispatch(spinnerActivate())

           try {
               const res =  await fetch('https://aviasales-test-api.kata.academy/search')
               const res_1 = await res.json()
       
               
               const data = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${res_1.searchId}`)
               const newData = await data.json()
               const tickets = await newData.tickets
               const oneTransfer = []
               
               tickets.filter(el => el.segments[0].stops.length === 1 ? oneTransfer.push(el): null)
               dispatch(getTickets(oneTransfer))
               } catch (error) {
                   //dispatch(getError(error))
                   console.log(error)
               }
   }       
}

export const getTicketsWithTwoTransfer = function () {

    return async (dispatch) => {

       dispatch(spinnerActivate())

           try {
               const res =  await fetch('https://aviasales-test-api.kata.academy/search')
               const res_1 = await res.json()
       
               
               const data = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${res_1.searchId}`)
               const newData = await data.json()
               const tickets = await newData.tickets
               const twoTransfers = []
               
               tickets.filter(el => el.segments[0].stops.length === 2 ? twoTransfers.push(el): null)
               dispatch(getTickets(twoTransfers))
               } catch (error) {
                  // dispatch(getError(error))
                  console.log(error)
               }
   }       
}

export const getTicketsWitThreeTransfer = function () {

    return async (dispatch) => {

       dispatch(spinnerActivate())

           try {
               const res =  await fetch('https://aviasales-test-api.kata.academy/search')
               const res_1 = await res.json()
       
               
               const data = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${res_1.searchId}`)
               const newData = await data.json()
               const tickets = await newData.tickets
               const threeTransfer = []
               
               tickets.filter(el => el.segments[0].stops.length === 3 ? threeTransfer.push(el): null)
               dispatch(getTickets(threeTransfer))
               } catch (error) {
                   //dispatch(getError(error))
                   console.log(error)
               }
   }       
}

export const getCheapestTickets = function () {

    return async (dispatch) => {

       dispatch(spinnerActivate())

           try {
               const res =  await fetch('https://aviasales-test-api.kata.academy/search')
               const res_1 = await res.json()
       
               
               const data = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${res_1.searchId}`)
               const newData = await data.json()
               const tickets = await newData.tickets
               const cheapest = []
               

               tickets.map(el => {
                let max = tickets[0].price
                if (el.price < max) {
                    max = el.price
                    cheapest.push(el)
                } return max
               })
               dispatch(getTickets(cheapest))
               } catch (error) {
                   //dispatch(getError(error))
                   console.log(error)
               }
   }       
}

export const getFastestTickets = function () {

    return async (dispatch) => {

       dispatch(spinnerActivate())

           try {
               const res =  await fetch('https://aviasales-test-api.kata.academy/search')
               const res_1 = await res.json()
       
               
               const data = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${res_1.searchId}`)
               const newData = await data.json()
               const tickets = await newData.tickets
               const fastest = []
               

               tickets.map(el => {
                let max = tickets[0].segments[0].duration
                if (el.segments[0].duration < max) {
                    max = el.segments[0].duration
                    fastest.push(el)
                } 
               })
               
               dispatch(getTickets(fastest))
               } catch (error) {
                   console.log(error)
               }
   }       
}




export const getOptimalTickets = function () {

    return async (dispatch) => {

       dispatch(spinnerActivate())

           try {
               const res =  await fetch('https://aviasales-test-api.kata.academy/search')
               const res_1 = await res.json()
       
               
               const data = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${res_1.searchId}`)
               const newData = await data.json()
               const tickets = await newData.tickets
                
                 dispatch(getTickets(tickets))
               } catch (error) {
                   console.log(error)
               }
   }       
}



export const getFiveMoreTickets = function () {

    return async (dispatch) => {

       const res =  await fetch('https://aviasales-test-api.kata.academy/search')
       const res_1 = await res.json()

       const data = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${res_1.searchId}`)
       const newData = await data.json()
       const tickets = await newData.tickets
       dispatch(getMoreTicketsData(tickets)) 
   }       
}