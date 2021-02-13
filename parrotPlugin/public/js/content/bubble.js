// var pt_online_dicts = null;
// var node_get_hover_id = null;
// var rendered_node_id = null;
// var highlightClass = 'pt-highlight';

// var bubbleID = 'pt_bubble'

var bubbleDom = [
    'bubbleWrap', //Tips容器
    'bubbleWordWrap', //单词容器
    'bubbleExampleWrap', //例子容器
    'bubbleZhWrap',   //中文解释容器
    'bubbleZhName',   //中文解释
    'bubbleWordRead', //发音音标
    'bubbleWordType', //单词类型
    'bubbleWordBg',  //英文单词背景
    'bubbleSubTitle', //二级标题
    'bubbleExampleLine' //单个例句
]

//获取单词数据
function getWordData(ele){
    var hoverWord = ele.textContent
    chrome.storage.local.get(['allWordsObj'], function(result){
        var allWords = result.allWordsObj;
        // console.log(allWords)
        for(var key in allWords){
            var worldGroup = Object.keys(allWords[key])
            // var world
            //获取key值
            console.log(allWords[key])
            if(worldGroup[0] == hoverWord){
                var enWord = worldGroup
                console.log(enWord)
            }
            // for(var key in worldGrop){
            //     if(key == hoverWord){
            //         console.log(worldGrop[key])
            //     }
            // }
            // if(allWords[i].key == hoverWord){
            //     console.log('666')
            // }
        }
    })
}

//创建tips
function create_bubble(){
    for(var i = 0; i < bubbleDom.length; i++){
        bubbleDomValue = bubbleDom[i]
        bubbleDom[i] = document.createElement('div');
        bubbleDom[i].id = 'pt_' + bubbleDomValue;
        bubbleDom[i].className = 'pt-' + bubbleDomValue;
    }
    bubbleDom[0].style.opacity = '0'
    //tips容器中添加单词容器和例子容器
    bubbleDom[0].appendChild(bubbleDom[1])
    bubbleDom[0].appendChild(bubbleDom[2])
    //单词容器添加中文解释容器和英文单词背景
    bubbleDom[1].appendChild(bubbleDom[3])
    bubbleDom[1].appendChild(bubbleDom[7])
    //中文解释容器添加中文解释和发音音标和单词类型
    bubbleDom[1].appendChild(bubbleDom[3])
    bubbleDom[1].appendChild(bubbleDom[7])
    //例子容器添加标题和例句
    bubbleDom[2].appendChild(bubbleDom[8])
    bubbleDom[2].appendChild(bubbleDom[9])
    return bubbleDom[0]
}
