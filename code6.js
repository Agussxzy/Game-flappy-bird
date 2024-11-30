gdjs.Gameover_95mediumCode = {};
gdjs.Gameover_95mediumCode.localVariables = [];
gdjs.Gameover_95mediumCode.GDburungObjects1= [];
gdjs.Gameover_95mediumCode.GDburungObjects2= [];
gdjs.Gameover_95mediumCode.GDpipaatasObjects1= [];
gdjs.Gameover_95mediumCode.GDpipaatasObjects2= [];
gdjs.Gameover_95mediumCode.GDPipabawahObjects1= [];
gdjs.Gameover_95mediumCode.GDPipabawahObjects2= [];
gdjs.Gameover_95mediumCode.GDtanahObjects1= [];
gdjs.Gameover_95mediumCode.GDtanahObjects2= [];
gdjs.Gameover_95mediumCode.GDbackgroundObjects1= [];
gdjs.Gameover_95mediumCode.GDbackgroundObjects2= [];
gdjs.Gameover_95mediumCode.GDscoreObjects1= [];
gdjs.Gameover_95mediumCode.GDscoreObjects2= [];
gdjs.Gameover_95mediumCode.GDlaserdetecObjects1= [];
gdjs.Gameover_95mediumCode.GDlaserdetecObjects2= [];
gdjs.Gameover_95mediumCode.GDDeatdetecObjects1= [];
gdjs.Gameover_95mediumCode.GDDeatdetecObjects2= [];
gdjs.Gameover_95mediumCode.GDkeluarObjects1= [];
gdjs.Gameover_95mediumCode.GDkeluarObjects2= [];
gdjs.Gameover_95mediumCode.GDTombolObjects1= [];
gdjs.Gameover_95mediumCode.GDTombolObjects2= [];
gdjs.Gameover_95mediumCode.GDRestartObjects1= [];
gdjs.Gameover_95mediumCode.GDRestartObjects2= [];
gdjs.Gameover_95mediumCode.GDHomeObjects1= [];
gdjs.Gameover_95mediumCode.GDHomeObjects2= [];


gdjs.Gameover_95mediumCode.eventsList0 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.Gameover_95mediumCode.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.Gameover_95mediumCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.Gameover_95mediumCode.GDbackgroundObjects1[i].setXOffset(gdjs.Gameover_95mediumCode.GDbackgroundObjects1[i].getXOffset() + (6));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Gameover_95mediumCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Gameover_95mediumCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Gameover_95mediumCode.GDscoreObjects1[i].getBehavior("Text").setText("Score: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.Gameover_95mediumCode.GDRestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameover_95mediumCode.GDRestartObjects1.length;i<l;++i) {
    if ( gdjs.Gameover_95mediumCode.GDRestartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Gameover_95mediumCode.GDRestartObjects1[k] = gdjs.Gameover_95mediumCode.GDRestartObjects1[i];
        ++k;
    }
}
gdjs.Gameover_95mediumCode.GDRestartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "scanee_medium", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.Gameover_95mediumCode.GDHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameover_95mediumCode.GDHomeObjects1.length;i<l;++i) {
    if ( gdjs.Gameover_95mediumCode.GDHomeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Gameover_95mediumCode.GDHomeObjects1[k] = gdjs.Gameover_95mediumCode.GDHomeObjects1[i];
        ++k;
    }
}
gdjs.Gameover_95mediumCode.GDHomeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


};

gdjs.Gameover_95mediumCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Gameover_95mediumCode.GDburungObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDburungObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDpipaatasObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDpipaatasObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDPipabawahObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDPipabawahObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDtanahObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDtanahObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDbackgroundObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDbackgroundObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDscoreObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDscoreObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDlaserdetecObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDlaserdetecObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDDeatdetecObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDDeatdetecObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDkeluarObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDkeluarObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDTombolObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDTombolObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDRestartObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDRestartObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDHomeObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDHomeObjects2.length = 0;

gdjs.Gameover_95mediumCode.eventsList0(runtimeScene);
gdjs.Gameover_95mediumCode.GDburungObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDburungObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDpipaatasObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDpipaatasObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDPipabawahObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDPipabawahObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDtanahObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDtanahObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDbackgroundObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDbackgroundObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDscoreObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDscoreObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDlaserdetecObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDlaserdetecObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDDeatdetecObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDDeatdetecObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDkeluarObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDkeluarObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDTombolObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDTombolObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDRestartObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDRestartObjects2.length = 0;
gdjs.Gameover_95mediumCode.GDHomeObjects1.length = 0;
gdjs.Gameover_95mediumCode.GDHomeObjects2.length = 0;


return;

}

gdjs['Gameover_95mediumCode'] = gdjs.Gameover_95mediumCode;
