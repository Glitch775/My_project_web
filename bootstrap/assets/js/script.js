  // الأرقام المستهدفة
  let targetVisitors = 500 + Math.floor(Math.random() * 300);
  let targetCustomers = 150 + Math.floor(Math.random() * 500);
  
  // دالة للعد
  function countUp(target, element) {
      let count = 0;
      let interval = setInterval(() => {
          if (count < target) {
              count++;
              element.innerText = count + "+";
          } else {
              clearInterval(interval);
          }
      }, 10); // سرعة العد (10 مللي ثانية)
  }

  // بدء العد عند فتح الصفحة
  window.onload = function() {
      countUp(targetVisitors, document.getElementById('visitorCount'));
      countUp(targetCustomers, document.getElementById('customerCount'));
  };