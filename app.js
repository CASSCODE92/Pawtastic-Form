import React from 'react'; 
import ReactDOM from 'react-dom';

const pawtastic= (
    <h3>Pawtastic</h3>
    <span class="checkboxes">
    <ul>
        <input type= "checkbox" id="Human profile" class="checkbox" />
        <label for="Human profile" class="switch"></label>

        <input type= "checkbox" id="Pet basics" class="checkbox" />
        <label for="Pet basics" class="switch"></label>

        <input type= "checkbox" id="Pet details" class="checkbox" />
        <label for="Pet details" class="switch"></label>

        <input type= "checkbox" id="Confirm" class="checkbox" />
        <label for="Confirm" class="switch"></label>
    </ul>
</span>

<h6>Yay, we love dogs! Give us the basics about your pup.</h6>
<form class="input">
    <label name= "petsName">Name</label>

    <label name= "petBreed">Breed</label> 

    <label name= "petsBirthday">Birthday</label> 

    <p>Gender</p>
    <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>
        <input type="radio" id= "female"
        name="gender" value="female">
            <label for="female">Female</label>

    <p>Spayed or Neutered<p>
            <input type="radio" id="yes" name="spayedOrNeutered" value="yes">
        <label for="yes">Yes</label>
        <input type="radio" id= "no"
        name="spayedOrNeutered" value="no">
            <label for="no">No</label><br>

    <p>Weight</p>  
    <input type="radio" id="0-25 lbs " name="weight" value="0-25 lbs">
        <label for="0-25 lbs">0-25 lbs</label>

        <input type="radio" id= "25-50 lbs"
        name="weight" value="25-50 lbs">
            <label for="25-50 lbs">25-50 lbs</label>

            <input type="radio" id="50-100 lbs" name="weight" value="50-100 lbs">
        <label for="50-100 lbs">50-100 lbs</label>

        <input type="radio" id= "female"
        name="weight" value="female">
            <label for="female">Female</label>            



    
</form>
)
