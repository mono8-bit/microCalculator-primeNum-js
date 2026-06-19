function isPrime(num){
    if (num===2) {
        return true
    }
    else if (num <= 1 || num%2===0){
        return false
    }
    for (let i=3; i<=Math.sqrt(num); i+=2){
        if (num%i===0){
            return false
        }
    }
    return true
}
console.log(isPrime(11))


const btn = document.querySelector('.primeNum')
btn.addEventListener('click', ()=>{
    const num = prompt()
    console.log(isPrime(num))
})