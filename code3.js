gdjs.scanee_95mediumCode = {};
gdjs.scanee_95mediumCode.localVariables = [];
gdjs.scanee_95mediumCode.GDburungObjects1= [];
gdjs.scanee_95mediumCode.GDburungObjects2= [];
gdjs.scanee_95mediumCode.GDpipaatasObjects1= [];
gdjs.scanee_95mediumCode.GDpipaatasObjects2= [];
gdjs.scanee_95mediumCode.GDPipabawahObjects1= [];
gdjs.scanee_95mediumCode.GDPipabawahObjects2= [];
gdjs.scanee_95mediumCode.GDtanahObjects1= [];
gdjs.scanee_95mediumCode.GDtanahObjects2= [];
gdjs.scanee_95mediumCode.GDbackgroundObjects1= [];
gdjs.scanee_95mediumCode.GDbackgroundObjects2= [];
gdjs.scanee_95mediumCode.GDscoreObjects1= [];
gdjs.scanee_95mediumCode.GDscoreObjects2= [];
gdjs.scanee_95mediumCode.GDlaserdetecObjects1= [];
gdjs.scanee_95mediumCode.GDlaserdetecObjects2= [];
gdjs.scanee_95mediumCode.GDDeatdetecObjects1= [];
gdjs.scanee_95mediumCode.GDDeatdetecObjects2= [];
gdjs.scanee_95mediumCode.GDBest_9595scoreObjects1= [];
gdjs.scanee_95mediumCode.GDBest_9595scoreObjects2= [];


gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDpipaatasObjects1Objects = Hashtable.newFrom({"pipaatas": gdjs.scanee_95mediumCode.GDpipaatasObjects1});
gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDPipabawahObjects1Objects = Hashtable.newFrom({"Pipabawah": gdjs.scanee_95mediumCode.GDPipabawahObjects1});
gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDlaserdetecObjects1Objects = Hashtable.newFrom({"laserdetec": gdjs.scanee_95mediumCode.GDlaserdetecObjects1});
gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDburungObjects1Objects = Hashtable.newFrom({"burung": gdjs.scanee_95mediumCode.GDburungObjects1});
gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDlaserdetecObjects1Objects = Hashtable.newFrom({"laserdetec": gdjs.scanee_95mediumCode.GDlaserdetecObjects1});
gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDburungObjects1Objects = Hashtable.newFrom({"burung": gdjs.scanee_95mediumCode.GDburungObjects1});
gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDDeatdetecObjects1Objects = Hashtable.newFrom({"Deatdetec": gdjs.scanee_95mediumCode.GDDeatdetecObjects1});
gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDburungObjects1Objects = Hashtable.newFrom({"burung": gdjs.scanee_95mediumCode.GDburungObjects1});
gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDpipaatasObjects1Objects = Hashtable.newFrom({"pipaatas": gdjs.scanee_95mediumCode.GDpipaatasObjects1});
gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDburungObjects1Objects = Hashtable.newFrom({"burung": gdjs.scanee_95mediumCode.GDburungObjects1});
gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDPipabawahObjects1Objects = Hashtable.newFrom({"Pipabawah": gdjs.scanee_95mediumCode.GDPipabawahObjects1});
gdjs.scanee_95mediumCode.eventsList0 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.scanee_95mediumCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("burung"), gdjs.scanee_95mediumCode.GDburungObjects1);
{for(var i = 0, len = gdjs.scanee_95mediumCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.scanee_95mediumCode.GDbackgroundObjects1[i].setXOffset(gdjs.scanee_95mediumCode.GDbackgroundObjects1[i].getXOffset() + (8));
}
}{for(var i = 0, len = gdjs.scanee_95mediumCode.GDburungObjects1.length ;i < len;++i) {
    gdjs.scanee_95mediumCode.GDburungObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("burung"), gdjs.scanee_95mediumCode.GDburungObjects1);
{for(var i = 0, len = gdjs.scanee_95mediumCode.GDburungObjects1.length ;i < len;++i) {
    gdjs.scanee_95mediumCode.GDburungObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.scanee_95mediumCode.GDburungObjects1.length ;i < len;++i) {
    gdjs.scanee_95mediumCode.GDburungObjects1[i].getBehavior("PlatformerObject").setCanJump();
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
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "jeda") > 2;
if (isConditionTrue_0) {
gdjs.scanee_95mediumCode.GDPipabawahObjects1.length = 0;

gdjs.scanee_95mediumCode.GDlaserdetecObjects1.length = 0;

gdjs.scanee_95mediumCode.GDpipaatasObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDpipaatasObjects1Objects, 650, gdjs.randomFloatInRange(50, 600), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDPipabawahObjects1Objects, 650, (( gdjs.scanee_95mediumCode.GDpipaatasObjects1.length === 0 ) ? 0 :gdjs.scanee_95mediumCode.GDpipaatasObjects1[0].getPointY("")) + 350, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDlaserdetecObjects1Objects, 730, 0, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "jeda");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Pipabawah"), gdjs.scanee_95mediumCode.GDPipabawahObjects1);
gdjs.copyArray(runtimeScene.getObjects("laserdetec"), gdjs.scanee_95mediumCode.GDlaserdetecObjects1);
gdjs.copyArray(runtimeScene.getObjects("pipaatas"), gdjs.scanee_95mediumCode.GDpipaatasObjects1);
{for(var i = 0, len = gdjs.scanee_95mediumCode.GDpipaatasObjects1.length ;i < len;++i) {
    gdjs.scanee_95mediumCode.GDpipaatasObjects1[i].addForce(-(400), 0, 0);
}
}{for(var i = 0, len = gdjs.scanee_95mediumCode.GDPipabawahObjects1.length ;i < len;++i) {
    gdjs.scanee_95mediumCode.GDPipabawahObjects1[i].addForce(-(400), 0, 0);
}
}{for(var i = 0, len = gdjs.scanee_95mediumCode.GDlaserdetecObjects1.length ;i < len;++i) {
    gdjs.scanee_95mediumCode.GDlaserdetecObjects1[i].addForce(-(400), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("burung"), gdjs.scanee_95mediumCode.GDburungObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scanee_95mediumCode.GDburungObjects1.length;i<l;++i) {
    if ( gdjs.scanee_95mediumCode.GDburungObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.scanee_95mediumCode.GDburungObjects1[k] = gdjs.scanee_95mediumCode.GDburungObjects1[i];
        ++k;
    }
}
gdjs.scanee_95mediumCode.GDburungObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.scanee_95mediumCode.GDburungObjects1 */
{for(var i = 0, len = gdjs.scanee_95mediumCode.GDburungObjects1.length ;i < len;++i) {
    gdjs.scanee_95mediumCode.GDburungObjects1[i].rotateTowardAngle(45, 150, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("burung"), gdjs.scanee_95mediumCode.GDburungObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scanee_95mediumCode.GDburungObjects1.length;i<l;++i) {
    if ( !(gdjs.scanee_95mediumCode.GDburungObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.scanee_95mediumCode.GDburungObjects1[k] = gdjs.scanee_95mediumCode.GDburungObjects1[i];
        ++k;
    }
}
gdjs.scanee_95mediumCode.GDburungObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.scanee_95mediumCode.GDburungObjects1 */
{for(var i = 0, len = gdjs.scanee_95mediumCode.GDburungObjects1.length ;i < len;++i) {
    gdjs.scanee_95mediumCode.GDburungObjects1[i].setAngle(-(45));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("burung"), gdjs.scanee_95mediumCode.GDburungObjects1);
gdjs.copyArray(runtimeScene.getObjects("laserdetec"), gdjs.scanee_95mediumCode.GDlaserdetecObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDburungObjects1Objects, gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDlaserdetecObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12482812);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.scanee_95mediumCode.GDscoreObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.scanee_95mediumCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.scanee_95mediumCode.GDscoreObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "point_sound.wav", false, 90, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("laserdetec"), gdjs.scanee_95mediumCode.GDlaserdetecObjects1);
{for(var i = 0, len = gdjs.scanee_95mediumCode.GDlaserdetecObjects1.length ;i < len;++i) {
    gdjs.scanee_95mediumCode.GDlaserdetecObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Deatdetec"), gdjs.scanee_95mediumCode.GDDeatdetecObjects1);
gdjs.copyArray(runtimeScene.getObjects("burung"), gdjs.scanee_95mediumCode.GDburungObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDburungObjects1Objects, gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDDeatdetecObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameover_medium", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Deatdetec"), gdjs.scanee_95mediumCode.GDDeatdetecObjects1);
{for(var i = 0, len = gdjs.scanee_95mediumCode.GDDeatdetecObjects1.length ;i < len;++i) {
    gdjs.scanee_95mediumCode.GDDeatdetecObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("burung"), gdjs.scanee_95mediumCode.GDburungObjects1);
gdjs.copyArray(runtimeScene.getObjects("pipaatas"), gdjs.scanee_95mediumCode.GDpipaatasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDburungObjects1Objects, gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDpipaatasObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameover_medium", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pipabawah"), gdjs.scanee_95mediumCode.GDPipabawahObjects1);
gdjs.copyArray(runtimeScene.getObjects("burung"), gdjs.scanee_95mediumCode.GDburungObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDburungObjects1Objects, gdjs.scanee_95mediumCode.mapOfGDgdjs_9546scanee_959595mediumCode_9546GDPipabawahObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameover_medium", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber();
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Best_score"), gdjs.scanee_95mediumCode.GDBest_9595scoreObjects1);
{for(var i = 0, len = gdjs.scanee_95mediumCode.GDBest_9595scoreObjects1.length ;i < len;++i) {
    gdjs.scanee_95mediumCode.GDBest_9595scoreObjects1[i].getBehavior("Text").setText("Best Score: " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}}

}


};

gdjs.scanee_95mediumCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.scanee_95mediumCode.GDburungObjects1.length = 0;
gdjs.scanee_95mediumCode.GDburungObjects2.length = 0;
gdjs.scanee_95mediumCode.GDpipaatasObjects1.length = 0;
gdjs.scanee_95mediumCode.GDpipaatasObjects2.length = 0;
gdjs.scanee_95mediumCode.GDPipabawahObjects1.length = 0;
gdjs.scanee_95mediumCode.GDPipabawahObjects2.length = 0;
gdjs.scanee_95mediumCode.GDtanahObjects1.length = 0;
gdjs.scanee_95mediumCode.GDtanahObjects2.length = 0;
gdjs.scanee_95mediumCode.GDbackgroundObjects1.length = 0;
gdjs.scanee_95mediumCode.GDbackgroundObjects2.length = 0;
gdjs.scanee_95mediumCode.GDscoreObjects1.length = 0;
gdjs.scanee_95mediumCode.GDscoreObjects2.length = 0;
gdjs.scanee_95mediumCode.GDlaserdetecObjects1.length = 0;
gdjs.scanee_95mediumCode.GDlaserdetecObjects2.length = 0;
gdjs.scanee_95mediumCode.GDDeatdetecObjects1.length = 0;
gdjs.scanee_95mediumCode.GDDeatdetecObjects2.length = 0;
gdjs.scanee_95mediumCode.GDBest_9595scoreObjects1.length = 0;
gdjs.scanee_95mediumCode.GDBest_9595scoreObjects2.length = 0;

gdjs.scanee_95mediumCode.eventsList0(runtimeScene);
gdjs.scanee_95mediumCode.GDburungObjects1.length = 0;
gdjs.scanee_95mediumCode.GDburungObjects2.length = 0;
gdjs.scanee_95mediumCode.GDpipaatasObjects1.length = 0;
gdjs.scanee_95mediumCode.GDpipaatasObjects2.length = 0;
gdjs.scanee_95mediumCode.GDPipabawahObjects1.length = 0;
gdjs.scanee_95mediumCode.GDPipabawahObjects2.length = 0;
gdjs.scanee_95mediumCode.GDtanahObjects1.length = 0;
gdjs.scanee_95mediumCode.GDtanahObjects2.length = 0;
gdjs.scanee_95mediumCode.GDbackgroundObjects1.length = 0;
gdjs.scanee_95mediumCode.GDbackgroundObjects2.length = 0;
gdjs.scanee_95mediumCode.GDscoreObjects1.length = 0;
gdjs.scanee_95mediumCode.GDscoreObjects2.length = 0;
gdjs.scanee_95mediumCode.GDlaserdetecObjects1.length = 0;
gdjs.scanee_95mediumCode.GDlaserdetecObjects2.length = 0;
gdjs.scanee_95mediumCode.GDDeatdetecObjects1.length = 0;
gdjs.scanee_95mediumCode.GDDeatdetecObjects2.length = 0;
gdjs.scanee_95mediumCode.GDBest_9595scoreObjects1.length = 0;
gdjs.scanee_95mediumCode.GDBest_9595scoreObjects2.length = 0;


return;

}

gdjs['scanee_95mediumCode'] = gdjs.scanee_95mediumCode;
