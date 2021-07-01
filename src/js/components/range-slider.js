$("input[type=range]").ionRangeSlider({
  grid: true,
  hide_min_max: true,
  hide_from_to: true,
  values: [
    "Не владею", 
    "Использую готовые решения", 
    "Использую готовые решения и умею и переделывать",
    "Пишу сложный JS с нуля"
  ],
  min: 0,
  max: 3,
  from: 2
});