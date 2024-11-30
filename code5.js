gdjs.Gameover_95easyCode = {};
gdjs.Gameover_95easyCode.localVariables = [];
gdjs.Gameover_95easyCode.GDburungObjects1= [];
gdjs.Gameover_95easyCode.GDburungObjects2= [];
gdjs.Gameover_95easyCode.GDpipaatasObjects1= [];
gdjs.Gameover_95easyCode.GDpipaatasObjects2= [];
gdjs.Gameover_95easyCode.GDPipabawahObjects1= [];
gdjs.Gameover_95easyCode.GDPipabawahObjects2= [];
gdjs.Gameover_95easyCode.GDtanahObjects1= [];
gdjs.Gameover_95easyCode.GDtanahObjects2= [];
gdjs.Gameover_95easyCode.GDbackgroundObjects1= [];
gdjs.Gameover_95easyCode.GDbackgroundObjects2= [];
gdjs.Gameover_95easyCode.GDscoreObjects1= [];
gdjs.Gameover_95easyCode.GDscoreObjects2= [];
gdjs.Gameover_95easyCode.GDlaserdetecObjects1= [];
gdjs.Gameover_95easyCode.GDlaserdetecObjects2= [];
gdjs.Gameover_95easyCode.GDDeatdetecObjects1= [];
gdjs.Gameover_95easyCode.GDDeatdetecObjects2= [];
gdjs.Gameover_95easyCode.GDkeluarObjects1= [];
gdjs.Gameover_95easyCode.GDkeluarObjects2= [];
gdjs.Gameover_95easyCode.GDTombolObjects1= [];
gdjs.Gameover_95easyCode.GDTombolObjects2= [];
gdjs.Gameover_95easyCode.GDRestartObjects1= [];
gdjs.Gameover_95easyCode.GDRestartObjects2= [];
gdjs.Gameover_95easyCode.GDHomeObjects1= [];
gdjs.Gameover_95easyCode.GDHomeObjects2= [];


gdjs.Gameover_95easyCode.eventsList0 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.Gameover_95easyCode.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.Gameover_95easyCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.Gameover_95easyCode.GDbackgroundObjects1[i].setXOffset(gdjs.Gameover_95easyCode.GDbackgroundObjects1[i].getXOffset() + (6));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Gameover_95easyCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Gameover_95easyCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Gameover_95easyCode.GDscoreObjects1[i].getBehavior("Text").setText("Score: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.Gameover_95easyCode.GDRestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameover_95easyCode.GDRestartObjects1.length;i<l;++i) {
    if ( gdjs.Gameover_95easyCode.GDRestartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Gameover_95easyCode.GDRestartObjects1[k] = gdjs.Gameover_95easyCode.GDRestartObjects1[i];
        ++k;
    }
}
gdjs.Gameover_95easyCode.GDRestartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "scanee_easy", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.Gameover_95easyCode.GDHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameover_95easyCode.GDHomeObjects1.length;i<l;++i) {
    if ( gdjs.Gameover_95easyCode.GDHomeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Gameover_95easyCode.GDHomeObjects1[k] = gdjs.Gameover_95easyCode.GDHomeObjects1[i];
        ++k;
    }
}
gdjs.Gameover_95easyCode.GDHomeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


};

gdjs.Gameover_95easyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Gameover_95easyCode.GDburungObjects1.length = 0;
gdjs.Gameover_95easyCode.GDburungObjects2.length = 0;
gdjs.Gameover_95easyCode.GDpipaatasObjects1.length = 0;
gdjs.Gameover_95easyCode.GDpipaatasObjects2.length = 0;
gdjs.Gameover_95easyCode.GDPipabawahObjects1.length = 0;
gdjs.Gameover_95easyCode.GDPipabawahObjects2.length = 0;
gdjs.Gameover_95easyCode.GDtanahObjects1.length = 0;
gdjs.Gameover_95easyCode.GDtanahObjects2.length = 0;
gdjs.Gameover_95easyCode.GDbackgroundObjects1.length = 0;
gdjs.Gameover_95easyCode.GDbackgroundObjects2.length = 0;
gdjs.Gameover_95easyCode.GDscoreObjects1.length = 0;
gdjs.Gameover_95easyCode.GDscoreObjects2.length = 0;
gdjs.Gameover_95easyCode.GDlaserdetecObjects1.length = 0;
gdjs.Gameover_95easyCode.GDlaserdetecObjects2.length = 0;
gdjs.Gameover_95easyCode.GDDeatdetecObjects1.length = 0;
gdjs.Gameover_95easyCode.GDDeatdetecObjects2.length = 0;
gdjs.Gameover_95easyCode.GDkeluarObjects1.length = 0;
gdjs.Gameover_95easyCode.GDkeluarObjects2.length = 0;
gdjs.Gameover_95easyCode.GDTombolObjects1.length = 0;
gdjs.Gameover_95easyCode.GDTombolObjects2.length = 0;
gdjs.Gameover_95easyCode.GDRestartObjects1.length = 0;
gdjs.Gameover_95easyCode.GDRestartObjects2.length = 0;
gdjs.Gameover_95easyCode.GDHomeObjects1.length = 0;
gdjs.Gameover_95easyCode.GDHomeObjects2.length = 0;

gdjs.Gameover_95easyCode.eventsList0(runtimeScene);
gdjs.Gameover_95easyCode.GDburungObjects1.length = 0;
gdjs.Gameover_95easyCode.GDburungObjects2.length = 0;
gdjs.Gameover_95easyCode.GDpipaatasObjects1.length = 0;
gdjs.Gameover_95easyCode.GDpipaatasObjects2.length = 0;
gdjs.Gameover_95easyCode.GDPipabawahObjects1.length = 0;
gdjs.Gameover_95easyCode.GDPipabawahObjects2.length = 0;
gdjs.Gameover_95easyCode.GDtanahObjects1.length = 0;
gdjs.Gameover_95easyCode.GDtanahObjects2.length = 0;
gdjs.Gameover_95easyCode.GDbackgroundObjects1.length = 0;
gdjs.Gameover_95easyCode.GDbackgroundObjects2.length = 0;
gdjs.Gameover_95easyCode.GDscoreObjects1.length = 0;
gdjs.Gameover_95easyCode.GDscoreObjects2.length = 0;
gdjs.Gameover_95easyCode.GDlaserdetecObjects1.length = 0;
gdjs.Gameover_95easyCode.GDlaserdetecObjects2.length = 0;
gdjs.Gameover_95easyCode.GDDeatdetecObjects1.length = 0;
gdjs.Gameover_95easyCode.GDDeatdetecObjects2.length = 0;
gdjs.Gameover_95easyCode.GDkeluarObjects1.length = 0;
gdjs.Gameover_95easyCode.GDkeluarObjects2.length = 0;
gdjs.Gameover_95easyCode.GDTombolObjects1.length = 0;
gdjs.Gameover_95easyCode.GDTombolObjects2.length = 0;
gdjs.Gameover_95easyCode.GDRestartObjects1.length = 0;
gdjs.Gameover_95easyCode.GDRestartObjects2.length = 0;
gdjs.Gameover_95easyCode.GDHomeObjects1.length = 0;
gdjs.Gameover_95easyCode.GDHomeObjects2.length = 0;


return;

}

gdjs['Gameover_95easyCode'] = gdjs.Gameover_95easyCode;
