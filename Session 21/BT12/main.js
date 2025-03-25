for (let i = 0; i < 10; i++) {
    let color = '#' + Math.floor(Math.random() * 725).toString(16);
    console.log(`%cDòng ${i + 1} với màu ngẫu nhiên`, `color: ${color}; font-size: 16px`);
  }
  