import React from 'react';

import { CartContext } from "../../context/cartContext";
import { useContext } from "react";
import { useEffect, useState} from 'react';
import { db } from '../../firebase/client'
import {getDoc, doc } from 'firebase/firestore'



const Checkout = () => {



  return (
    <div>

<p> checkout </p>

    </div>
  );
};

export default Checkout;
