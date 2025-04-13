function createStore() {
  const storeName = document.getElementById('storeName').value.trim();
  const storePhone = document.getElementById('storePhone').value.trim();

  if (!storeName || !storePhone) {
    alert("يرجى إدخال اسم المتجر ورقم الواتساب");
    return;
  }

  localStorage.setItem('storeName', storeName);
  localStorage.setItem('storePhone', storePhone);
  localStorage.setItem('products', JSON.stringify([]));
  showDashboard();
}

function showDashboard() {
  const name = localStorage.getItem('storeName');
  const phone = localStorage.getItem('storePhone');
  if (name && phone) {
    document.getElementById('storeTitle').textContent = `مرحبا بك في ${name}`;
    document.getElementById('storePhoneDisplay').textContent = phone;
    document.getElementById('storeSetup').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    renderProducts();
  }
}

function addProduct() {
  const name = document.getElementById('productName').value.trim();
  const price = parseFloat(document.getElementById('productPrice').value.trim());

  if (!name || isNaN(price)) {
    alert("يرجى إدخال اسم المنتج وسعر صحيح");
    return;
  }

  let products = JSON.parse(localStorage.getItem('products')) || [];
  products.push({ name, price });
  localStorage.setItem('products', JSON.stringify(products));
  renderProducts();
}

function renderProducts() {
  const productList = document.getElementById('productList');
  productList.innerHTML = '';
  const products = JSON.parse(localStorage.getItem('products')) || [];
  const phone = localStorage.getItem('storePhone');

  products.forEach((product, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${product.name} - ${product.price} ريال
      <button onclick="deleteProduct(${index})" style="margin-right:10px;">❌</button>
      <a href="https://wa.me/966${phone.slice(1)}?text=أرغب بشراء ${product.name} بسعر ${product.price} ريال" target="_blank">
        شراء عبر واتساب
      </a>
    `;
    productList.appendChild(li);
  });
}

function deleteProduct(index) {
  let products = JSON.parse(localStorage.getItem('products')) || [];
  products.splice(index, 1);
  localStorage.setItem('products', JSON.stringify(products));
  renderProducts();
}

function resetStore() {
  if (confirm("هل أنت متأكد من حذف المتجر؟")) {
    localStorage.clear();
    location.reload();
  }
}

window.onload = showDashboard;
