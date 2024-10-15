function isPrime(n) {
    if (n<=1) {

        return false
        
    }

    if (n === 2 || n === 3) {

        return false;
        
    }

    for (let index = 5; index * index <= n; index+=6) {
        if (n % index ===0 || n %(index+2)===0) {
            return false
            
        }
        
    }
    return true
}

console.log(isPrime(29))
console.log(isPrime(30))