
loadSprite();

  // 2️⃣ Collapsible logic (unchanged)
  const collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach((collapsible) => {
    const header = collapsible.querySelector(".collapsible__header");
    const content = collapsible.querySelector(".collapsible__content");

    function setInitialState() {
      if (window.innerWidth >= 1024) {
        collapsible.classList.add("collapsible--expanded");
        header.setAttribute("aria-expanded", "true");
        requestAnimationFrame(() => {
          content.style.maxHeight = content.scrollHeight + "px";
        });
      } else {
        collapsible.classList.remove("collapsible--expanded");
        header.setAttribute("aria-expanded", "false");
        content.style.maxHeight = "0px";
      }
    }

    setInitialState();

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

    window.addEventListener("resize", setInitialState);
  });
