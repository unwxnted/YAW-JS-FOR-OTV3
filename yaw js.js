
// UI

UI.AddLabel("Welcome to F4STZSense");
UI.AddCheckbox("Resolver");
UI.AddHotkey("DodgeBruteforce");
UI.AddCheckbox("F4STZyaw");
UI.AddCheckbox("Fastest DT");
UI.AddCheckbox("Ideal tick");
UI.AddCheckbox("Jitter pitch (Untrusted Mode)");
UI.AddCheckbox("LagSync Breaker");
UI.AddCheckbox("Slow walk Breaker(Not have dt)");
UI.AddCheckbox("leg breaker");



// functions 

function randomIntFrom(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


Inverted = UI('IsHotkeyActive')('Anti-Aim', 'Fake angles', 'Inverter');

// RESOLVER 

function resolver(){

    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Resolver")) {

        CreateMove(ForceTarget(Head,Pelvis,random.math(-56,56)));
        CreateMove(ForceHitboxSafety(Head),random.math(-77,56))(AntiAim.ForceHitboxSafety(-56,56));
        CreateMove(ForceTargetSafety(Head),random.math(-60,60));
        CreateMove(ForceTargetMiniumDamage,random.min(-101,101));
        CreateMove(UI.SetValue("Rage", "Scout", "HeadPoint Scale", 75));
        CreateMove(ForceTargetHitchance,random.min(74,85));  // safe values: 73, 85

    }

}


// DODGEBRUTEFORCE

function DodgeBruteforce(){

    if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "DodgeBruteforce")){
        AntiAim.SetOverride(1);
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 5);
        AntiAim.SetFakeOffset(0);
        AntiAim.SetRealOffset(-17);
        AntiAim.SetLBYOffset(0);

    }else{
        var tick = Globals.Tickcount();
        if (tick % 2 == 0){
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
        }else{
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
        }
        AntiAim.SetOverride(0);
    }


}

// LAGSYNC

function lagsync(){

    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "LagSync Breaker")){

        var tick = Globals.Tickcount(); 

        if (tick % 2 == 0){

            UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", 10);
            UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 12);



        }else if(tick % 5 == 0){
            UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 2);
            UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", 5);
        
        }else{
            UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 6);
            UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", 32);
        
        }


    }


}

// FLIP FUNCTION

function Flip(){

    AntiAim.SetOverride(1);
    UI.ToggleHotkey("Anti-Aim", "Fake angles", "inverter");
    AntiAim.SetOverride(0);

    
    
}

// THE FIRST PART OF THE YAW

function betterYAW1(){

    var real = randomIntFrom(-80,80);
    var lby = randomIntFrom(-132,118);
    var screen_size = Global.GetScreenSize();
    Render.StringCustom(screen_size[0] / 2 + 1, screen_size[1] - 500, 30, String(real), [100, 0, 255, 199], Render.AddFont("Verdana", 8, 600));

    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "F4STZyaw")){

        if(Inverted){
            AntiAim.SetOverride(1);
            AntiAim.SetFakeOffset(0x1a);
            AntiAim['SetRealOffset'](real);
            AntiAim['SetLBYOffset'](lby);
            UI.ToggleHotkey("Anti-Aim", "Fake angles", "inverter");
            AntiAim.SetOverride(0);
        }else{
            AntiAim.SetOverride(1);
            AntiAim['SetFakeOffset'](-0x10);
            AntiAim['SetRealOffset'](real);
            AntiAim['SetLBYOffset'](lby);
            UI.ToggleHotkey("Anti-Aim", "Fake angles", "inverter");
            AntiAim.SetOverride(0);
        }


        
    }

}


// THE SECOND PART OF THE YAW

