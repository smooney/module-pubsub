/**
 * Base.js
 * Application Core
 * Based on code by @rpflorence
 * Thanks to Addy Osmani for inspiration
 */

var Base = window.Base || function(){
    var subscribe = function(channel, fn){
        if (!Base.channels[channel]) Base.channels[channel] = [];
        Base.channels[channel].push({ context: this, callback: fn });
        return this;
    },
 
    publish = function(channel){
        if (!Base.channels[channel]) return false;
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0, l = Base.channels[channel].length; i < l; i++) {
            var subscription = Base.channels[channel][i];
            subscription.callback.apply(subscription.context, args);
        }
        return this;
    };
 
    return {
        channels: {},
        publish: publish,
        subscribe: subscribe,
        installTo: function(obj){
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    };
 
}();