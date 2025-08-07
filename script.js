function copyNumber(btn) {
  const number = btn.closest('.number-card').querySelector('.number').textContent;
  navigator.clipboard.writeText(number).then(() => {
    alert("Nomor berhasil disalin: " + number);
  });
}
