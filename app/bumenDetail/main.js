$this.bumenSize=10;
$('#bumenD1').find('.topn').children().change(function () {
    $this.bumenSetSize(this.value, update);
  /*  $this.bumenBDSetSize(this.value, update);*/
});
$('#bumenD1').find('.topn').children().val($this.bumenSize);





window.update = function () {
    bumenupdateWords('hotWord', 'bumenD1', $this.bumenSize,$this.bumenWord ,function (words) {
        /*bumenCycle($('#rediantu'), 3, words.join(','), $this.startDate, $this.endDate);*/

        $('.text-left').html($this.bumenWord)
        if (words.length > 0) {
                bumenDetailCycle($('#rediantu'),$this.bumenWord);
                wenZhangShowTag_Bm($this.bumenWord,words[0]);
        }
        else {
            $('.words-list').html('');
            $('.wenzhang-list').html('');
            $('.nodata').removeClass('hidden');
            $('#ztcbox').addClass('hidden');
        }
    });

};


var enterWord = function (word) {
    //部门-热点导力图
    relevantWordTu_BM(word,$this.bumenWord,$this.startDate, $this.endDate,10);
    //部门-词云
    keyWordTu_BM(word,$this.bumenWord,10)

    zhexianData($('#rediantu'), word);
    wenZhangShowTag_Bm($this.bumenWord,word);
};
if(!$this.flag_bumen){
    update();
}

