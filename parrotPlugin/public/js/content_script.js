//总处理入口
function initForPage(){
    if(!document.body){
        return
    }
    //注册要监听的消息
    // chrome.runtime.onMessage.addListener(function(request){
    //     var lemma = request.wdm_unhighlight;
    //     if(lemma){
    //         unhighlight(lemma);
    //     }
    // })
    chrome.storage.local.get(['match_words'],function(result){
        // var match_words = result.match_words;
        // //创建悬浮Dom
        var bubbleDOM = create_bubble();
        // //向页面中注入
        document.body.appendChild(bubbleDOM)
        tipsProcess()
    })
}
//当页面完成执行
window.addEventListener('load', function (event){
    initForPage();
})