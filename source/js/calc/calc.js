window.onload = function () {
    const $step1 = $('.step1_block');
    const $step2 = $('.step2_block');
    const $step3 = $('.step3_block');
    const $step4 = $('.step4_block');
    
    const $buttonNext = $('#calcButtonNext');
    const $buttonBack = $('#calcButtonBack');
    const $buttonSubmit = $('#calcButtonSubmit');
    
    const $input1 = $('input[name="step1radio"]');
    const $input2 = $('input[name="step2radio"]');
    const $input3 = $('input[name="step3radio"]');
    
    const $step = $('.step');
    
    function from1stepto2() {
        $step1.addClass('hidden');
        $step2.removeClass('hidden');
        $step3.addClass('hidden');
        $step4.addClass('hidden');
        $buttonBack.removeClass('visual_hidden');
        $('#currentStep').text(2);
        $('.step_percent').text('50%');
        $('.progress_dinamic').css('width', '50%');
        $('.alert_message').addClass('hidden');
    }
    
    function from2stepto3() {
        $step1.addClass('hidden');
        $step2.addClass('hidden');
        $step3.removeClass('hidden');
        $step4.addClass('hidden');
        $('#currentStep').text(3);
        $('.step_percent').text('75%');
        $('.progress_dinamic').css('width', '75%');
        $('.alert_message').addClass('hidden');
    }
    
    function from3stepto4() {
        $step1.addClass('hidden');
        $step2.addClass('hidden');
        $step3.addClass('hidden');
        $step4.removeClass('hidden');
        $('#currentStep').text(4);
        $('.step_percent').text('100%');
        $('.progress_dinamic').css('width', '100%');
        $buttonNext.addClass('hidden');
        $buttonSubmit.removeClass('hidden');
        $('.accept_block').removeClass('hidden');
        $('.alert_message').addClass('hidden');
    
        const $input1 = $('input[name="step1radio"]:checked').attr('data-value');
        const $input2 = $('input[name="step2radio"]:checked').attr('data-value');
        const $input3 = $('input[name="step3radio"]:checked').attr('data-value');
    
        $('.illustration').attr('src', 'img/constructor/1-' + $input1 + '_2-' + $input2 + '_3-' + $input3 + '.svg');
    
    }
    
    $buttonNext.click(function() {
        const currentStep = $('#currentStep').text();
    
        if (currentStep == 1) {
            var checked_radio1 = $('.step1_block').find('input[name=step1radio]:checked');
            if (checked_radio1.length == 0){
                $('.step1_block li').addClass('mistake');
                $('.alert_message').removeClass('hidden');
                $(this).addClass('alertBtn');
            } else {
                from1stepto2();
            }
        } else if (currentStep == 2) {
            var checked_radio2 = $('.step2_block').find('input[name=step2radio]:checked');
            if (checked_radio2.length == 0){
                $('.step2_block li').addClass('mistake');
                $('.alert_message').removeClass('hidden');
                $(this).addClass('alertBtn');
            } else {
                from2stepto3();
            }
        } else if (currentStep == 3) {
            var checked_radio3 = $('.step3_block').find('input[name=step3radio]:checked');
            if (checked_radio3.length == 0){
                $('.step3_block li').addClass('mistake');
                $('.alert_message').removeClass('hidden');
                $(this).addClass('alertBtn');
            } else {
                from3stepto4();
            }
        }
    });
    
    $buttonBack.click(function() {
        const currentStep = $('#currentStep').text();
    
        if (currentStep == 2) {
            $step1.removeClass('hidden');
            $step2.addClass('hidden');
            $step3.addClass('hidden');
            $step4.addClass('hidden');
            $buttonBack.addClass('visual_hidden');
            $('#currentStep').text(1);
            $('.step_percent').text('25%');
            $('.progress_dinamic').css('width', '25%');
        } else if (currentStep == 3) {
            $step1.addClass('hidden');
            $step2.removeClass('hidden');
            $step3.addClass('hidden');
            $step4.addClass('hidden');
            $('#currentStep').text(2);
            $('.step_percent').text('50%');
            $('.progress_dinamic').css('width', '50%');
        } else if (currentStep == 4) {
            $step1.addClass('hidden');
            $step2.addClass('hidden');
            $step3.removeClass('hidden');
            $step4.addClass('hidden');
            $('#currentStep').text(3);
            $('.step_percent').text('75%');
            $('.progress_dinamic').css('width', '75%');
            $buttonNext.removeClass('hidden');
            $buttonSubmit.addClass('hidden');
            $('.accept_block').addClass('hidden');
        }
    });
    
    $input1.change(function() {
        $('.step1_block li').removeClass('mistake');
        $('.alert_message').addClass('hidden');
        $buttonNext.removeClass('alertBtn');
    });
    
    $input2.change(function() {
        $('.step2_block li').removeClass('mistake');
        $('.alert_message').addClass('hidden');
        $buttonNext.removeClass('alertBtn');
    });
    
    $input3.change(function() {
        $('.step3_block li').removeClass('mistake');
        $('.alert_message').addClass('hidden');
        $buttonNext.removeClass('alertBtn');
    });
    
  };

