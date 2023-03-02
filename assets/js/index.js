let depth02_height = [];
let headerHeigth = $('.header').height();
let currentWidth = $(window).width();

// 헤더 상단 고정
function headerFixed() {
    $(window).on("scroll", function(){
        let scrollTop = $(this).scrollTop();
        
        if(scrollTop > 0) {
            $('.header').addClass('fixed');
        }
        else {
            $('.header').removeClass('fixed');
        }
    });
}

// 헤더 호버 시
function headerHover() {
    $('.header__navWrap .depth-2').each(function(index){
        depth02_height[index] = $(this).innerHeight();
    });

    $('.header__navWrap').mouseenter(function(){
        $('.header').addClass('active');
        $('.header').height(headerHeigth + Math.max(...depth02_height));
    });

    $('.header').mouseleave(function(){
        $('.header').removeClass('active');
        $('.header').height(headerHeigth);
    });
}

// 헤더 언어 버튼
function headerLangsBtn() {
    $('.header__lang-btn').click(function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.header__langsWrap').stop().slideUp(500);
        }
        else {
            $(this).addClass('active');
            $('.header__langsWrap').stop().slideDown(500);
        }
        return false;
    });

    // 영역 외 클릭 시
    $(window).click(function(e){
        let virtualClass = $('.virtualClass');

        if(!virtualClass.has(e.target).length) {
            $('.header__lang-btn').removeClass('active');
            $('.header__langsWrap').stop().slideUp(500);
        }
    });
}

// 전체 메뉴 버튼
function headerFullMenuBtn() {
    $('.header__fullMenu-btn').click(function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.header__fullMenu').removeClass('active');
            $('html, body').removeClass('fixed');
            $('.header__navWrap').show();
        }
        else {
            $(this).addClass('active');
            $('html, body').addClass('fixed');
            $('.header__navWrap').hide();
            $('.header').removeClass('active');
            $('.header').height(headerHeigth);
            $('.header__fullMenu').addClass('active');
        }
    });

    $('.fullMenu__close-btn').click(function(){
        $('.header__fullMenu-btn').removeClass('active');
        $('.header__fullMenu').removeClass('active');
        $('html, body').removeClass('fixed');
        $('.header__fullMenu .depth-1 > li.active').find('.depth-2').stop().slideUp();
        $('.header__fullMenu .depth-1 > li.active').removeClass('active');
    });

     // 현재 width 값 변화 시 currentWidth에 저장
    $(window).resize(function(){
        currentWidth = $(this).width(); 
    });

    $('.header__fullMenu').click(function(){
        if(currentWidth <= 1024) {
            $('.header__fullMenu-btn').removeClass('active');
            $('.header__fullMenu').removeClass('active');
            $('html, body').removeClass('fixed');
            $('.header__fullMenu .depth-1 > li.active').find('.depth-2').stop().slideUp();
            $('.header__fullMenu .depth-1 > li.active').removeClass('active');
        }
    });
    
    
}

// width 1024이하 전체메뉴 아이템
function mobileFullMenuItem() {
    $('.header__fullMenu .depth-1 > li').click(function(){
        $(this).siblings('.active').find('.depth-2').stop().slideUp(500);
        $(this).siblings('.active').removeClass('active');
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).find('.depth-2').stop().slideUp(500);
        }
        else {
            $(this).addClass('active');
            $(this).find('.depth-2').stop().slideDown(500);
        }
    });
}


headerHover();
headerLangsBtn();
headerFullMenuBtn();
headerFixed();
mobileFullMenuItem();