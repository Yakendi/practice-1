const panes = document.querySelectorAll(".pane");

function insertRemoveButton() {
    panes.forEach(pane => {
        const removeButton = document.createElement("button");
        removeButton.textContent = "[x]";
        removeButton.classList.add("remove-button");

        pane.appendChild(removeButton);
    });
};

insertRemoveButton()