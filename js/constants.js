//constants

var bca_point = 40094;
var ba_english_point = 15750;
var bba_point = 10200;
var economics_point = 2630;
var multimedia_point = 30930;
var electronics_point = 21715;
var psychology_point = 8665;
var bcom_ca_point = 19125;
var bcom_tt_point = 8175;

const lastUpdatedDate = "10-10-2025";

var total_points = bca_point+electronics_point+multimedia_point+psychology_point+economics_point+bcom_ca_point+bcom_tt_point+ba_english_point+bba_point;

// Assigning values (guarded: only update if elements exist on the page)

function assignPointIfPresent(id, value) {
  var el = document.getElementById(id);
  if (el) el.innerText = value;
}

assignPointIfPresent("bca_point", bca_point);
assignPointIfPresent("electronics_point", electronics_point);
assignPointIfPresent("multimedia_point", multimedia_point);
assignPointIfPresent("psychology_point", psychology_point);
assignPointIfPresent("economics_point", economics_point);
assignPointIfPresent("bcom_ca_point", bcom_ca_point);
assignPointIfPresent("bcom_tt_point", bcom_tt_point);
assignPointIfPresent("ba_english_point", ba_english_point);
assignPointIfPresent("bba_point", bba_point);

// main.js
window.addEventListener("load", function () {
  setCardData("bca_point", bca_point, (bca_point / total_points) * 100);

  setCardData(
    "electronics_point",
    electronics_point,
    (electronics_point / total_points) * 100
  );

  setCardData(
    "multimedia_point",
    multimedia_point,
    (multimedia_point / total_points) * 100
  );

  setCardData(
    "psychology_point",
    psychology_point,
    (psychology_point / total_points) * 100
  );

  setCardData(
    "economics_point",
    economics_point,
    (economics_point / total_points) * 100
  );

  setCardData(
    "bcom_ca_point",
    bcom_ca_point,
    (bcom_ca_point / total_points) * 100
  );

  setCardData(
    "bcom_tt_point",
    bcom_tt_point,
    (bcom_tt_point / total_points) * 100
  );

  setCardData(
    "ba_english_point",
    ba_english_point,
    (ba_english_point / total_points) * 100
  );

  setCardData("bba_point", bba_point, (bba_point / total_points) * 100);
});

function setCardData(id, value, num) {
  var element = document.getElementById(id);
  if (element) {
    element.setAttribute("data-points", value);
    element.innerText = value;
    var percentElement = element.parentNode.parentNode;
    percentElement.style.setProperty("--num", num);
  }
}
