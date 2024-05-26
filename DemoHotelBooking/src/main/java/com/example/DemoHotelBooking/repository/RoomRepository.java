package com.example.DemoHotelBooking.repository;

import com.example.DemoHotelBooking.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {

}
