$("#dataTable").DataTable();
const btnExpand = document.querySelector(".expand");
btnExpand.addEventListener("click", function () {
  this.closest(".card").classList.toggle("expansive-dataTable");

  this.querySelector(".d-flex").classList.toggle("feather-minimize-2");
});
