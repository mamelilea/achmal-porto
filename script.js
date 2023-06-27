// pada saat link di klik


$(".page-scroll").on('click', function() {

    // ambil isi href

    var tujuan = $(this).attr('href');
    
    // tangkap elemennya
    var elemenTujuan = $(tujuan);

    // pindah scroll
    $('body').animate({
        scrollTop: elemenTujuan.offset().top
    },1000,'easeOutCubic');

});





// parallax
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();


    $('.heading img').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.heading h1').css({
        'transform' : 'translate(0px, '+ wScroll*2 +'%)'
    });

    $('.heading p').css({
        'transform' : 'translate(0px, '+ wScroll*6 +'%)'
    });

});

