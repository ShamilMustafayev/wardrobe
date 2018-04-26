package com.capgemini.wardrobe.controller;

import com.capgemini.wardrobe.model.Wardrobe;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/wardrobe")

public class WardrobeController {

    public boolean isWardrobeOpen = false;
    public boolean isInWardrobe = false;
    public boolean winning = false;

    @PostMapping("/name")
    public String wardrobeName(String name) {
        return name;
    }


    @GetMapping("/open")
    public boolean openWardrobe() {
        if (isWardrobeOpen == false) {
            isWardrobeOpen=true;
            return isWardrobeOpen;
        } else {
            return false;
        }
    }

    @GetMapping("/close")
    public boolean closeWardrobe() {
        if (isWardrobeOpen == true) {
            isWardrobeOpen = false;
            return true;
        } else {
            return isWardrobeOpen;
        }
    }

    @GetMapping("/enter")
    public boolean enterWardrobe() {
        double chance = ((Math.random() * 100) + 1);
        if (chance >= 80) {
            if (isInWardrobe == false) {
                isInWardrobe = true;
                return false;
            } else {
                return true;
            }
        } else {
            return isInWardrobe;
        }
    }

    @GetMapping("/witch")
    public boolean fightWitch() {
        double winChance = ((Math.random() * 100) + 1);
        if (winChance >= 50) {
            winning = true;
            return winning;
        } else {
            return false;
        }
    }

    @GetMapping("/leave")
    public boolean leaveWardrobe() {
        if (isInWardrobe == true) {
            isInWardrobe = false;
            return true;
        } else {
            return isInWardrobe;
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

    @GetMapping("/reset")
    public void reset() {
        isWardrobeOpen = false;
        winning = false;
        isInWardrobe = false;
    }

    @GetMapping("/aslan")
    public void aslan() {
        isWardrobeOpen = false;
        winning = false;
        isInWardrobe = false;
    }
}