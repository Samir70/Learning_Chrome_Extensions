document.addEventListener("mouseup", async () => {
    text = document.getSelection().anchorNode.data
    console.log(text)
    if (text.length > 0) {
        const summary = await fetch("http://localhost:3000/viaopenai/getsummary?text=" + text, {
            method: "GET",
            // mode: "no-cors",
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                "Content-Type": "application/json"
            }
        });
        const data = JSON.parse(await summary.text());
        // console.log(data)
        alert("Summary of highlighted text is: \n" + data.summary)
    } else {
        alert("What happened to the summary?" + text)
    }
});