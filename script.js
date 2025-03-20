document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".project").forEach(project => {
        project.addEventListener("mouseover", () => {
            project.style.boxShadow = "0px 4px 10px rgba(255, 111, 0, 0.6)";
        });
        project.addEventListener("mouseleave", () => {
            project.style.boxShadow = "none";
        });
    });
});
