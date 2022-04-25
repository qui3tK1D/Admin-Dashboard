const popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

const category = ["fruit", "drink"];
const subCat = [
  {
    name: "apple",
    cat_id: 0,
  },
  {
    name: "orange",
    cat_id: 0,
  },
  { name: "CocaCola", cat_id: 1 },
];

const optionCat = document.querySelector("#item-cat");
const optionSub = document.querySelector("#item-subtype");

category.map((x, i) => {
  const markUp = `<option value="${i}">${x}</option>`;
  optionCat.insertAdjacentHTML("beforeend", markUp);
});

const generateSubcat = function (dataSub) {
  dataSub.map((x) => {
    const markUp = `<option value="${x.cat_id}">${x.name}</option>`;
    optionSub.insertAdjacentHTML("beforeend", markUp);
  });
};
generateSubcat(subCat);

optionCat.addEventListener("change", function () {
  const data = subCat.filter((x) => x.cat_id === +this.value);
  console.log(data);
  optionSub.innerHTML = `<option value="" selected disabled>Choose a Subcategory</option>`;
  generateSubcat(data);
});
