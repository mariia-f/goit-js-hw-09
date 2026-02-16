const formData = {
  email: '',
  message: '',
};

const feedbackForm = document.querySelector(".feedback-form");

const savedData = localStorage.getItem("feedback-form-state");
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email ;
  formData.message = parsedData.message;
  
  feedbackForm.elements.email.value = formData.email;
  feedbackForm.elements.message.value = formData.message;
}

feedbackForm.addEventListener("input", (event) => {
      const { name, value } = event.target;
 formData[name] = value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
})
    

feedbackForm.addEventListener("submit", (event) => {
    
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    if (email === "" || message === "") {
        alert('Fill please all fields');
    }
    else {
   
        console.log(formData);
        form.elements.email.value = "";
        form.elements.message.value = "";
    }
    form.reset();
})