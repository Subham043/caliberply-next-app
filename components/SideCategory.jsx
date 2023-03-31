import React, { useEffect, useState } from 'react'
import styles from '@/styles/Category.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from '../axios';
import { useRouter } from 'next/router';

const SideCategory = ({data}) => {
    
  return (
<>
    {data && data.map((data1)=>
        <li key={data1.id}>
          <label>
            <span>
              <a>{data1.heading}</a>
            </span>
          </label>
        </li>
  )}

</>
  )
}

export default SideCategory