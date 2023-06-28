package org.shop.api.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController()
@RequestMapping("/main")
public class HelloController {
    @GetMapping("/index")
    public String index() {
        return "index";
    }

    @GetMapping("/items")
    public String[] getItems() {
        return new String[] {"Coffee", "Arabibica", "Robustiya"};
    }

}
