function splitTextIntoSpans(target) {
    let elements = document.querySelectorAll(target);
    elements.forEach((element) => {
        element.classList.add("split-text");
        let text = element.innerText;
        let splitText = text
            .split(" ")
            .map(function (word) {
                let char = word
                    .split("")
                    .map((char) => {
                        return `<span class="split-char">${char}</span>`;
                    })
                    .join("");
                return `<div class="split-word">${char}&nbsp</div>`;
            })
            .join("");

        element.innerHTML = splitText;
    });
}

splitTextIntoSpans(".bubble-text");

function mode() {
    let body = document.body;
    body.classList.toggle("light");
}

const myObserver = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const elements = document.querySelectorAll(".hidden");

elements.forEach((element) => myObserver.observe(element));