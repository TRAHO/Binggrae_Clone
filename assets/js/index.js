let depth02_height = [];
let headerTopHeight = $('.header__top').innerHeight();
let headerMainHeight = $('.header__main').innerHeight();
let headerHeight = headerTopHeight + headerMainHeight;
let currentWidth = $(window).width();

if($('.header__top').css('display') == 'none') {
    headerHeight = headerMainHeight + 0;
    $('.header').height(headerHeight);
}
else {
    headerHeight = headerTopHeight + headerMainHeight;
    $('.header').height(headerHeight);
}

console.log(headerHeight);
 // 현재 width 값 변화 시 currentWidth에 저장
$(window).resize(function(){
    currentWidth = $(this).width();
    headerTopHeight = $('.header__top').innerHeight();
    headerMainHeight = $('.header__main').innerHeight();

    $('.header__navWrap .depth-2').each(function(index){
        depth02_height[index] = $(this).innerHeight();
    });

    if($('.header__top').css('display') == 'none') {
        headerHeight = headerMainHeight + 0;
        $('.header').height(headerHeight);
    }
    else {
        headerHeight = headerTopHeight + headerMainHeight;
        $('.header').height(headerHeight);
    }
    console.log(headerHeight);

    // width 1024이상 fullMenu depth-2 초기화
    if($('.header__fullMenu .depth-1 > li').hasClass('active') && currentWidth > 1024) {
        $('.header__fullMenu .depth-1 > li').find('.depth-2').css('display', '');
        $('.header__fullMenu .depth-1 > li').removeClass('active');
    }
});

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
        $('.header').height(headerHeight + Math.max(...depth02_height));
    });

    $('.header').mouseleave(function(){
        $('.header').removeClass('active');
        $('.header').height(headerHeight);
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
            $('.header__navWrap').css('display', '');
        }
        else {
            $(this).addClass('active');
            $('html, body').addClass('fixed');
            $('.header__navWrap').hide();
            $('.header').removeClass('active');
            $('.header').height(headerHeight);
            $('.header__fullMenu').addClass('active');
        }
    });

    $('.fullMenu__close-btn').click(function(){
        $('.header__fullMenu-btn').removeClass('active');
        $('.header__fullMenu').removeClass('active');
        $('html, body').removeClass('fixed');
        $('.header__fullMenu .depth-1 > li.active').find('.depth-2').stop().slideUp(function(){
            $(this).css('display', '');
        });
        $('.header__fullMenu .depth-1 > li.active').removeClass('active');
        $('.header__navWrap').css('display', '');
    });

    $('.header__fullMenu').click(function(){
        if(currentWidth <= 1024) {
            $('.header__fullMenu-btn').removeClass('active');
            $('.header__fullMenu').removeClass('active');
            $('html, body').removeClass('fixed');
            $('.header__fullMenu .depth-1 > li.active').find('.depth-2').stop().slideUp(function(){
                $(this).css('display', '');
            });
            $('.header__fullMenu .depth-1 > li.active').removeClass('active');
            $('.header__navWrap').css('display', '');
        }
    });
    
    $('.fullMenu__Container').click(function(){
        return false;
    });
}

// width 1024이하 전체메뉴 아이템
function mobileFullMenuItem() {
    $('.header__fullMenu .depth-1 > li').click(function(){
        if(currentWidth <= 1024) {
            $(this).siblings('.active').find('.depth-2').stop().slideUp(500, function(){
                $(this).css('display', '');
            });
            $(this).siblings('.active').removeClass('active');
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).find('.depth-2').stop().slideUp(500, function(){
                    $(this).css('display', '');
                });
            }
            else {
                $(this).addClass('active');
                $(this).find('.depth-2').stop().slideDown(500);
            }
        }
    });

    $('.header__fullMenu .depth-2').click(function(){
        return false;
    });
}

headerHover();
headerLangsBtn();
headerFullMenuBtn();
headerFixed();
mobileFullMenuItem();