function betterYaw2(){


    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "F4STZyaw")){

        var tick = Globals.Tickcount();

        if (tick % 2 == 0){
            AntiAim.SetOverride(1);
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 3);
            UI.SetValue("Anti-Aim", "Fake angles","Desync on shot", true);
            UI.SetValue("Anti-Aim",  "Fake angles","Avoid overlap", true);
            UI.SetValue("Anti-Aim", "Extra", "Jitter move", true);
            UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 0);
            UI.SetValue("Anti-Aim", "Fake angles", "Inverter flip", ["Walk", "Run", " In air"]);
            UI.ToggleHotkey("Anti-Aim", "Fake angles", "inverter");
            AntiAim.SetOverride(0);
            
        }else{
            AntiAim.SetOverride(1);
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", -3);
            UI.SetValue("Anti-Aim", "Fake angles","Desync on shot", false);
            UI.SetValue("Anti-Aim", "Fake angles","Hide real angle", false);
            UI.SetValue("Anti-Aim", "Fake angles","Avoid overlap", false);
            UI.SetValue("Anti-Aim", "Extra", "Jitter move", false);
            UI.SetValue("Anti-Aim", "Fake angles", "Inverter flip", []);
            UI.ToggleHotkey("Anti-Aim", "Fake angles", "inverter");
            AntiAim.SetOverride(0);
            
           
        }
        

    }


}


// JITTER PITCH

function JitterPitch(){

    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter pitch (Untrusted Mode)")){

        var tick = Globals.Tickcount();
        
        if(tick % 2 == 0){
            UI.SetValue("Anti-Aim", "Extra", "Pitch", 1);
        }else{
            UI.SetValue("Anti-Aim", "Extra", "Pitch", 6);
        }

        

    }


}

// LEG BREAKER

function legBreaker(){


    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "leg breaker")){
        var tick = Globals.Tickcount();
            
        if(tick % 5 == 0){
            UI.SetValue("Misc", "General", "Movement", "Slide walk", true);
            UI.SetValue("Misc", "General", "Movement", "Accurate walk", true);
        }else{
            UI.SetValue("Misc", "General", "Movement", "Slide walk", false);
            UI.SetValue("Misc", "General", "Movement", "Accurate walk", false);
        }
    }else{
        UI.SetValue("Misc", "General", "Movement", "Slide walk", true);
        UI.SetValue("Misc", "General", "Movement", "Accurate walk", true);
    }

}

// SLOW_WALK EXPLOIT

function SlowWalk_EXPLOIT(){

    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Slow walk Breaker(Not have dt)")){

        var tick = Globals.Tickcount();

        if (tick % 2 == 0){

            UI.SetValue("Anti-Aim", "Extra", "Slow walk mode", 2);

        }else{
            UI.SetValue("Anti-Aim", "Extra", "Slow walk mode", 1);
        }

    }else{
        UI.SetValue("Anti-Aim", "Extra", "Slow walk mode", 0);
    }



}

// IDEAL TICK

function ideal_tick() {
    if (UI.GetValue("Script items", "Ideal tick")) {
        if (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap") & UI.IsHotkeyActive("Misc", "Movement", "Auto peek") || UI.IsHotkeyActive("Script items", "Auto throw")){
            UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", 0);
        }else{
            UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", 1);
        }
    }
    else{
        UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", 1);
    }
        
}

//DT

function DT(){

    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Fastest DT")){

        Exploit.OverrideTolerance(1);
        Exploit.OverrideShift(20);

    }

}


// watermark

function indicator() {

	var screen_size = Global.GetScreenSize();
	
	if (!Entity.IsAlive(Entity.GetLocalPlayer()))
		return;


        Render.ShadowedString(x / 2, y / 2 + 40, 0, "F4STZSENSE", [218, 118, 0, 255], font)
    

}


// callbacks
Cheat.RegisterCallback("CreateMove", "JitterPitch");
Cheat.RegisterCallback("CreateMove", "ideal_tick");
Cheat.RegisterCallback("CreateMove", "betterYaw2");
Cheat.RegisterCallback("Draw", "betterYAW1");
Cheat.RegisterCallback("CreateMove", "DodgeBruteforce");
Cheat.RegisterCallback("CreateMove", "DT");
Cheat.RegisterCallback("CreateMove", "lagsync");
Cheat.RegisterCallback("CreateMove", "SlowWalk_EXPLOIT");
Cheat.RegisterCallback("CreateMove", "legBreaker");
Cheat.RegisterCallback("Draw", "indicator");
Cheat.RegisterCallback("weapon_fire", "Flip");
Global.RegisterCallback("ragebot_fire", "Flip");

