var ini = {};
ini.loader = function(){

    ws = new ws_client("ws://localhost:3001", {id:"Guide"});
    ws.connect( function(){

        libs.create();
        libs.setTicker(25);
        libs.iniDom();

        Dom.VideoCtrl1 = new VideoCtrl({id:"#VideoCtrl1" , to:"Video1"});
        Dom.VideoCtrl1.ini({vol:30});

        Dom.VideoCtrl2 = new VideoCtrl({id:"#VideoCtrl2" , to:"Video2"});
        Dom.VideoCtrl2.ini({vol:30});

        Dom.VideoCtrl3 = new VideoCtrl({id:"#VideoCtrl3" , to:"Video3"});
        Dom.VideoCtrl3.ini({vol:30});

        Dom.VideoCtrl4 = new VideoCtrl({id:"#VideoCtrl4" , to:"Video4"});
        Dom.VideoCtrl4.ini({vol:30});

        Dom.VideoCtrl5 = new VideoCtrl({id:"#VideoCtrl5" , to:"Video5"});
        Dom.VideoCtrl5.ini({vol:30});

        Dom.VideoCtrl6 = new VideoCtrl({id:"#VideoCtrl6" , to:"Video6"});
        Dom.VideoCtrl6.ini({vol:30});

        Dom.VideoCtrl7 = new VideoCtrl({id:"#VideoCtrl7" , to:"Video7"});
        Dom.VideoCtrl7.ini({vol:30});

        Dom.VideoCtrl8 = new VideoCtrl({id:"#VideoCtrl8" , to:"Video8"});
        Dom.VideoCtrl8.ini({vol:30});

        setTimeout(Room.Loader.ppt, 300);

    } );



};