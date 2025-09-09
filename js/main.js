const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((collapsible) => {
  const header = collapsible.querySelector(".collapsible__header");
  const content = collapsible.querySelector(".collapsible__content");

  // Ensure default state
  header.setAttribute("aria-expanded", "false");
  content.style.maxHeight = "0px";

  header.addEventListener("click", () => {
    const isExpanded = collapsible.classList.contains("collapsible--expanded");

    if (isExpanded) {
      // Collapse
      collapsible.classList.remove("collapsible--expanded");
      header.setAttribute("aria-expanded", "false");
      content.style.maxHeight = "0px";
    } else {
      // Expand
      collapsible.classList.add("collapsible--expanded");
      header.setAttribute("aria-expanded", "true");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});