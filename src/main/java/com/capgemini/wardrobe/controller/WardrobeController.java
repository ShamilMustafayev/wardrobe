package com.capgemini.wardrobe.controller;

import com.capgemini.wardrobe.model.Wardrobe;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/wardrobe")

public class WardrobeController {

    public boolean isWardrobeOpen = false;
    public boolean isInWardrobe = false;

    @PostMapping("/name")
    public String wardrobeName(String name) {
        return "Your new wardrobe with name " + name + " has been created!";
    }


    @GetMapping("/open")
    public String openWardrobe() {
        if (isWardrobeOpen == false) {
            isWardrobeOpen = true;
            return "The wardrobe has been opened.";
        } else {
            return "The wardrobe is already opened! Please close it first.";
        }
    }

    @GetMapping("/close")
    public String closeWardrobe() {
        if (isWardrobeOpen == true) {
            isWardrobeOpen = false;
            return "The wardrobe has been closed.";
        } else {
            return "The wardrobe has already been closed! Please open it first.";
        }
    }

    @GetMapping("/enter")
    public String enterWardrobe() {
        double chance = ((Math.random() * 100) + 1);
        if (chance >= 80) {
            if (isInWardrobe == false) {
                isInWardrobe = true;
                return "You have just entered the Narnia!!!";
            } else {
                return "You are already inside the Narnia! Please leave the Narnia first.";
            }
        } else {
            return "Unfortunately you couldn't get in :(";
        }
    }

    @GetMapping("/leave")
    public String leaveWardrobe() {
        if (isInWardrobe == true) {
            isInWardrobe = false;
            return "You have just left the wardrobe.";
        } else {
            return "You are already outside of the wardrobe! Please enter it first.";
        }
    }

    @GetMapping("/kick")
    public String kickWardrobe() {
        double power = ((Math.random() * 100) + 1);
        double caught = ((Math.random() * 100) + 1);
        if (caught >= 90) {
            return "You have been caught by the housekeeper!";
        } else {
            if (power >= 90) {
                return "You have broken the wardrobe :(";
            } else {
                return "You have hurt your foot!";
            }
        }
    }
}