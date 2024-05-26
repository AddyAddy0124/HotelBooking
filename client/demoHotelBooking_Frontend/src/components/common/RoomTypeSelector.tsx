import React, { useEffect, useState } from 'react'
import { getRoomTypes } from '../utils/ApiFunctions';

const RoomTypeSelector = () => {
  const [roomTypes, setRoomTypes] = useState([]);
  const [showNewRoomTypeInput , setShowNewRoomTypeInput] = useState(false);
  const [newRoomType, setNewRoomType] = useState("");

  useEffect(() => {
    getRoomTypes().then((data) => {
        setRoomTypes(data);
    })
  }, [])
 
 const handleNewRoomInputCHange = (e) => {
    setNewRoomType()
 }

  return (
    <div>

    </div>
  )
}

export default RoomTypeSelector