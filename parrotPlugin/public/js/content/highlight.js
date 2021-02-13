var parrot = {
    //自定义高亮标签
    highlightTag: 'pthighlight',
    //自定义高亮css类
    highlightClass: 'pt-highlight',
    //自定义每个高亮的ID
    highlightId: 'parrot_id_',
    //高亮单词单个字母标签与CSS类前缀
    highlightWordsTag: 'span',
    highlightWordsClass: 'parrotWords',
    cur_pt_node_id: 1,
    //初始化绑定事件
    init: function(){
        // this.bindClick();
        this.loadMatch();
    },
    //绑定点击事件
    // bindClick: function(){
    //     this.doubleClick();
    // },

    //初始化正则
    initRegex: function(keyWord){
       // 针对特殊字符的转义，$1，$2表达的是小括号里面的内容
       keyWord = keyWord.replace(/(\^|\$|\.|\*|\?|\(|\)|\+|\\)/ig, "\\$1");
       /* 参数1是字符串，指定正则表达式的模式或其他正则表达式，参数2是可选字符串
        * g 指定全局匹配
        * i 区分大小写
        * m 多行匹配
        */
       return RegExp('\\b' + keyWord + '\\b', 'i')
    },

    //创建高亮的新元素节点
    createHighlightNode: function(){
        var node = document.createElement(this.highlightTag);
        // console.log('节点创建成功');
        node.dataTooltip = 'show'
        node.className = this.highlightClass;
        //给匹配到的值添加id
        node.id = this.highlightId + this.cur_pt_node_id
        this.cur_pt_node_id += 1
        // console.log('css类创建成功');
        return node;
    },
    //将单词拆分为字母并添加span标签
    createHighlightWords: function(){
        var wordsNode = document.createElement(this.highlightWordsTag)
        wordsNode.className = this.highlightWordsClass
        return wordsNode
    },
    //根据node进行匹配所有关键字高亮
    highlight: function(node, keyWord){
        var match = node.data.match(this.initRegex(keyWord));
        if (match === null) {
            return false;
        }
        //高度数据备用
        // this.addTopList(node);
        //splitText() 方法按照指定的 offset 把文本节点分割为两个节点
        var newNode = node.splitText(match.index)
        newNode.splitText(match[0].length);
        //高亮节点
        var highlightNode = this.createHighlightNode()

        // //将单词拆分为单个字母
        // var wordsStr = keyWord.split('');
        // console.log(wordsStr)
        // for (var w = 0; w < wordsStr.length; w++){
        //     var highlightNodeWords = wordsStr[w].createHighlightWords()
        //     console.log(highlightNodeWords)
        // }
        /* 克隆到其他
         * appendChild 往前面DOM中添加项目
         * cloneNode 拷贝一个列表项到另外一个列表
         */
        highlightNode.appendChild(newNode.cloneNode(true));
        //replaceChild，将某个子节点替换为另一个
        newNode.parentNode.replaceChild(highlightNode, newNode)
    },
    //遍历节点进行高亮
    mapToHighlight: function(node, keyWord){
        /* nodeType属性返回以数字值返回指定节点的节点类型
         * 如果节点是元素节点，则nodeType属性将返回 1；
         * 如果节点是属性节点，则nodeType属性将返回 2；
         * 如果节点是文本节点，则返回 3；
         * https://www.w3school.com.cn/xmldom/prop_element_nodetype.asp
         */
        // console.log('mapToHighlight:' + this)
        //判断节点是否是文本 
        if(node.nodeType === 3){
            //判断不为空就执行高亮
            if(node.data.replace(/(\s)/g, '') != ''){
                this.highlight(node, keyWord)
            }
        //判断节点是元素节点并包含子集
        } else if((node.nodeType === 1) && node.childNodes &&
        !/(script|style)/i.test(node.tagName) &&
        //判断标签名不和自定义高亮标签同名
        !(node.tagName === this.highlightTag.toUpperCase() &&
        node.className === this.highlightClass)){
            for (var i = 0; i < node.childNodes.length; i++){
                this.mapToHighlight(node.childNodes[i], keyWord);
            }
        }
    },

    //高亮入口
    beginToHighlight: function(node, keyWord, selectText = false){
        //高亮时去掉首位空格后再匹配
        keyWord = keyWord.replace(/(^\s*)|(\s*$)/g, '');
        //遍历节点高亮
        this.mapToHighlight(node, keyWord);
    },
    //匹配
    do_wordsMatch: function(words){
        //判断是否为空，\s是指空白。如果不为空就执行高亮
        if(words.length > 0 && words.replace(/(\s)/g, '') != '') {
            //执行高亮
            this.beginToHighlight(document.body, words, true);
            
        }
    },
    //双击绑定
    // doubleClick: function(){
    //     var this_ = this;
    //     document.body.addEventListener('dblclick', function(e){
    //         //activeElement属性返回文档当前获得焦点的元素。
    //         if(document.activeElement){
    //             var selectedText = window.getSelection().toString();
    //             console.log('你选择的是：' + selectedText)
    //             this_.clickEvent = e;
    //             //执行匹配
    //             this_.do_wordsMatch(selectedText)
    //         }
    //     })
    // },
    //执行获取英语单词并存储
    do_load_eng_words: function(file_text) {
        //获取到wordsList的JSON文件
        var data = JSON.parse(file_text)
        var matchWords = []
        for(var key in data){
            //获取JSON文件中英语单词列表
            var allWords = data[key].wordsList
            for(w =0; w < allWords.length; w++){
                //遍历英语单词对象，获得所有的英语单词
                for(var key in allWords[w]){
                    matchWords.push(key)
                }
            }
        }
        local_storage = chrome.storage.local;
        //存储所有单词
        local_storage.set({"match_words": matchWords});
        //存储所有单词对象
        local_storage.set({"allWordsObj": allWords})
    },
    //配置获取英语单词，并执行获取
    load_eng_words: function(){
        var xhr = new XMLHttpRequest();
        var file_path = chrome.extension.getURL("../../data/wordsList.json")
        var this_ = this
        // console.log("开始获取数据" + file_path)
        //存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。
        xhr.onreadystatechange = function () {
            if(xhr.readyState == XMLHttpRequest.DONE){
                //加载词典
                this_.do_load_eng_words(xhr.responseText)
            }
        }
        xhr.open('GET',file_path, true); //XMLHttpRequest 对象用于在后台与服务器交换数据
        xhr.send(null)
    },
    //加载识别
    loadMatch: function() {
        var this_ = this
        window.addEventListener("load", function(e) {
            //加载英语词典
            this_.load_eng_words();
            //在扩展程序中本地存储数据可以通过 chrome.storage API 实现
            chrome.storage.local.get(['match_words'],function(result){
                var match_words = result.match_words;
                for(m=0; m<match_words.length; m++){
                    //执行匹配
                    this_.do_wordsMatch(match_words[m])
                }
            })
        })
    }
}

parrot.init();