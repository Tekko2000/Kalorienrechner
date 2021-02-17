let bodySize = document.getElementById("bodySize")
let userAge = document.getElementById("userAge")
let userWeigth = document.getElementById("userWeigth")
let female = document.getElementById("female")
let male = document.getElementById("male")
let palFactor = document.getElementById("palFactor")

function berechne() {
    let mann = (664.7 + (13.7 * userWeight.value) + (5 * bodySize.value) - (6.8 * userAge.value))
    let frau = (655.1 + (9.6 * userWeight.value) + (1.8 * bodySize.value) - (4.7 * userAge.value))

    let sleepM = (mann * 0.95)
    let sitM = (mann * 1.2)
    let officeM = (mann * 1.5)
    let truckM = (mann * 1.7)
    let waiterM = (mann * 1.9)
    let workerM = (mann * 2.2)

    let sleepF = (frau * 0.95)
    let sitF = (frau * 1.2)
    let officeF = (frau * 1.5)
    let truckF = (frau * 1.7)
    let waiterF = (frau * 1.9)
    let workerF = (frau * 2.2)

    if (male.checked || female.checked) {
        event.preventDefault()
        switch (palFactor.value) {
            case "sleep":
                grund.innerHTML = mann.toFixed(0) + " kcal"
                gesamt.innerHTML = sleepM.toFixed(0) + " kcal"
                break
            case "sit":
                grund.innerHTML = mann.toFixed(0) + " kcal"
                gesamt.innerHTML = sitM.toFixed(0) + " kcal"
                break
            case "office":
                grund.innerHTML = mann.toFixed(0) + " kcal"
                gesamt.innerHTML = officeM.toFixed(0) + " kcal"
                break
            case "work":
                grund.innerHTML = mann.toFixed(0) + " kcal"
                gesamt.innerHTML = truckM.toFixed(0) + " kcal"
                break
            case "mechanic":
                grund.innerHTML = mann.toFixed(0) + " kcal"
                gesamt.innerHTML = waiterM.toFixed(0) + " kcal"
                break
            case "worker":
                grund.innerHTML = mann.toFixed(0) + " kcal"
                gesamt.innerHTML = workerM.toFixed(0) + " kcal"
                break

        } if (female.checked) {
            switch (palFactor.value) {
                case "sleep":
                    grund.innerHTML = frau.toFixed(0) + " kcal"
                    gesamt.innerHTML = sleepF.toFixed(0) + " kcal"
                    break
                case "sit":
                    grund.innerHTML = frau.toFixed(0) + " kcal"
                    gesamt.innerHTML = sitF.toFixed(0) + " kcal"
                    break
                case "office":

                    grund.innerHTML = frau.toFixed(0) + " kcal"
                    gesamt.innerHTML = officeF.toFixed(0) + " kcal"
                    break
                case "work":
                    grund.innerHTML = frau.toFixed(0) + " kcal"
                    gesamt.innerHTML = truckF.toFixed(0) + " kcal"
                    break
                case "mechanic":
                    grund.innerHTML = frau.toFixed(0) + " kcal"
                    gesamt.innerHTML = waiterF.toFixed(0) + " kcal"
                    break
                case "worker":
                    grund.innerHTML = frau.toFixed(0) + " kcal"
                    gesamt.innerHTML = workerF.toFixed(0) + " kcal"
                    break
            }
        }
    }
}