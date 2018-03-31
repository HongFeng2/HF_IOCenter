Room.Light = {};
Room.Light.dom = function(){

    $("#Light .SubA").tap(function(e){
        cc.tap(e);
        $("#Light .MapBoxSubA").show();
    });
    $("#Light .MapBoxSubA").click(function(){
        $("#Light .MapBoxSubA").hide();
    });

    $("#Light .SubB").tap(function(e){
        cc.tap(e);
        $("#Light .MapBoxSubB").show();
    });
    $("#Light .MapBoxSubB").click(function(){
        $("#Light .MapBoxSubB").hide();
    });

    $("#Light .SubC").tap(function(e){
        cc.tap(e);
        $("#Light .MapBoxSubC").show();
    });
    $("#Light .MapBoxSubC").click(function(){
        $("#Light .MapBoxSubC").hide();
    });

    $("#Light .SubD").tap(function(e){
        cc.tap(e);
        $("#Light .MapBoxSubD").show();
    });
    $("#Light .MapBoxSubD").click(function(){
        $("#Light .MapBoxSubD").hide();
    });

    //全开
    $("#Light .btn_open").tap(function(e){
        cc.tap(e);
        Room.Light.open("all" , "all");
    });
    $("#Light .btn_cls").tap(function(e){
        cc.tap(e);
        Room.Light.close("all" , "all");
    });

    //区域开关
    $("#Light .btn_a").tap(function(e){
        cc.tap(e);
        if($("#Light .btn_a").hasClass("act")){
            Room.Light.close("a" , "all");
        }else{
            Room.Light.open("a" , "all");
        }
    });
    $("#Light .btn_b").tap(function(e){
        cc.tap(e);
        if($("#Light .btn_b").hasClass("act")){
            Room.Light.close("b" , "all");
        }else{
            Room.Light.open("b" , "all");
        }
    });
    $("#Light .btn_c").tap(function(e){
        cc.tap(e);
        if($("#Light .btn_c").hasClass("act")){
            Room.Light.close("c" , "all");
        }else{
            Room.Light.open("c" , "all");
        }
    });
    $("#Light .btn_d").tap(function(e){
        cc.tap(e);
        if($("#Light .btn_d").hasClass("act")){
            Room.Light.close("d" , "all");
        }else{
            Room.Light.open("d" , "all");
        }
    });

    // Sub
    $("#Light .MapBoxSub ._sub_btn").tap(function(e){
        cc.tap(e);
        var _this = $(this);
        var key = _this.data("key");
        var area = key.substring(0,1);
        if(_this.hasClass("act")){
            Room.Light.close(area , key);
        }else{
            Room.Light.open(area , key);
        }
    });

};
Room.Light.come_before = function(next){
    cc.m["Light"].show().velocity({ translateX: 1024}, { duration: 0});
    next();
};
Room.Light.come_after = function(){
    cc.m["Light"].velocity({ translateX: 0}, { duration: 0});
};

Room.Light.open = function(key, pot){
    if(key=="all" || key=="a"){
        if(pot=="all" || pot=="a1") Room.Light.openpot("a1");
        if(pot=="all" || pot=="a2") Room.Light.openpot("a2");
        if(pot=="all" || pot=="a3") Room.Light.openpot("a3");
        if(pot=="all" || pot=="a4") Room.Light.openpot("a4");
        if(pot=="all" || pot=="a5") Room.Light.openpot("a5");
    }

    if(key=="all" || key=="b"){
        if(pot=="all" || pot=="b1") Room.Light.openpot("b1");
        if(pot=="all" || pot=="b2") Room.Light.openpot("b2");
        if(pot=="all" || pot=="b3") Room.Light.openpot("b3");
    }

    if(key=="all" || key=="c"){
        if(pot=="all" || pot=="c1") Room.Light.openpot("c1");
        if(pot=="all" || pot=="c2") Room.Light.openpot("c2");
    }

    if(key=="all" || key=="d"){
        if(pot=="all" || pot=="d1") Room.Light.openpot("d1");
        if(pot=="all" || pot=="d2") Room.Light.openpot("d2");
        if(pot=="all" || pot=="d3") Room.Light.openpot("d3");
        if(pot=="all" || pot=="d4") Room.Light.openpot("d4");
        if(pot=="all" || pot=="d5") Room.Light.openpot("d5");
    }
    Room.Light.ifArea();
};

