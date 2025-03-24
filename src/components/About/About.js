import React from "react";
import "./About.css";

function About() {
  
  return (
    <section id="about">
      <h2 className="major">About</h2>
      <div className="bio-container">
        <div className="bio-content">
          <pre>
            {`package me.myself.and.i;

import java.util.Arrays;
import java.util.HashMap;

public class Jen {

    public static void main(String[] args) {
        String governmentName = "Jennifer Cheung";
        String spawnPoint = "Massachusetts";
        String brainLocation = "Northeastern University";
        String resume = `} 
        <a href="assets/Cheung_Resume.pdf"><u>"Resume";</u></a>
        {`  
        String[] dualCoreProcessor = {"Computer Science", "Neuroscience"};
          
        HashMap<String, Integer> freedomDate = new HashMap<>() {{
            put("Month", 12);
            put("Year", 2024);
        }};
        
        String[] packagesInstalled = {
            "CardioMaster 3000",
            "EspressoConnoisseur.jar",
            "PicassoWannabe.png",
            "ShutterBug.raw",
        };
        
        System.out.println("Compiling Jen.java...");
        System.out.println("Warning: Expect occasional energy bursts and frequent coffee breaks.");   
        System.out.println("Jen.exe is now running."); 
        System.out.println("Enjoy your day! 🌟");
    }
}`} 
          </pre>
        </div>
      </div>
    </section>
  );
};

export default About;

// TODO
// add a button to run the code
// animate the code running
// add a button to stop the code
// add a button to reset the code
// add links
