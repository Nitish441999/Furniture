import React, { useEffect, useState } from 'react';
import myContext from './myContext';
import { fireDB } from '../Firebase/FirebaseConfig';
import { collection, onSnapshot, query, orderBy, QuerySnapshot } from 'firebase/firestore';

function MyState({ children }) {
  const [loading, setLoading] = useState(false);


  // get all users from firebase
  const [getAllUser, setGetAllUser] = useState([]);

  const getAllUserFunction = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(fireDB, 'user'),
        orderBy('time')
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let userArray = [];
        QuerySnapshot.forEach((doc) => {
          userArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllUser(userArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };


  // get All products from firebase

  const [getAllProduct, setGetAllProduct] =useState([]);
  
  const getAllProductFunction = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDB, 'product'),
        orderBy('time')
      )

      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray =[]
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        })
        
        setGetAllProduct(productArray);
        setLoading(false)
      })
      return () => data;
      
    } catch (error) {
      console.log(error)
      setLoading(false)
      
    }
  }
  














  useEffect(() => {
    getAllUserFunction();
    getAllProductFunction();
  }, []);

  return (
    <myContext.Provider value={{ loading, setLoading, getAllUser, getAllProduct }}>
      {children}
    </myContext.Provider>
  );
}

export default MyState;
