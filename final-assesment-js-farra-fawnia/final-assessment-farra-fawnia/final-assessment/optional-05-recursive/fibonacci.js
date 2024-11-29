function fibonacci(n) {
    if (n === 0) {
        return [0]; // fibonacci ke 0 = [0]
    } else if (n === 1) {
        return [0,1];
    }
    
    const previousFib = fibonacci(n - 1); //panggil fibonacci(n-1)
    previousFib.push(previousFib[previousFib.length - 1] + previousFib[previousFib.length - 2]); // tmbah angka berikutnya
    return previousFib;
    }
    
    // Jangan hapus kode di bawah ini!
    export default fibonacci;
    