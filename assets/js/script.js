$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: false,
    autoplay:true,
    autoWidth: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    dots: false,
    rewind: true,
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

 