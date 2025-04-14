// إضافة المتجر
document.getElementById('store-submit').addEventListener('click', function(event) {
  event.preventDefault();

  const storeName = document.getElementById('store-name').value;
  const storeLogo = document.getElementById('store-logo').files[0];

  if (!storeName || !storeLogo) {
    alert("يجب إدخال اسم المتجر وشعار المتجر.");
    return;
  }

  const reader = new FileReader();
  reader.onloadend = function() {
    document.getElementById('store-name-display').textContent = storeName;
    document.getElementById('store-logo-display').src = reader.result;

    document.getElementById('store-form').style.display = 'none';
    document.getElementById('product-form').style.display = 'block';
    document.getElementById('store-display').style.display = 'block';
  };

  reader.readAsDataURL(storeLogo);
});

// إضافة المنتج
document.getElementById('product-submit').addEventListener('click', function(event) {
  event.preventDefault();

  const productName = document.getElementById('product-name').value;
  const productPrice = document.getElementById('product-price').value;
  const productDescription = document.getElementById('product-description').value;
  const productImage = document.getElementById('product-image').files[0];

  if (!productName || !productPrice || !productDescription || !productImage) {
    alert("يجب إدخال جميع بيانات المنتج.");
    return;
  }

  const reader = new FileReader();
  reader.onloadend = function() {
    const productHtml = `
      <div class="product">
        <h4>${productName}</h4>
        <p>السعر: ${productPrice} دينار عراقي</p>
        <p>${productDescription}</p>
        <img src="${reader.result}" alt="صورة المنتج" />
      </div>
    `;
    document.getElementById('product-display').innerHTML += productHtml;
  };

  reader.readAsDataURL(productImage);
});
// رابط الواتساب مع الرقم العراقي
document.getElementById('whatsapp-link').href = 'https://wa.me/9647713914059';  // استبدل الرقم هنا
