/*
$this.size=10;
$('#yichang1').find('.topn').children().change(function(){
    $this.yichangSetSize(this.value, update);
});
$('#yichang1').find('.topn').children().val($this.yichangSize);

var update = function () {

    updateWords('abnormalWord', 'yichang1',$this.yichangSize, function (words) {

        if (words.length > 0) {
            if ($this.word) {

                // 滚动条定位
                $('.theme-words').scrollTop($('.words-list .selected').position().top);

                zhexianData($('#yichangtu'), $this.word);
                wenZhangShowTag($this.word);
            } else {
                yichangCycle($('#yichangtu'), 2, words.join(','), $this.startDate, $this.endDate);
                wenZhangShowTag(words[0]);
            }
        }else{
            $('.words-list').html('');
            $('.wenzhang-list').html('');
            $('.nodata').removeClass('hidden');
            $('#ztcbox').addClass('hidden');
        }

    });
};

var enterWord = function(word) {
    zhexianData($('#yichangtu'), word);
    wenZhangShowTag(word);
};

update();*/


$('#zuida1').find('.topn').children().change(function () {
    $this.zuidaSetSize(this.value, update2);
});
$('#yichang1').find('.topn').children().change(function () {
    $this.yichangSetSize(this.value, update3);
});
$('#zuida1').find('.topn').children().val($this.zuidaSize);
$('#yichang1').find('.topn').children().val($this.yichangSize);

var tc = 0;

var update = function () {
    tc = 0;
    //首页最大变动，图
    update2();
    //首页异常，图
    update3();
};


var update2 = function () {
    updateWords('changeWord', 'zuida1', $this.zuidaSize, function (words) {
        if(words.length!=0){
            zuidaCycle($('#zuidatu'), 2, words.join(','), $this.startDate, $this.endDate);
        }
        if (words.length > 0) {
            tc++;
        }
        if(tc == 0){
            $('.words-list').html('');
            $('.wenzhang-list').html('');
            $('.nodata').removeClass('hidden');
            $('#ztcbox').addClass('hidden');
        }
    });
};

var update3 = function () {
    updateWords('abnormalWord', 'yichang1', $this.yichangSize, function (words) {
        if(words.length !=0){
            $('#yichang1').show()
            yichangCycle($('#yichangtu'), 3, words.join(','), $this.startDate, $this.endDate);
        }else{
            $('#yichang1').hide()
        }

        if (words.length > 0) {
            tc++;
        }
        if(tc == 0){
            $('.words-list').html('');
            $('.wenzhang-list').html('');
            $('.nodata').removeClass('hidden');
            $('#ztcbox').addClass('hidden');
        }
    });
};


var enterWord= function (type,word,id) {
    if(type=="changeWord"){
        type='最大变动主题词';
     }else if(type=='abnormalWord'){
        type='异常变动主题词';
     }
    $this.word = word;
    $this.biandongzhuti = type;
    window.location =window.location.pathname+'#biandongDetail?type='+type+'&them='+word;
    /*$this.bumenWord=word*/
};

update();