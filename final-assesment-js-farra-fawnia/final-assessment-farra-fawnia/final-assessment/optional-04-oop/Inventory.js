/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
    constructor() {
        this.items = []; // menyimpan item
    }

    // menambahkan item kedalam inventaris
    addItem(item) {
        this.items.push(item);
    }

    // method menghapus item berdasar id
    removeItem(id) {
        // jika item ga ditemukan
        const itemIndex = this.items.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
          this.items.splice(itemIndex, 1); // hapus item jika ditemukan
        } else {
          console.log(`Item with ID ${id} not found!`); // Menampilkan pesan jika item tidak ditemukan
        }
      }

    // method menampilkan daftar semuanya item
    listItems() {
        return this.items.map(item => item.displayDetails()).join('\n');
    }
}


// Jangan hapus kode di bawah ini!
export default Inventory;
