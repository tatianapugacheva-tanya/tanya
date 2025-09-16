document.addEventListener("DOMContentLoaded", () => {
  const collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach((collapsible) => {
    const header = collapsible.querySelector(".collapsible__header");
    const content = collapsible.querySelector(".collapsible__content");

    function setInitialState() {
      if (window.innerWidth >= 1024) {
        // Desktop → expanded
        collapsible.classList.add("collapsible--expanded");
        header.setAttribute("aria-expanded", "true");
        // Use RAF to wait for layout before setting maxHeight
        requestAnimationFrame(() => {
          content.style.maxHeight = content.scrollHeight + "px";
        });
      } else {
        // Mobile → collapsed
        collapsible.classList.remove("collapsible--expanded");
        header.setAttribute("aria-expanded", "false");
        content.style.maxHeight = "0px";
      }
    }

    // Run once on load
    setInitialState();

    // Handle clicks (only on mobile)
    header.addEventListener("click", () => {
      if (window.innerWidth < 1024) {
        const isExpanded = collapsible.classList.contains("collapsible--expanded");

        if (isExpanded) {
          collapsible.classList.remove("collapsible--expanded");
          header.setAttribute("aria-expanded", "false");
          content.style.maxHeight = "0px";
        } else {
          collapsible.classList.add("collapsible--expanded");
          header.setAttribute("aria-expanded", "true");
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }
    });

    // Optional: re-check on window resize
    window.addEventListener("resize", setInitialState);
  });
});
