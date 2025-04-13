/* تنسيق عام للصفحة */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  direction: rtl; /* دعم النصوص من اليمين لليسار */
}

.container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
}

h1 {
  color: #007BFF;
}

label {
  display: block;
  margin-top: 10px;
}

input, textarea, button {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

#product-display {
  margin-top: 20px;
}

#product-display img {
  max-width: 100px;
  margin-top: 10px;
}

#whatsapp-link button {
  background-color: #25d366;
}

#whatsapp-link button:hover {
  background-color: #128c7e;
}
