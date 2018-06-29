$( document ).ready(function() {
    var $modalBtn = $(".gallery-link");
    var $modalH2 = $("h2#modal-heading");
    var $modalimg = $("#modal-img");

    $modalBtn.on("click",function () {
            var $this = $(this);
           var product_name = $this.siblings(".gallery-title").html();
           var imgsrc = $this.closest(".gallery-item").css('background-image').replace('url(','').replace(')','').replace(/\"/gi, "");
           console.log(imgsrc);
           $modalH2.html(product_name);
           $modalimg.attr("src",imgsrc);
    });

});