var article = document.querySelector("article")

if (article === null) {
    alert("contnent: No articles in this document")
} else {
    const blocks = Array.from(article.children)
        .filter(e => e.getAttribute("data-component") === "text-block")
        .map(e => e.textContent)
    fetch("http://localhost:3000/viaopenai/getsummary?text=" + blocks.join("\n"), {
        method: "GET",
        // mode: "no-cors",
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            "Content-Type": "application/json"
        }
    }).then(async (res) => {
        let txt = await res.text()
        let obj = JSON.parse(txt)
        let summary = obj.summary
        console.log("asdkfjashlk")
        let i = summary.lastIndexOf(".")
        if (i > 0) {
            summary = summary.slice(0, i + 1)
        }
        alert("Summary of this BBC article \n" + summary + "\n\nClick a paragraph if you want a summary of a part of the article.")
    })
}