gdjs.LevelCode = {};
gdjs.LevelCode.localVariables = [];
gdjs.LevelCode.GDbackgroundObjects1= [];
gdjs.LevelCode.GDbackgroundObjects2= [];
gdjs.LevelCode.GDEasyObjects1= [];
gdjs.LevelCode.GDEasyObjects2= [];
gdjs.LevelCode.GDJudul2Objects1= [];
gdjs.LevelCode.GDJudul2Objects2= [];
gdjs.LevelCode.GDMediumObjects1= [];
gdjs.LevelCode.GDMediumObjects2= [];
gdjs.LevelCode.GDHardObjects1= [];
gdjs.LevelCode.GDHardObjects2= [];


gdjs.LevelCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "home_sound.mp3", true, 90, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.LevelCode.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDbackgroundObjects1[i].setXOffset(gdjs.LevelCode.GDbackgroundObjects1[i].getXOffset() + (6));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Easy"), gdjs.LevelCode.GDEasyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelCode.GDEasyObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDEasyObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelCode.GDEasyObjects1[k] = gdjs.LevelCode.GDEasyObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDEasyObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "scanee_easy", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Medium"), gdjs.LevelCode.GDMediumObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelCode.GDMediumObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDMediumObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelCode.GDMediumObjects1[k] = gdjs.LevelCode.GDMediumObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDMediumObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "scanee_medium", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hard"), gdjs.LevelCode.GDHardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelCode.GDHardObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDHardObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelCode.GDHardObjects1[k] = gdjs.LevelCode.GDHardObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDHardObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scanee_hard", false);
}}

}


};

gdjs.LevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelCode.GDbackgroundObjects1.length = 0;
gdjs.LevelCode.GDbackgroundObjects2.length = 0;
gdjs.LevelCode.GDEasyObjects1.length = 0;
gdjs.LevelCode.GDEasyObjects2.length = 0;
gdjs.LevelCode.GDJudul2Objects1.length = 0;
gdjs.LevelCode.GDJudul2Objects2.length = 0;
gdjs.LevelCode.GDMediumObjects1.length = 0;
gdjs.LevelCode.GDMediumObjects2.length = 0;
gdjs.LevelCode.GDHardObjects1.length = 0;
gdjs.LevelCode.GDHardObjects2.length = 0;

gdjs.LevelCode.eventsList0(runtimeScene);
gdjs.LevelCode.GDbackgroundObjects1.length = 0;
gdjs.LevelCode.GDbackgroundObjects2.length = 0;
gdjs.LevelCode.GDEasyObjects1.length = 0;
gdjs.LevelCode.GDEasyObjects2.length = 0;
gdjs.LevelCode.GDJudul2Objects1.length = 0;
gdjs.LevelCode.GDJudul2Objects2.length = 0;
gdjs.LevelCode.GDMediumObjects1.length = 0;
gdjs.LevelCode.GDMediumObjects2.length = 0;
gdjs.LevelCode.GDHardObjects1.length = 0;
gdjs.LevelCode.GDHardObjects2.length = 0;


return;

}

gdjs['LevelCode'] = gdjs.LevelCode;
