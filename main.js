const container = document.querySelector(".container")
const joke = document.querySelector(".joke")
const setup = document.querySelector(".setup")
const delivery = document.querySelector(".delivery")
const nextButton = document.querySelector(".nextButton")

function fetchData() {
    fetch("https://v2.jokeapi.dev/joke/Any")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data.type)
            if (data.type === "single") {
                return (joke.innerHTML = data.joke,
                    setup.innerHTML = "",
                    delivery.innerHTML = "")
            }
            else {
                return (setup.innerHTML = data.setup,
                    delivery.innerHTML = data.delivery,
                    joke.innerHTML = "")
            }
        })
}

nextButton.addEventListener("click", () => {
    fetchData()
})
