function factorial(n) {
    if (n < 0) {
        throw new Error('Faktorial hanya berlaku untuk bilangan bulat tidak negatif');
    }
    
 if (n === 0 || n === 1) {
    return 1; // faktorial dari 0 atau 1 = 1
 }
 return n * factorial(n - 1); 
}

// Jangan hapus kode di bawah ini!
export default factorial;
