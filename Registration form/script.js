let today = new Date().toISOString().split("T")[0];
document.getElementById("Dob").max = today;


function validateForm() {
    let pattern = /[0-9]/;

    let fname = document.getElementById("FirstName").value;
    let lname = document.getElementById("LastName").value;
    let email = document.getElementById("Email").value;
    let contact = document.getElementById("Contact").value;
    let gender = document.getElementById("Gender").value;
    let dateofbirth = document.getElementById("Dob").value;

    // First Name
    if (fname == "") {
        document.getElementById("fnameError").innerText = "Please fill first name";
    } else if (pattern.test(fname)) {
        document.getElementById("fnameError").innerText = "Invalid first name";
    } else {
        document.getElementById("fnameError").innerText = "";
    }

    // Last Name
    if (lname == "") {
        document.getElementById("lnameError").innerText = "Please fill last name";
    } else if (pattern.test(lname)) {
        document.getElementById("lnameError").innerText = "Invalid last name";
    } else {
        document.getElementById("lnameError").innerText = "";
    }

    // Email
    if (email == "") {
        document.getElementById("emailError").innerText = "Please fill email";
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Contact
    if (contact == "") {
       document.getElementById("contactError").innerText = "Please fill contact";
    }
    else if (contact.length > 10) {
        document.getElementById("contactError").innerText = "Invalid contact number";
    }
    else if (contact.length < 10) {
        document.getElementById("contactError").innerText = "Contact must be 10 digits";
    }
    else {
        document.getElementById("contactError").innerText = "";
    }
    
    // Gender
    if (gender == "") {
        document.getElementById("genderError").innerText = "Please select gender";
    }else{
        document.getElementById("genderError").innerText = "";
    }

    // Date of Birth
    let today = new Date();
    let dob = new Date(dateofbirth);

    if (dateofbirth == "") {
        document.getElementById("dobError").innerText = "Please select date of birth";
    } else if (dob > today) {
        document.getElementById("dobError").innerText = "Future date not allowed";
    } else {
        document.getElementById("dobError").innerText = "";
    }
}