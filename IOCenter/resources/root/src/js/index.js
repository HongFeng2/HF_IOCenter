Room.Loader = {};
Room.Loader.ppt = function(){
    var Start = "Index";
    cc.ppt(["Loader", Start] , function(after , callback){
        cc.m["Loader"].velocity({ opacity: 0}, { duration: 500, display: "none" });
        after.come();
        cc.m[Start].show();
    })
};


Room.Index = {};
Room.Index.dom = function(){

    Dom.Index = $("#Index .swiper-slide li");
    Dom.Index.eq(0).click(function(e){
        Room.Index.ppt(1);
    });
    Dom.Index.eq(1).click(function(e){
        Room.Index.ppt(2);
    });
    Dom.Index.eq(2).click(function(e){
        Room.Index.ppt(3);
    });
    Dom.Index.eq(3).click(function(e){
        Room.Index.ppt(4);
    });
    Dom.Index.eq(4).click(function(e){
        Room.Index.ppt(5);
    });
    Dom.Index.eq(5).click(function(e){
        Room.Index.ppt(6);
    });
    Dom.Index.eq(6).click(function(e){
        Room.Index.ppt(7);
    });
    Dom.Index.eq(7).click(function(e){
        Room.Index.ppt(8);
    });
    Dom.Index.eq(8).click(function(e){
        Room.Index.ppt(9);
    });

    $("._Nav .nav1").tap(function(e){
        cc.tap(e);
        Room.Index.page1_ppt();
    });
    $("._Nav .nav2").tap(function(e){
        cc.tap(e);
        Room.Index.page2_ppt();
    });
    $("._Nav .nav3").tap(function(e){
        cc.tap(e);
        Room.Index.page3_ppt();
    })

};
Room.Index.come_before = function(next){
    cc.m["Index"].show().velocity({ translateX: 1024}, { duration: 0});
    next();
};
Room.Index.come_after = function(){
    cc.m["Index"].velocity({ translateX: 0}, { duration: 0});
};
Room.IndexBack = {};
Room.IndexBack.come_before = function(next){
    cc.m["Index"].show().velocity({ translateX: -1024}, { duration: 0});
    next();
};
Room.IndexBack.come_after = function(){
    cc.m["Index"].velocity({ translateX: 0}, { duration: 0});
};
Room.Index.ppt = function(i){
    Dom._unable.show();
    var Video = "Video"+i;
    cc.ppt(["Index", Video, "", "Video"] , function(after , callback){
        cc.m["Index"].velocity({ translateX: -1024}, { delay:10, duration: 400, display: "none" });
        cc.m[Video].velocity({ translateX: 0}, { duration: 400, complete:function(){
                Dom._unable.hide();
            }});
    })
};
Room.Index.page1_ppt = function(){
    if(cc.id=="Index") return;
    Dom._unable.show();
    cc.ppt([cc.id, "Index"] , function(after , callback){
        cc.m[cc.old].velocity({ translateX: -1024}, { delay:10, duration: 400, display: "none" });
        cc.m["Index"].velocity({ translateX: 0}, { duration: 400, complete:function(){
                Dom._unable.hide();
            }});
    })
};
Room.Index.page2_ppt = function(){
    if(cc.id=="Computer") return;
    Dom._unable.show();
    cc.ppt([cc.id, "Computer"] , function(after , callback){
        cc.m[cc.old].velocity({ translateX: -1024}, { delay:10, duration: 400, display: "none" });
        cc.m["Computer"].velocity({ translateX: 0}, { duration: 400, complete:function(){
                Dom._unable.hide();
            }});
    })
};
Room.Index.page3_ppt = function(){
    if(cc.id=="Light") return;
    Dom._unable.show();
    cc.ppt([cc.id, "Light"] , function(after , callback){
        cc.m[cc.old].velocity({ translateX: -1024}, { delay:10, duration: 400, display: "none" });
        cc.m["Light"].velocity({ translateX: 0}, { duration: 400, complete:function(){
                Dom._unable.hide();
            }});
    })
};

//Video
Room.Video = {};
Room.Video.dom = function(){
    $(".MainTP .return").tap(function(e){
        cc.tap(e);
        Room.Video.ppt();
    });
    $(".MainTP .title").on("taphold",function(e){
        cc.tap(e);
        var to = $(this).data("id");
        ws.emit({to:to , key:"reload"});
    });
};
Room.Video.come_before = function(next){
    cc.m[cc.id].show().velocity({ translateX: 1024}, { duration: 0});
    next();
};
Room.Video.ppt = function(){
    Dom._unable.show();
    cc.ppt([cc.id, "Index", "Video", "IndexBack"] , function(after , callback){
        cc.m[cc.old].velocity({ translateX: 1024}, { delay:10, duration: 400, display: "none" });
        cc.m["Index"].velocity({ translateX: 0}, { duration: 400, complete:function(){
                Dom._unable.hide();
            }});
    })
};