package com.example.DemoHotelBooking.repository;

import com.example.DemoHotelBooking.model.BookedRoom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookedRoomRepository extends JpaRepository<BookedRoom, Long> {
}
