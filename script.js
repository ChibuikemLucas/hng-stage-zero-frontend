// Optional: keep the homepage clock feature if needed
const timeEl = document.getElementById("time-ms");
if (timeEl) timeEl.textContent = Date.now();

// Contact form validation logic
const form = document.getElementById("contact-form");

if (form) {
    const successEl = document.getElementById("success");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let valid = true;

        const fields = {
            name: document.getElementById("name"),
            email: document.getElementById("email"),
            subject: document.getElementById("subject"),
            message: document.getElementById("message"),
        };

        Object.keys(fields).forEach((key) => {
            const field = fields[key];
            const errorEl = document.getElementById(`error-${key}`);
            errorEl.textContent = "";

            // Required
            if (!field.value.trim()) {
                errorEl.textContent = "This field is required.";
                valid = false;
            }
            // Email validation
            else if (key === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(field.value)) {
                errorEl.textContent = "Please enter a valid email.";
                valid = false;
            }
            // Message length
            else if (key === "message" && field.value.trim().length < 10) {
                errorEl.textContent = "Message must be at least 10 characters.";
                valid = false;
            }

            // Show or hide error visually
            if (errorEl.textContent) {
                errorEl.classList.add("active");
            } else {
                errorEl.classList.remove("active");
            }
        });

        // Show or hide success message
        if (valid) {
            successEl.classList.add("visible");
            successEl.removeAttribute("hidden");
            form.reset();
        } else {
            successEl.classList.remove("visible");
            successEl.setAttribute("hidden", true);
        }
    });
}
