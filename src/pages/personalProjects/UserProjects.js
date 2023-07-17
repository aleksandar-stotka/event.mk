import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import { useCollection } from '../../hooks/useCollection';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  console.log(projects,'pro')

  //////////////  find collection --

 const {documents} = useCollection("projects")
 console.log(documents)
  ///////////////////////////////////////////

   
      const user = firebase.auth().currentUser;
      console.log(user,"user")
      const createdBy = user ? user.uid : null;
      console.log(createdBy,"created")
      
 

     
      return (
        <>
          <p>{user.displayName}</p>
          <img src={user.photoURL} alt="user image"/>
          <h1>{user.uid}</h1>
          {user.uid == createdBy && documents && documents.map(doc => (
            <p>{doc.createdBy.id}</p>
          ))}
           
        </>
      )
    

   
 

  
};

export default ProjectList;
