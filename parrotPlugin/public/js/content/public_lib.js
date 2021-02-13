function make_id_suffix(text){
    //btoa() 方法用于创建一个 base-64 编码的字符串。
    var after = btoa(text).replace(/\+/g, '_').replace(/\//g, '-').replace(/=/g, '_')
    return after
}