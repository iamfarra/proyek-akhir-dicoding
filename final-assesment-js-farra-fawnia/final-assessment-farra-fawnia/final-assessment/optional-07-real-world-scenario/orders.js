// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = []; // ARRAY KOSONG UNTUK MENYIMPAN PESANAN

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  // Menghitung total dari semua item yang sudah dipesan
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  // objek pesanan baru
  const newOrder = {
    id: generateUniqueId(), // id untuk pesanan
    customerName, // Nama pelanggan
    items, // Daftar item yang dipesan
    totalPrice, // Total harga dari semua item
    status: 'Menunggu' //Status awal pesanan
  };

  // menambahkan pesananan baru
  orders.push(newOrder);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.find(order => order.id === orderId);
  // kalau pesanan ditemukan, perbarui status pesanan
  if (order) {
    order.status = status;
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {

  return orders
  .filter(order => order.status === 'Selesai') // memilih pesanan yang statusnya sudah selesai
  .reduce((total, order) => total + order.totalPrice, 0); // Menjumlahkan total harga 
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  // Menghapus pesanan dengan ID
  orders = orders.filter(order => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
