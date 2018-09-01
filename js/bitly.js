var bitly_url = 'https://api.bitly.com/v3/shorten';
var bitly_login = 'o_71goo47q1b';
var bitly_apiKey = 'R_e0131f8b722b446996d6c8595e1d7c9c';

/* proxy */

var shortenUrl = function(longUrl){
    return $.Deferred(function(defer){
        var action = bitly_url;
        var data = {
            login: bitly_login,
            apiKey: bitly_apiKey,
            format: 'json',
            longUrl: longUrl
        };
        $.ajax(action, {
            dataType: 'jsonp',
            data: data
        }).then(function(res){
            if(!res || !res.data || !res.data.url){
                reject();
                return;
            }
            defer.resolve(res.data.url);
        }, reject);
        function reject(){
            defer.reject({ msg: 'bit.ly не отвечает' });
        }
    }).promise();
};

/* DOM things */

$(function(){

    var $longUrl = $('#longUrl');
    var $button = $('#button');
    var $res = $('#longUrl');

    $button.click(function(){
        var longUrl = $longUrl.val();
        if(longUrl === '') {
            return;
        }
        shortenUrl(longUrl).then(function(shortUrl){
            $res.text(shortUrl);
        }, function(){
            alert('Проверьте правильность ввода целевого URL (или ресурс bit.ly недоступен...)');
        });
    });

});
