gdjs.HomeCode = {};
gdjs.HomeCode.localVariables = [];
gdjs.HomeCode.GDburungObjects1= [];
gdjs.HomeCode.GDburungObjects2= [];
gdjs.HomeCode.GDpipaatasObjects1= [];
gdjs.HomeCode.GDpipaatasObjects2= [];
gdjs.HomeCode.GDPipabawahObjects1= [];
gdjs.HomeCode.GDPipabawahObjects2= [];
gdjs.HomeCode.GDtanahObjects1= [];
gdjs.HomeCode.GDtanahObjects2= [];
gdjs.HomeCode.GDbackgroundObjects1= [];
gdjs.HomeCode.GDbackgroundObjects2= [];
gdjs.HomeCode.GDscoreObjects1= [];
gdjs.HomeCode.GDscoreObjects2= [];
gdjs.HomeCode.GDlaserdetecObjects1= [];
gdjs.HomeCode.GDlaserdetecObjects2= [];
gdjs.HomeCode.GDDeatdetecObjects1= [];
gdjs.HomeCode.GDDeatdetecObjects2= [];
gdjs.HomeCode.GDTombolObjects1= [];
gdjs.HomeCode.GDTombolObjects2= [];
gdjs.HomeCode.GDMulaiObjects1= [];
gdjs.HomeCode.GDMulaiObjects2= [];
gdjs.HomeCode.GDJudulObjects1= [];
gdjs.HomeCode.GDJudulObjects2= [];
gdjs.HomeCode.GDJudul2Objects1= [];
gdjs.HomeCode.GDJudul2Objects2= [];
gdjs.HomeCode.GDSpeaker0Objects1= [];
gdjs.HomeCode.GDSpeaker0Objects2= [];
gdjs.HomeCode.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs.HomeCode.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs.HomeCode.GDSpeakerCrossedObjects1= [];
gdjs.HomeCode.GDSpeakerCrossedObjects2= [];
gdjs.HomeCode.GDNewShapePainterObjects1= [];
gdjs.HomeCode.GDNewShapePainterObjects2= [];


gdjs.HomeCode.eventsList0 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.HomeCode.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.HomeCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDbackgroundObjects1[i].setXOffset(gdjs.HomeCode.GDbackgroundObjects1[i].getXOffset() + (6));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mulai"), gdjs.HomeCode.GDMulaiObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDMulaiObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDMulaiObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDMulaiObjects1[k] = gdjs.HomeCode.GDMulaiObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDMulaiObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


};

gdjs.HomeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HomeCode.GDburungObjects1.length = 0;
gdjs.HomeCode.GDburungObjects2.length = 0;
gdjs.HomeCode.GDpipaatasObjects1.length = 0;
gdjs.HomeCode.GDpipaatasObjects2.length = 0;
gdjs.HomeCode.GDPipabawahObjects1.length = 0;
gdjs.HomeCode.GDPipabawahObjects2.length = 0;
gdjs.HomeCode.GDtanahObjects1.length = 0;
gdjs.HomeCode.GDtanahObjects2.length = 0;
gdjs.HomeCode.GDbackgroundObjects1.length = 0;
gdjs.HomeCode.GDbackgroundObjects2.length = 0;
gdjs.HomeCode.GDscoreObjects1.length = 0;
gdjs.HomeCode.GDscoreObjects2.length = 0;
gdjs.HomeCode.GDlaserdetecObjects1.length = 0;
gdjs.HomeCode.GDlaserdetecObjects2.length = 0;
gdjs.HomeCode.GDDeatdetecObjects1.length = 0;
gdjs.HomeCode.GDDeatdetecObjects2.length = 0;
gdjs.HomeCode.GDTombolObjects1.length = 0;
gdjs.HomeCode.GDTombolObjects2.length = 0;
gdjs.HomeCode.GDMulaiObjects1.length = 0;
gdjs.HomeCode.GDMulaiObjects2.length = 0;
gdjs.HomeCode.GDJudulObjects1.length = 0;
gdjs.HomeCode.GDJudulObjects2.length = 0;
gdjs.HomeCode.GDJudul2Objects1.length = 0;
gdjs.HomeCode.GDJudul2Objects2.length = 0;
gdjs.HomeCode.GDSpeaker0Objects1.length = 0;
gdjs.HomeCode.GDSpeaker0Objects2.length = 0;
gdjs.HomeCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs.HomeCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs.HomeCode.GDSpeakerCrossedObjects1.length = 0;
gdjs.HomeCode.GDSpeakerCrossedObjects2.length = 0;
gdjs.HomeCode.GDNewShapePainterObjects1.length = 0;
gdjs.HomeCode.GDNewShapePainterObjects2.length = 0;

gdjs.HomeCode.eventsList0(runtimeScene);
gdjs.HomeCode.GDburungObjects1.length = 0;
gdjs.HomeCode.GDburungObjects2.length = 0;
gdjs.HomeCode.GDpipaatasObjects1.length = 0;
gdjs.HomeCode.GDpipaatasObjects2.length = 0;
gdjs.HomeCode.GDPipabawahObjects1.length = 0;
gdjs.HomeCode.GDPipabawahObjects2.length = 0;
gdjs.HomeCode.GDtanahObjects1.length = 0;
gdjs.HomeCode.GDtanahObjects2.length = 0;
gdjs.HomeCode.GDbackgroundObjects1.length = 0;
gdjs.HomeCode.GDbackgroundObjects2.length = 0;
gdjs.HomeCode.GDscoreObjects1.length = 0;
gdjs.HomeCode.GDscoreObjects2.length = 0;
gdjs.HomeCode.GDlaserdetecObjects1.length = 0;
gdjs.HomeCode.GDlaserdetecObjects2.length = 0;
gdjs.HomeCode.GDDeatdetecObjects1.length = 0;
gdjs.HomeCode.GDDeatdetecObjects2.length = 0;
gdjs.HomeCode.GDTombolObjects1.length = 0;
gdjs.HomeCode.GDTombolObjects2.length = 0;
gdjs.HomeCode.GDMulaiObjects1.length = 0;
gdjs.HomeCode.GDMulaiObjects2.length = 0;
gdjs.HomeCode.GDJudulObjects1.length = 0;
gdjs.HomeCode.GDJudulObjects2.length = 0;
gdjs.HomeCode.GDJudul2Objects1.length = 0;
gdjs.HomeCode.GDJudul2Objects2.length = 0;
gdjs.HomeCode.GDSpeaker0Objects1.length = 0;
gdjs.HomeCode.GDSpeaker0Objects2.length = 0;
gdjs.HomeCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs.HomeCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs.HomeCode.GDSpeakerCrossedObjects1.length = 0;
gdjs.HomeCode.GDSpeakerCrossedObjects2.length = 0;
gdjs.HomeCode.GDNewShapePainterObjects1.length = 0;
gdjs.HomeCode.GDNewShapePainterObjects2.length = 0;


return;

}

gdjs['HomeCode'] = gdjs.HomeCode;
