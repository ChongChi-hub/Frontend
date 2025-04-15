const products = [
    {
      id: 1,
      name: 'Laptop Dell XPS 15',
      price: 35990000,
      image: 'https://th.bing.com/th/id/OIP.kNp66Lw41hQJBWsxrddSZQHaHa?rs=1&pid=ImgDetMain',
      description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.'
    },
    {
      id: 2,
      name: 'iPhone 15 Pro Max',
      price: 32990000,
      image: 'https://th.bing.com/th/id/OIP.kNp66Lw41hQJBWsxrddSZQHaHa?rs=1&pid=ImgDetMain',
      description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.'
    },
    {
      id: 3,
      name: 'Samsung Galaxy S24 Ultra',
      price: 28990000,
      image: 'https://th.bing.com/th/id/OIP.kNp66Lw41hQJBWsxrddSZQHaHa?rs=1&pid=ImgDetMain',
      description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.'
    },
    {
      id: 4,
      name: 'Tai nghe Sony WH-1000XM5',
      price: 7990000,
      image: 'https://th.bing.com/th/id/OIP.kNp66Lw41hQJBWsxrddSZQHaHa?rs=1&pid=ImgDetMain',
      description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.'
    },
    {
      id: 5,
      name: 'Apple Watch Series 9',
      price: 11990000,
      image: 'https://th.bing.com/th/id/OIP.kNp66Lw41hQJBWsxrddSZQHaHa?rs=1&pid=ImgDetMain',
      description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.'
    },
    {
      id: 6,
      name: 'Loa JBL Charge 5',
      price: 3990000,
      image: 'https://th.bing.com/th/id/OIP.kNp66Lw41hQJBWsxrddSZQHaHa?rs=1&pid=ImgDetMain',
      description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.'
    },
    {
      id: 7,
      name: 'Tablet Microsoft Surface Pro 9',
      price: 25990000,
      image: 'https://th.bing.com/th/id/OIP.kNp66Lw41hQJBWsxrddSZQHaHa?rs=1&pid=ImgDetMain',
      description: 'Máy tính bảng mạnh mẽ với màn hình PixelSense và bút cảm ứng.'
    },
    {
      id: 8,
      name: 'Camera GoPro Hero 12',
      price: 12990000,
      image: 'https://th.bing.com/th/id/OIP.kNp66Lw41hQJBWsxrddSZQHaHa?rs=1&pid=ImgDetMain',
      description: 'Máy quay hành trình chống nước với chất lượng quay 5K.'
    }
  ];
  
  const productList = document.getElementById('product-list');
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  
  function displayProducts(filteredProducts) {
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'col-md-3 mb-4';
      productCard.innerHTML = `
        <div class="card h-100">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text text-success font-weight-bold">${product.price.toLocaleString('vi-VN')} VND</p>
            <button class="btn btn-primary mt-auto">Buy</button>
          </div>
        </div>
      `;
      productList.appendChild(productCard);
    });
  }
  
  searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase().trim();
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
  });
  
  displayProducts(products);
  