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
    $(document).click(function(e){
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
            $('.header__fullMenu').addClass('active');
        }
    });
}

headerLangsBtn();
headerFullMenuBtn();