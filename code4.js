gdjs.Scanee_95hardCode = {};
gdjs.Scanee_95hardCode.localVariables = [];
gdjs.Scanee_95hardCode.GDburungObjects1= [];
gdjs.Scanee_95hardCode.GDburungObjects2= [];
gdjs.Scanee_95hardCode.GDpipaatasObjects1= [];
gdjs.Scanee_95hardCode.GDpipaatasObjects2= [];
gdjs.Scanee_95hardCode.GDPipabawahObjects1= [];
gdjs.Scanee_95hardCode.GDPipabawahObjects2= [];
gdjs.Scanee_95hardCode.GDtanahObjects1= [];
gdjs.Scanee_95hardCode.GDtanahObjects2= [];
gdjs.Scanee_95hardCode.GDbackgroundObjects1= [];
gdjs.Scanee_95hardCode.GDbackgroundObjects2= [];
gdjs.Scanee_95hardCode.GDscoreObjects1= [];
gdjs.Scanee_95hardCode.GDscoreObjects2= [];
gdjs.Scanee_95hardCode.GDlaserdetecObjects1= [];
gdjs.Scanee_95hardCode.GDlaserdetecObjects2= [];
gdjs.Scanee_95hardCode.GDDeatdetecObjects1= [];
gdjs.Scanee_95hardCode.GDDeatdetecObjects2= [];
gdjs.Scanee_95hardCode.GDBest_9595ScoreObjects1= [];
gdjs.Scanee_95hardCode.GDBest_9595ScoreObjects2= [];


gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDpipaatasObjects1Objects = Hashtable.newFrom({"pipaatas": gdjs.Scanee_95hardCode.GDpipaatasObjects1});
gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDPipabawahObjects1Objects = Hashtable.newFrom({"Pipabawah": gdjs.Scanee_95hardCode.GDPipabawahObjects1});
gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDlaserdetecObjects1Objects = Hashtable.newFrom({"laserdetec": gdjs.Scanee_95hardCode.GDlaserdetecObjects1});
gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDburungObjects1Objects = Hashtable.newFrom({"burung": gdjs.Scanee_95hardCode.GDburungObjects1});
gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDlaserdetecObjects1Objects = Hashtable.newFrom({"laserdetec": gdjs.Scanee_95hardCode.GDlaserdetecObjects1});
gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDburungObjects1Objects = Hashtable.newFrom({"burung": gdjs.Scanee_95hardCode.GDburungObjects1});
gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDDeatdetecObjects1Objects = Hashtable.newFrom({"Deatdetec": gdjs.Scanee_95hardCode.GDDeatdetecObjects1});
gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDburungObjects1Objects = Hashtable.newFrom({"burung": gdjs.Scanee_95hardCode.GDburungObjects1});
gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDpipaatasObjects1Objects = Hashtable.newFrom({"pipaatas": gdjs.Scanee_95hardCode.GDpipaatasObjects1});
gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDburungObjects1Objects = Hashtable.newFrom({"burung": gdjs.Scanee_95hardCode.GDburungObjects1});
gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDPipabawahObjects1Objects = Hashtable.newFrom({"Pipabawah": gdjs.Scanee_95hardCode.GDPipabawahObjects1});
gdjs.Scanee_95hardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "jeda");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "game1-sound.mp3", true, 90, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.Scanee_95hardCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("burung"), gdjs.Scanee_95hardCode.GDburungObjects1);
{for(var i = 0, len = gdjs.Scanee_95hardCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.Scanee_95hardCode.GDbackgroundObjects1[i].setXOffset(gdjs.Scanee_95hardCode.GDbackgroundObjects1[i].getXOffset() + (10));
}
}{for(var i = 0, len = gdjs.Scanee_95hardCode.GDburungObjects1.length ;i < len;++i) {
    gdjs.Scanee_95hardCode.GDburungObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("burung"), gdjs.Scanee_95hardCode.GDburungObjects1);
{for(var i = 0, len = gdjs.Scanee_95hardCode.GDburungObjects1.length ;i < len;++i) {
    gdjs.Scanee_95hardCode.GDburungObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.Scanee_95hardCode.GDburungObjects1.length ;i < len;++i) {
    gdjs.Scanee_95hardCode.GDburungObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "jeda") > 1.5;
if (isConditionTrue_0) {
gdjs.Scanee_95hardCode.GDPipabawahObjects1.length = 0;

gdjs.Scanee_95hardCode.GDlaserdetecObjects1.length = 0;

gdjs.Scanee_95hardCode.GDpipaatasObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDpipaatasObjects1Objects, 650, gdjs.randomFloatInRange(50, 600), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDPipabawahObjects1Objects, 650, (( gdjs.Scanee_95hardCode.GDpipaatasObjects1.length === 0 ) ? 0 :gdjs.Scanee_95hardCode.GDpipaatasObjects1[0].getPointY("")) + 350, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDlaserdetecObjects1Objects, 730, 0, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "jeda");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Pipabawah"), gdjs.Scanee_95hardCode.GDPipabawahObjects1);
gdjs.copyArray(runtimeScene.getObjects("laserdetec"), gdjs.Scanee_95hardCode.GDlaserdetecObjects1);
gdjs.copyArray(runtimeScene.getObjects("pipaatas"), gdjs.Scanee_95hardCode.GDpipaatasObjects1);
{for(var i = 0, len = gdjs.Scanee_95hardCode.GDpipaatasObjects1.length ;i < len;++i) {
    gdjs.Scanee_95hardCode.GDpipaatasObjects1[i].addForce(-(500), 0, 0);
}
}{for(var i = 0, len = gdjs.Scanee_95hardCode.GDPipabawahObjects1.length ;i < len;++i) {
    gdjs.Scanee_95hardCode.GDPipabawahObjects1[i].addForce(-(500), 0, 0);
}
}{for(var i = 0, len = gdjs.Scanee_95hardCode.GDlaserdetecObjects1.length ;i < len;++i) {
    gdjs.Scanee_95hardCode.GDlaserdetecObjects1[i].addForce(-(500), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("burung"), gdjs.Scanee_95hardCode.GDburungObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scanee_95hardCode.GDburungObjects1.length;i<l;++i) {
    if ( gdjs.Scanee_95hardCode.GDburungObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Scanee_95hardCode.GDburungObjects1[k] = gdjs.Scanee_95hardCode.GDburungObjects1[i];
        ++k;
    }
}
gdjs.Scanee_95hardCode.GDburungObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Scanee_95hardCode.GDburungObjects1 */
{for(var i = 0, len = gdjs.Scanee_95hardCode.GDburungObjects1.length ;i < len;++i) {
    gdjs.Scanee_95hardCode.GDburungObjects1[i].rotateTowardAngle(45, 150, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("burung"), gdjs.Scanee_95hardCode.GDburungObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scanee_95hardCode.GDburungObjects1.length;i<l;++i) {
    if ( !(gdjs.Scanee_95hardCode.GDburungObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.Scanee_95hardCode.GDburungObjects1[k] = gdjs.Scanee_95hardCode.GDburungObjects1[i];
        ++k;
    }
}
gdjs.Scanee_95hardCode.GDburungObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Scanee_95hardCode.GDburungObjects1 */
{for(var i = 0, len = gdjs.Scanee_95hardCode.GDburungObjects1.length ;i < len;++i) {
    gdjs.Scanee_95hardCode.GDburungObjects1[i].setAngle(-(45));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("burung"), gdjs.Scanee_95hardCode.GDburungObjects1);
gdjs.copyArray(runtimeScene.getObjects("laserdetec"), gdjs.Scanee_95hardCode.GDlaserdetecObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDburungObjects1Objects, gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDlaserdetecObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12528516);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Scanee_95hardCode.GDscoreObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Scanee_95hardCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Scanee_95hardCode.GDscoreObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "point_sound.wav", false, 90, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("laserdetec"), gdjs.Scanee_95hardCode.GDlaserdetecObjects1);
{for(var i = 0, len = gdjs.Scanee_95hardCode.GDlaserdetecObjects1.length ;i < len;++i) {
    gdjs.Scanee_95hardCode.GDlaserdetecObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Deatdetec"), gdjs.Scanee_95hardCode.GDDeatdetecObjects1);
gdjs.copyArray(runtimeScene.getObjects("burung"), gdjs.Scanee_95hardCode.GDburungObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDburungObjects1Objects, gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDDeatdetecObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameover_hard", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Deatdetec"), gdjs.Scanee_95hardCode.GDDeatdetecObjects1);
{for(var i = 0, len = gdjs.Scanee_95hardCode.GDDeatdetecObjects1.length ;i < len;++i) {
    gdjs.Scanee_95hardCode.GDDeatdetecObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("burung"), gdjs.Scanee_95hardCode.GDburungObjects1);
gdjs.copyArray(runtimeScene.getObjects("pipaatas"), gdjs.Scanee_95hardCode.GDpipaatasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDburungObjects1Objects, gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDpipaatasObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameover_hard", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pipabawah"), gdjs.Scanee_95hardCode.GDPipabawahObjects1);
gdjs.copyArray(runtimeScene.getObjects("burung"), gdjs.Scanee_95hardCode.GDburungObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDburungObjects1Objects, gdjs.Scanee_95hardCode.mapOfGDgdjs_9546Scanee_959595hardCode_9546GDPipabawahObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameover_hard", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber();
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Best_Score"), gdjs.Scanee_95hardCode.GDBest_9595ScoreObjects1);
{for(var i = 0, len = gdjs.Scanee_95hardCode.GDBest_9595ScoreObjects1.length ;i < len;++i) {
    gdjs.Scanee_95hardCode.GDBest_9595ScoreObjects1[i].getBehavior("Text").setText("Best Score: " + runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
}}

}


};

gdjs.Scanee_95hardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scanee_95hardCode.GDburungObjects1.length = 0;
gdjs.Scanee_95hardCode.GDburungObjects2.length = 0;
gdjs.Scanee_95hardCode.GDpipaatasObjects1.length = 0;
gdjs.Scanee_95hardCode.GDpipaatasObjects2.length = 0;
gdjs.Scanee_95hardCode.GDPipabawahObjects1.length = 0;
gdjs.Scanee_95hardCode.GDPipabawahObjects2.length = 0;
gdjs.Scanee_95hardCode.GDtanahObjects1.length = 0;
gdjs.Scanee_95hardCode.GDtanahObjects2.length = 0;
gdjs.Scanee_95hardCode.GDbackgroundObjects1.length = 0;
gdjs.Scanee_95hardCode.GDbackgroundObjects2.length = 0;
gdjs.Scanee_95hardCode.GDscoreObjects1.length = 0;
gdjs.Scanee_95hardCode.GDscoreObjects2.length = 0;
gdjs.Scanee_95hardCode.GDlaserdetecObjects1.length = 0;
gdjs.Scanee_95hardCode.GDlaserdetecObjects2.length = 0;
gdjs.Scanee_95hardCode.GDDeatdetecObjects1.length = 0;
gdjs.Scanee_95hardCode.GDDeatdetecObjects2.length = 0;
gdjs.Scanee_95hardCode.GDBest_9595ScoreObjects1.length = 0;
gdjs.Scanee_95hardCode.GDBest_9595ScoreObjects2.length = 0;

gdjs.Scanee_95hardCode.eventsList0(runtimeScene);
gdjs.Scanee_95hardCode.GDburungObjects1.length = 0;
gdjs.Scanee_95hardCode.GDburungObjects2.length = 0;
gdjs.Scanee_95hardCode.GDpipaatasObjects1.length = 0;
gdjs.Scanee_95hardCode.GDpipaatasObjects2.length = 0;
gdjs.Scanee_95hardCode.GDPipabawahObjects1.length = 0;
gdjs.Scanee_95hardCode.GDPipabawahObjects2.length = 0;
gdjs.Scanee_95hardCode.GDtanahObjects1.length = 0;
gdjs.Scanee_95hardCode.GDtanahObjects2.length = 0;
gdjs.Scanee_95hardCode.GDbackgroundObjects1.length = 0;
gdjs.Scanee_95hardCode.GDbackgroundObjects2.length = 0;
gdjs.Scanee_95hardCode.GDscoreObjects1.length = 0;
gdjs.Scanee_95hardCode.GDscoreObjects2.length = 0;
gdjs.Scanee_95hardCode.GDlaserdetecObjects1.length = 0;
gdjs.Scanee_95hardCode.GDlaserdetecObjects2.length = 0;
gdjs.Scanee_95hardCode.GDDeatdetecObjects1.length = 0;
gdjs.Scanee_95hardCode.GDDeatdetecObjects2.length = 0;
gdjs.Scanee_95hardCode.GDBest_9595ScoreObjects1.length = 0;
gdjs.Scanee_95hardCode.GDBest_9595ScoreObjects2.length = 0;


return;

}

gdjs['Scanee_95hardCode'] = gdjs.Scanee_95hardCode;
