var newWords;
//获取同步数据
chrome.storage.sync.get("newWords", function (result){
    //获取所有文本节点
    newWords = result.newWords.wordList;
    //高亮节点
    highlight(textNodesFilter(document.body))
    //插入节点时修改，向文档注册一个mutation 事件监听器
    document.addEventListener("DOMNodeInserted", onNodeInserted, false);
})
//过滤所有节点
function textNodesFilter(el) {
    var n, a = [], walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, mygoodfilter, false);
    while (n = walk.nextNode()) {
        a.push(n);
    }
    return a;
}