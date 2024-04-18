document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".checkbox");
    const submit = document.querySelector(".submit");
    const hideShow = document.querySelectorAll(".submit-div p");
    let checkedCount = 0;

    submit.disabled = true;
    hideShow.forEach(p => p.style.display = "none");

    function updateSubmit() {
        if (checkedCount) {
            submit.disabled = false;
            submit.style.opacity = 1;
            hideShow.forEach(p => p.style.display = "block");

        } else {
            submit.disabled = true;
            submit.style.opacity = .4;
            hideShow.forEach(p => p.style.display = "none");
        }
    }

    function stylingBox(checkbox){
        const gParent = checkbox.parentElement.parentElement;
        const parent = checkbox.parentElement;
        const description = checkbox.previousElementSibling;
        gParent.classList.toggle("stylingBorder");
        parent.classList.toggle("styleBox");
        description.classList.toggle("descptn");
    }

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                checkedCount++;
                stylingBox(checkbox);
                updateSubmit();
            } else {
                checkedCount--;
                stylingBox(checkbox);
                if (checkedCount === 0) {
                    updateSubmit();
                }
            }
        });
    });
});
