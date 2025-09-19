// 1️⃣ Import the sprite so Parcel handles it
import spriteUrl from '../images/sprite.svg';

document.querySelectorAll('.icon use').forEach(use => {
  use.setAttribute('xlink:href', `${spriteUrl}#menu`);
});


document.addEventListener("DOMContentLoaded", () => {

  // 2️⃣ Set the sprite reference for your menu icon
  const menuIconUse = document.querySelector(".nav__toggler use");
  if (menuIconUse) {
    menuIconUse.setAttribute("xlink:href", `${spriteUrl}#menu`);
  }

  // 3️⃣ Collapsible logic (unchanged)
  const collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach((collapsible) => {
    const header = collapsible.querySelector(".collapsible__header");
    const content = collapsible.querySelector(".collapsible__content");

    function setInitialState() {
      if (window.innerWidth >= 1024) {
        // Desktop → expanded
        collapsible.classList.add("collapsible--expanded");
        header.setAttribute("aria-expanded", "true");
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
