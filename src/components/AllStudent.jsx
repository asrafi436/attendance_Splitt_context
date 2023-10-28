import React from 'react'
import { List } from './List'
import { Attend } from './Attend'
import { Absent } from './Absent'





export const AllStudent = () => {
 
  return (
    <div>
      <List/>
      <Attend/>
      <Absent/>
    </div>
  );
}
