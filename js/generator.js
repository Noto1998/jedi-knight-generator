let generator = value => {
    let question = `怎样才能成为一名${value}？`
    let answer = `首先，你要知道${value}是干什么的。其次，要知道成为${value}的资格是什么。` +
    `第三，找出自己与前两项不一样，或者有差距的地方。第四，根据差距完善自己。第五，成为${value}。`
    document.getElementById("question").innerHTML = question
    document.getElementById("answer").innerHTML = answer
}

window.onload = () => {
    
    generator("绝地武士")// init

    document.getElementById("btn").addEventListener("click", () => {
        let value = document.getElementById("input").value
        if ("" != value) {
            generator(value)
        }
    })

    document.getElementById("copy").addEventListener("click", () => {
        let string = document.getElementById("question").innerHTML + "\n" + document.getElementById("answer").innerHTML
        navigator.clipboard.writeText(string)
    })
}