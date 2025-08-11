const form = document.getElementById("form");
const submitButton = document.getElementById("submit-button");
const messageDiv = document.getElementById("message");
const fileInput = document.getElementById("fileInput");
const fileNameDisplay = document.getElementById("fileNameDisplay");


//form.addEventListener("submit", async function (e) {
async function submitMarks() {
    //e.preventDefault();

    messageDiv.textContent = "Submitting please wait...";
    messageDiv.style.display = "block";
    messageDiv.style.backgroundColor = "beige";
    messageDiv.style.color = "black";
    submitButton.disabled = true;
    submitButton.classList.add("is-loading");

    try {

        const formDataObj = {
            Subject: document.getElementById("subjectSelect").value
        };



        // Submit form data
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyP4nyA09Rjrt234XrLZA4CaYezFbSyGblAE2EGf8rFSN9GGuaW-g4xsAg6QrrHP0nzig/exec';


        const response = await fetch(scriptURL, {
            redirect: "follow",
            method: "POST",
            body: JSON.stringify(formDataObj),
            headers: {
                "Content-Type": "text/plain;charset=utf-8",
            },
        });

        const data = await response.json();

        if (data.status === "success") {
            messageDiv.textContent =
                data.message || "Data submitted successfully!";
            messageDiv.style.backgroundColor = "#48c78e";
            messageDiv.style.color = "black";
            //form.reset();
            //fileNameDisplay.textContent = "No file selected";
            showSubmitted();
        } else {
            throw new Error(data.message || "Submission failed");
        }
    } catch (error) {
        console.error("Error:", error);
        messageDiv.textContent = "Error: " + error.message;
        messageDiv.style.backgroundColor = "#f14668";
        messageDiv.style.color = "white";
    } finally {
        submitButton.disabled = false;
        submitButton.classList.remove("is-loading");

        setTimeout(() => {
            messageDiv.textContent = "";
            messageDiv.style.display = "none";
        }, 4000);
    }
}

