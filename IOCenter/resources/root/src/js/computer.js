Room.Computer = {};
Room.Computer.dom = function(){



};
Room.Computer.come_before = function(next){
    cc.m["Computer"].show().velocity({ translateX: 1024}, { duration: 0});
    next();
};
Room.Computer.come_after = function(){
    cc.m["Computer"].velocity({ translateX: 0}, { duration: 0});
};