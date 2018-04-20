var $menu = $("menu");
var $menuOffset = $menu.offset().left;
var $current = $menu.find(".current a");
var $currentOffset = $current.offset().left - $menuOffset;
var $currentWidth = $current.width();
var $underline = $menu.find("span");

function slider() {
  $underline.css({
    left: $currentOffset,
    width: $currentWidth
  });
};

slider();
  
$menu.find('a').hover(
  function () {
    $underline.css({
      left: $(this).offset().left - $menuOffset,
      width: $(this).width()
    });
  }, 
  function () {
    slider();
  }
);
  