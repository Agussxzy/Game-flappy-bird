gdjs.Gameover_95hardCode = {};
gdjs.Gameover_95hardCode.localVariables = [];
gdjs.Gameover_95hardCode.GDburungObjects1= [];
gdjs.Gameover_95hardCode.GDburungObjects2= [];
gdjs.Gameover_95hardCode.GDpipaatasObjects1= [];
gdjs.Gameover_95hardCode.GDpipaatasObjects2= [];
gdjs.Gameover_95hardCode.GDPipabawahObjects1= [];
gdjs.Gameover_95hardCode.GDPipabawahObjects2= [];
gdjs.Gameover_95hardCode.GDtanahObjects1= [];
gdjs.Gameover_95hardCode.GDtanahObjects2= [];
gdjs.Gameover_95hardCode.GDbackgroundObjects1= [];
gdjs.Gameover_95hardCode.GDbackgroundObjects2= [];
gdjs.Gameover_95hardCode.GDscoreObjects1= [];
gdjs.Gameover_95hardCode.GDscoreObjects2= [];
gdjs.Gameover_95hardCode.GDlaserdetecObjects1= [];
gdjs.Gameover_95hardCode.GDlaserdetecObjects2= [];
gdjs.Gameover_95hardCode.GDDeatdetecObjects1= [];
gdjs.Gameover_95hardCode.GDDeatdetecObjects2= [];
gdjs.Gameover_95hardCode.GDkeluarObjects1= [];
gdjs.Gameover_95hardCode.GDkeluarObjects2= [];
gdjs.Gameover_95hardCode.GDTombolObjects1= [];
gdjs.Gameover_95hardCode.GDTombolObjects2= [];
gdjs.Gameover_95hardCode.GDRestartObjects1= [];
gdjs.Gameover_95hardCode.GDRestartObjects2= [];
gdjs.Gameover_95hardCode.GDHomeObjects1= [];
gdjs.Gameover_95hardCode.GDHomeObjects2= [];


gdjs.Gameover_95hardCode.eventsList0 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.Gameover_95hardCode.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.Gameover_95hardCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.Gameover_95hardCode.GDbackgroundObjects1[i].setXOffset(gdjs.Gameover_95hardCode.GDbackgroundObjects1[i].getXOffset() + (6));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Gameover_95hardCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Gameover_95hardCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Gameover_95hardCode.GDscoreObjects1[i].getBehavior("Text").setText("Score: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.Gameover_95hardCode.GDRestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameover_95hardCode.GDRestartObjects1.length;i<l;++i) {
    if ( gdjs.Gameover_95hardCode.GDRestartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Gameover_95hardCode.GDRestartObjects1[k] = gdjs.Gameover_95hardCode.GDRestartObjects1[i];
        ++k;
    }
}
gdjs.Gameover_95hardCode.GDRestartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scanee_hard", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.Gameover_95hardCode.GDHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameover_95hardCode.GDHomeObjects1.length;i<l;++i) {
    if ( gdjs.Gameover_95hardCode.GDHomeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Gameover_95hardCode.GDHomeObjects1[k] = gdjs.Gameover_95hardCode.GDHomeObjects1[i];
        ++k;
    }
}
gdjs.Gameover_95hardCode.GDHomeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


};

gdjs.Gameover_95hardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Gameover_95hardCode.GDburungObjects1.length = 0;
gdjs.Gameover_95hardCode.GDburungObjects2.length = 0;
gdjs.Gameover_95hardCode.GDpipaatasObjects1.length = 0;
gdjs.Gameover_95hardCode.GDpipaatasObjects2.length = 0;
gdjs.Gameover_95hardCode.GDPipabawahObjects1.length = 0;
gdjs.Gameover_95hardCode.GDPipabawahObjects2.length = 0;
gdjs.Gameover_95hardCode.GDtanahObjects1.length = 0;
gdjs.Gameover_95hardCode.GDtanahObjects2.length = 0;
gdjs.Gameover_95hardCode.GDbackgroundObjects1.length = 0;
gdjs.Gameover_95hardCode.GDbackgroundObjects2.length = 0;
gdjs.Gameover_95hardCode.GDscoreObjects1.length = 0;
gdjs.Gameover_95hardCode.GDscoreObjects2.length = 0;
gdjs.Gameover_95hardCode.GDlaserdetecObjects1.length = 0;
gdjs.Gameover_95hardCode.GDlaserdetecObjects2.length = 0;
gdjs.Gameover_95hardCode.GDDeatdetecObjects1.length = 0;
gdjs.Gameover_95hardCode.GDDeatdetecObjects2.length = 0;
gdjs.Gameover_95hardCode.GDkeluarObjects1.length = 0;
gdjs.Gameover_95hardCode.GDkeluarObjects2.length = 0;
gdjs.Gameover_95hardCode.GDTombolObjects1.length = 0;
gdjs.Gameover_95hardCode.GDTombolObjects2.length = 0;
gdjs.Gameover_95hardCode.GDRestartObjects1.length = 0;
gdjs.Gameover_95hardCode.GDRestartObjects2.length = 0;
gdjs.Gameover_95hardCode.GDHomeObjects1.length = 0;
gdjs.Gameover_95hardCode.GDHomeObjects2.length = 0;

gdjs.Gameover_95hardCode.eventsList0(runtimeScene);
gdjs.Gameover_95hardCode.GDburungObjects1.length = 0;
gdjs.Gameover_95hardCode.GDburungObjects2.length = 0;
gdjs.Gameover_95hardCode.GDpipaatasObjects1.length = 0;
gdjs.Gameover_95hardCode.GDpipaatasObjects2.length = 0;
gdjs.Gameover_95hardCode.GDPipabawahObjects1.length = 0;
gdjs.Gameover_95hardCode.GDPipabawahObjects2.length = 0;
gdjs.Gameover_95hardCode.GDtanahObjects1.length = 0;
gdjs.Gameover_95hardCode.GDtanahObjects2.length = 0;
gdjs.Gameover_95hardCode.GDbackgroundObjects1.length = 0;
gdjs.Gameover_95hardCode.GDbackgroundObjects2.length = 0;
gdjs.Gameover_95hardCode.GDscoreObjects1.length = 0;
gdjs.Gameover_95hardCode.GDscoreObjects2.length = 0;
gdjs.Gameover_95hardCode.GDlaserdetecObjects1.length = 0;
gdjs.Gameover_95hardCode.GDlaserdetecObjects2.length = 0;
gdjs.Gameover_95hardCode.GDDeatdetecObjects1.length = 0;
gdjs.Gameover_95hardCode.GDDeatdetecObjects2.length = 0;
gdjs.Gameover_95hardCode.GDkeluarObjects1.length = 0;
gdjs.Gameover_95hardCode.GDkeluarObjects2.length = 0;
gdjs.Gameover_95hardCode.GDTombolObjects1.length = 0;
gdjs.Gameover_95hardCode.GDTombolObjects2.length = 0;
gdjs.Gameover_95hardCode.GDRestartObjects1.length = 0;
gdjs.Gameover_95hardCode.GDRestartObjects2.length = 0;
gdjs.Gameover_95hardCode.GDHomeObjects1.length = 0;
gdjs.Gameover_95hardCode.GDHomeObjects2.length = 0;


return;

}

gdjs['Gameover_95hardCode'] = gdjs.Gameover_95hardCode;
