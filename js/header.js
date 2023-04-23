const header = document.querySelector('#header')

header.innerHTML += `
<nav>
<div class="navbar">
  <i class='bx bx-menu'></i>
  <div class="logo"><a href="index.html"><img src="./image/logov3.jpg" alt="" width="60px"></a></div>
  <div class="nav-links">
    <div class="sidebar-logo">
      <span class="logo-name"><img src="./image/logov3.jpg" alt="" width="60px"></span>
      <i class='bx bx-x' ></i>
    </div>
    <ul class="links">
      <li><a href="index.html">HOME</a></li>
      <li><a href="services.html">SERVICES</a></li>
      <li><a href="product-for-nail.html">PRODUCT FOR NAIL</a></li>
      <li>
        <a href="#">PRODUCT FOR LASH</a>
        <i class='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
        <ul class="htmlCss-sub-menu sub-menu">
            <li><a href="./single.html">SINGLE - LENGTH TRAY</a></li>
            <li><a href="./pre-made-fan.html">PRE-MADE FANS</a></li>
            
        </ul>
      </li>
    
  
      <li><a href="about.html">ABOUT US</a></li>
    </ul>
  </div>
  <div class="booking">
    <a href="https://www.fresha.com/fr/a/hl-beauty-ottawa-50-westwood-drive-htz1l02f/booking?menu=true" target="_blank">BOOKING NOW</a>
   
  </div>
</div>
</nav>

`