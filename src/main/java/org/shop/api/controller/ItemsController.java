package org.shop.api.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import java.util.List;

@RestController
@RequestMapping
public class ItemsController {

    @GetMapping("/items")
    public ResponseEntity<?> getItems(@RequestParam(name = "number") Integer numb) {
        if (numb == 0) {
            return new ResponseEntity<>("We need number",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(List.of("Coffee", "Arabibica", "Robustiya"), HttpStatus.OK);
    }

}
