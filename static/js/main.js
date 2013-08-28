
var words = {
    words: [
        "teach",
        "share",
        "learn",
        "play",
        "create",
        "think",
        "enjoy",
        "build",
        "search",
        "synthesise",
        "design",
        "stragetise",
    ],
    length: 3,
    get_words: function (length) {
        var words = this.words.slice(0);
        var out_words = [];
        if (length == undefined) {
            length = this.length;
        }
        for (var i=0; i<length; i++) {
            var random_i = Math.floor(Math.random() * words.length);
            out_words.push(words.splice(random_i, 1));
        }
        return out_words;
    },
}

$().ready(function () {
    
    $('#generate').submit(function (e) {
        e.preventDefault();
        var data = {};
        $.each($(e.currentTarget).serializeArray(), function(i, kv) {
            data[kv['name']] = kv['value'];
        });
        var strapline_array = words.get_words();
        var words_string = strapline_array.join(data['sep']);
        $('#result').text(words_string);
    });
});
