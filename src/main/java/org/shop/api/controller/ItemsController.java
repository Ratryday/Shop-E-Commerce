package org.shop.api.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;
import java.util.Objects;

import static java.util.Objects.isNull;

@RestController
@RequestMapping
public class ItemsController {

    @GetMapping("/items")
    public ResponseEntity<?> getItems(@RequestParam(name = "number", value = "") Integer numb) {
        if (numb == 0) {
            return new ResponseEntity<>("We need number",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(List.of("Coffee", "Arabibica", "Robustiya"), HttpStatus.OK);
    }

}