Room.Light.getComOpen = function(id){
    var com = "";
    switch(id)
    {
        case "a1": com = "20_01"; break;
        case "a2": com = "20_02"; break;
        case "a3": com = "20_03"; break;
        case "a4": com = "20_04"; break;
        case "a5": com = "20_05"; break;

        case "b1": com = "20_06"; break;
        case "b2": com = "20_07"; break;
        case "b3": com = "20_08"; break;

        case "c1": com = "21_01"; break;
        case "c2": com = "21_02"; break;

        case "d1": com = "21_03"; break;
        case "d2": com = "21_04"; break;
        case "d3": com = "21_05"; break;
        case "d4": com = "21_06"; break;
        case "d5": com = "21_07"; break;
    }
    return com;
};
Room.Light.getComCls = function(id){
    var com = "";
    switch(id)
    {
        case "a1": com = "20_FE"; break;
        case "a2": com = "20_FD"; break;
        case "a3": com = "20_FC"; break;
        case "a4": com = "20_FB"; break;
        case "a5": com = "20_FA"; break;

        case "b1": com = "20_F9"; break;
        case "b2": com = "20_F8"; break;
        case "b3": com = "20_F7"; break;

        case "c1": com = "21_FE"; break;
        case "c2": com = "21_FD"; break;

        case "d1": com = "21_FC"; break;
        case "d2": com = "21_FB"; break;
        case "d3": com = "21_FA"; break;
        case "d4": com = "21_F9"; break;
        case "d5": com = "21_F8"; break;
    }
    return com;
};

Room.Light.openpot = function(id){
    $("#Light .sub_"+id).addClass("act");
    ws.emit({type:"run" , key:"LightOpen", val:Room.Light.getComOpen(id)});
};

Room.Light.close = function(key, pot){
    if(key=="all" || key=="a"){
        if(pot=="all" || pot=="a1") Room.Light.closepot("a1");
        if(pot=="all" || pot=="a2") Room.Light.closepot("a2");
        if(pot=="all" || pot=="a3") Room.Light.closepot("a3");
        if(pot=="all" || pot=="a4") Room.Light.closepot("a4");
        if(pot=="all" || pot=="a5") Room.Light.closepot("a5");
    }

    if(key=="all" || key=="b"){
        if(pot=="all" || pot=="b1") Room.Light.closepot("b1");
        if(pot=="all" || pot=="b2") Room.Light.closepot("b2");
        if(pot=="all" || pot=="b3") Room.Light.closepot("b3");
    }

    if(key=="all" || key=="c"){
        if(pot=="all" || pot=="c1") Room.Light.closepot("c1");
        if(pot=="all" || pot=="c2") Room.Light.closepot("c2");
    }

    if(key=="all" || key=="d"){
        if(pot=="all" || pot=="d1") Room.Light.closepot("d1");
        if(pot=="all" || pot=="d2") Room.Light.closepot("d2");
        if(pot=="all" || pot=="d3") Room.Light.closepot("d3");
        if(pot=="all" || pot=="d4") Room.Light.closepot("d4");
        if(pot=="all" || pot=="d5") Room.Light.closepot("d5");
    }
    Room.Light.ifArea();
};

Room.Light.closepot = function(id){
    $("#Light .sub_"+id).removeClass("act");
    ws.emit({type:"run" , key:"LightOpen", val:Room.Light.getComCls(id)});
};

Room.Light.ifArea = function(){
    if($("#Light .sub_a1").hasClass("act") &&
        $("#Light .sub_a2").hasClass("act") &&
        $("#Light .sub_a3").hasClass("act") &&
        $("#Light .sub_a4").hasClass("act") &&
        $("#Light .sub_a5").hasClass("act")
    ){
        $("#Light .btn_a").addClass("act");
    }else{
        $("#Light .btn_a").removeClass("act");
    }

    if($("#Light .sub_b1").hasClass("act") &&
        $("#Light .sub_b2").hasClass("act") &&
        $("#Light .sub_b3").hasClass("act")
    ){
        $("#Light .btn_b").addClass("act");
    }else{
        $("#Light .btn_b").removeClass("act");
    }

    if($("#Light .sub_c1").hasClass("act") &&
        $("#Light .sub_c2").hasClass("act")
    ){
        $("#Light .btn_c").addClass("act");
    }else{
        $("#Light .btn_c").removeClass("act");
    }

    if($("#Light .sub_d1").hasClass("act") &&
        $("#Light .sub_d2").hasClass("act") &&
        $("#Light .sub_d3").hasClass("act") &&
        $("#Light .sub_d4").hasClass("act") &&
        $("#Light .sub_d5").hasClass("act")
    ){
        $("#Light .btn_d").addClass("act");
    }else{
        $("#Light .btn_d").removeClass("act");
    }
};