$(function () {
    //获取工具提示的元素 初始化工具提示插件
    // 默认没有初始化需要手动初始化
    // $('[data-toggle="tooltip"]').tooltip()
    var flag = true;
    $.ajax({
        type: 'get',
        url: './data/imgdata.json',
        success: function (obj) {
            console.log(obj);
            if ($(window).width() > 768) {
                flag = true;
            } else {
                flag = false;
            }
            var html = template('imgTemp', {
                list: obj,
                isPC: flag
            });

            console.log(html);
            $('#carousel-example-generic').html(html);

        }
    })

    $('[data-toggle="tooltip"]').tooltip();

})