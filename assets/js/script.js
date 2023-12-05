$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$(".custom-carousel").owlCarousel({
    autoWidth: true,
    autoplay:true,
    loop: true,
    center: true,
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });
  
  const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add("show");
      }
    } );
  } );

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) =>observer.observe(el));