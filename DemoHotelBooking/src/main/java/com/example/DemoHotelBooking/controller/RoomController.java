package com.example.DemoHotelBooking.controller;

import com.example.DemoHotelBooking.model.Room;
import com.example.DemoHotelBooking.response.RoomResponse;
import com.example.DemoHotelBooking.service.impl.RoomServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.SQLException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/rooms")
public class RoomController {
    private final RoomServiceImpl roomService;

    @CrossOrigin("*")
    @PostMapping("/add/new-room")
    public ResponseEntity<RoomResponse> addNewRoom(
            @RequestParam("photo") MultipartFile photo,
            @RequestParam("roomType") String roomType,
            @RequestParam("roomPrice") BigDecimal roomPrice
            ) throws SQLException, IOException {
    Room savedRoom = roomService.addNewRoom(photo, roomType, roomPrice);
    RoomResponse response = new RoomResponse(savedRoom.getId(), savedRoom.getRoomType(), savedRoom.getRoomPrice());
    return ResponseEntity.ok(response);
    }
}
