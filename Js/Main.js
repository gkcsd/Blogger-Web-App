$(document).ready(function () {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  // Click Event on toggle menu
  $toggleCollapse.click(function () {
    $nav.toggleClass("collapse");
  });
});
