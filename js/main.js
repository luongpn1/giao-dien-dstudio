// Chỉ giao diện: không gửi dữ liệu đi đâu (spec R1, R4).
(function () {
  var b = document.querySelector('.burger'), n = document.getElementById('nav');
  b.addEventListener('click', function () {
    var o = n.classList.toggle('open');
    b.setAttribute('aria-expanded', o);
  });
  n.addEventListener('click', function (e) { if (e.target.tagName === 'A') n.classList.remove('open'); });
  document.querySelectorAll('a[href="#"]').forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); }); });
  var f = document.getElementById('f'), err = document.getElementById('err'), ok = document.getElementById('ok');
  f.addEventListener('submit', function (e) {
    e.preventDefault(); ok.textContent = '';
    var miss = [];
    if (!f.ten.value.trim()) miss.push('Họ và tên');
    if (!f.sdt.value.trim()) miss.push('Số điện thoại');
    if (miss.length) { err.textContent = 'Vui lòng nhập: ' + miss.join(', ') + '.'; return; }
    err.textContent = ''; ok.textContent = 'Cảm ơn bạn! (Bản giao diện: dữ liệu chưa được gửi đi.)';
  });
  f.addEventListener('reset', function () { err.textContent = ''; ok.textContent = ''; });
})();
