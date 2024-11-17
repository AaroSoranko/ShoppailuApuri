'use strict'

const API_KEY = 'eb881aa938aeeeab11c9edaa'
const API_URL = `https://v6.exchangerate-api.com/v6/eb881aa938aeeeab11c9edaa/latest/EUR`


async function fetchExchangeRates() {
    try {
        const response = await fetch(API_URL)
        const data = await response.json()
        console.log("API:n vastaus:", data)

        
        if (data.result === 'success' && data.conversion_rates) {
            const rates = data.conversion_rates
            console.log("Rates:", rates)
            return rates
        } else {
            console.error("Virhe: valuuttakurssit eivät ole saatavilla", data)
            return null
        }
    } catch (error) {
        console.error("Virhe valuuttakurssin haussa:", error)
        return null
    }
}



// Muuntaminen SEK -> EUR
document.getElementById("calculateSek").addEventListener("click", async function() {
    const rates = await fetchExchangeRates()
    if (rates) {
        let sekValue = document.getElementById("sek").value
        document.getElementById("eur").innerHTML = (sekValue / rates.SEK).toFixed(2)
    } else {
        document.getElementById("eur").innerHTML = "Virhe valuuttakurssissa."
    }
     
})

// Muuntaminen GBP -> EUR
document.getElementById("calculateGbp").addEventListener("click", async function() {
    const rates = await fetchExchangeRates()
    if (rates) {
        let gbpValue = document.getElementById("gbp").value
        document.getElementById("eurGbp").innerHTML = (gbpValue / rates.GBP).toFixed(2)
    } else {
        document.getElementById("eurGbp").innerHTML = "Virhe valuuttakurssissa."
    }
    
})



document.getElementById("calculateUsd").addEventListener("click", async function() {
    const rates = await fetchExchangeRates()
    if (rates) {
        let usdValue = document.getElementById("usd").value
        document.getElementById("eurUsd").innerHTML = (usdValue / rates.USD).toFixed(2)
    } else {
        document.getElementById("eurUsd").innerHTML = "Virhe valuuttakurssissa."
    }
    
})






document.getElementById('calculateLength').addEventListener('click', function () {
    const feet = parseFloat(document.getElementById('feet').value) || 0
    const inches = parseFloat(document.getElementById('inches').value) || 0
    const totalInches = (feet * 12) + inches
    const result = (totalInches * 2.54).toFixed(2)
    document.getElementById('cm').textContent = result
    
})

document.getElementById('calculateWeight').addEventListener('click', function () {
    const pounds = parseFloat(document.getElementById('pounds').value) || 0;
    const result = (pounds * 0.453592).toFixed(2);
    document.getElementById('kg').textContent = result;
});

document.getElementById('calculateMeasurements').addEventListener('click', function () {
    
    
    const bust = parseFloat(document.getElementById('bust').value) || 0
    document.getElementById('cmBust').textContent = (bust * 2.54).toFixed(2)

    
    
    const underbust = parseFloat(document.getElementById('underbust').value) || 0
    document.getElementById('cmUnderbust').textContent = (underbust * 2.54).toFixed(2)

    
    
    const waist = parseFloat(document.getElementById('waist').value) || 0
    document.getElementById('cmWaist').textContent = (waist * 2.54).toFixed(2)

    
    
    const hips = parseFloat(document.getElementById('hips').value) || 0
    document.getElementById('cmHips').textContent = (hips * 2.54).toFixed(2)
    
})



fetchExchangeRates()

