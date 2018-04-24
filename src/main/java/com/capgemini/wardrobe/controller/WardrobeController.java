package com.capgemini.wardrobe.controller;

import com.capgemini.wardrobe.model.Wardrobe;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/register")

public class WardrobeController {

    @GetMapping("/test/{name}")
    public Wardrobe test(@PathVariable String name)
    {
        return new Wardrobe (name);
    }

}
