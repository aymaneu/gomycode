import {user} from '../../modals/useinfo'
import {ADD_USER, DELETE_USER} from '../action/types';


const Firstusers = [

    new user("imane", "Amouna","guennach.imane@gmail.com","AmounaGu")
]

export const UserReducer = (userstate=Firstusers, action)=>{

  switch(action.type){

    case ADD_USER : return [...userstate, new user(userstate.length+1,action.payload.FirstName,action.payload.LastName, action.payload.email, action.payload.password)];

    case DELETE_USER : return [...userstate.filter(user => user.id !== action.payload.id)]



    default : return userstate;


  }


}

