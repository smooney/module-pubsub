/*
	Taken From: http://blog.bobcravens.com/2011/01/loosely-coupled-javascript-using-pubsub/
*/
;(function(d){
    var cache = {};

    d.publish = function(/* String */topic, /* Array? */args){
        try{
            d.each(cache[topic], function(){
                this.apply(d, args || []);
            });
        } catch (err) {
            // handle this error
            console.log(err);
        }
    };

    d.subscribe = function(/* String */topic, /* Function */callback){
        if(!cache[topic]){
            cache[topic] = [];
        }
        cache[topic].push(callback);
        return [topic, callback]; // Array
    };

    d.unsubscribe = function(/* Array */handle){
        var t = handle[0];
        cache[t] && d.each(cache[t], function(idx){
            if(this == handle[1]){
                cache[t].splice(idx, 1);
            }
        });
    };

})(jQuery);
