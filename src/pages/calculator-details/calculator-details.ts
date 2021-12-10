import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calculator-details',
  templateUrl: 'calculator-details.html',
})
export class CalculatorDetailsPage {

  public formula;
  public models = [];
  public result;
  public result_specific;
  public result_details;
  public result_show;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.formula = navParams.get("formula");
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 6000,
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present(toast);
  }

  calculate(f){
    this.result = 0;
    this.result_details = "";
    switch(f){
      case "imc":
        var bmi = this.models[0] / (this.models[1] * this.models[1]);
        this.result =bmi;
        this.result_show = "IMC = "+bmi+"; ";
      break;

      case "na_def":
        var tbw;
        if(this.models[1] == 0){
          tbw = 0.6 * this.models[4];
        }else if(this.models[1] == 1){
          if(this.models[0] == 0){
            tbw = 0.6 * this.models[4];
          }else{
            tbw = 0.5 * this.models[4];
          }
        }else{
          if(this.models[0] == 0){
            tbw = 0.5 * this.models[4];
          }else{
            tbw = 0.45 * this.models[4];
          }
        }
        var sodium_deficit = tbw * (this.models[3] - this.models[2]);
        this.result_details = "Déficit de sodio: "+sodium_deficit + "mEq; ";
      break;

      case "cal_correction":
        var first = this.models[2] - this.models[1];
        console.log("uno: "+first);
        var second = first * 0.8;
        console.log("dos: "+second);
        var corrected_calcium = second + parseInt(this.models[0]);
        console.log("tres: "+corrected_calcium);
        this.result_show = corrected_calcium + " mg/dL; ";
      break;

      //==============================CodePerfect==========================================
      case "creatinine_clearance":
        //Cockcroft-Gault CrCl, mL/min = (140 – age) × (weight, kg) × (0.85 if female) / (72 × Cr)
        var creatinine;
        if(this.models[0]==0){
          //Male
        creatinine = (140- this.models[1]) * (this.models[2]) / (72*this.models[3]);
        }else{
          //Female
          creatinine = (140- this.models[1]) * (this.models[2]) * (0.85) / ( 72 * this.models[3] );
        }
        this.result_show = creatinine + " mL/min ";
        this.result_details = "Creatinine clearance, original Cockcroft-Gault";
      break;

      case "creat_clear":        
        var UrineCreat = this.models[0];
        var SerumCreat = this.models[1];
        var DaysUrineVolume = this.models[2];
        var creat = UrineCreat*DaysUrineVolume/SerumCreat/1440;
        this.result_show = creat + " mL/min ";
        this.result_details = "Creatinine Clearance (measured)";
      break;
      
      case "mdrd": 
        //GFR = 186 × Serum Cr-1.154 × age-0.203 × 1.212 (if patient is black) × 0.742 (if female)       
        var sex = this.models[0];
        var blackRace = this.models[1];
        var age = this.models[2];
        var SerumCr = this.models[3];
        var GFR = 186 * Math.pow(SerumCr,-1.154) * Math.pow(age,-0.203);
        if(blackRace == 0){
          GFR = GFR * 1.212;
        }
        if(sex == 1){
          GFR = GFR * 0.742;
        }
        this.result_show = GFR + "mL/min/1.73 m²";
        this.result_details = " Glomerular Filtration Rate by the MDRD Equation.";
      break;  
      
      case "gfr":
        var height = this.models[0];
        var serum_creatinine  = this.models[1];
        var gfr = Math.round(0.413 * height / serum_creatinine);

        if(gfr>89){
          this.result_show = gfr + " mL/min/1.73 m2. ";
          this.result_details = "Stage 1 - Normal CKD";
        }else if(gfr>59 && gfr<90){
          this.result_show = gfr + " mL/min/1.73 m2. ";
          this.result_details = "Stage 2 - Mild CKD";
        }else if(gfr>44 && gfr<60){
          this.result_show = gfr + " mL/min/1.73 m2. ";
          this.result_details = "Stage 3A - Mild-Moderate CKD";
        }else if(gfr>29 && gfr<45){
          this.result_show = gfr + " mL/min/1.73 m2. ";
          this.result_details = "Stage 3B - Moderate-Severe CKD";
        }else if(gfr>14 && gfr<30){
          this.result_show = gfr + " mL/min/1.73 m2. ";
          this.result_details = "Stage 4 - Severe CKD";
        }else{
          this.result_show = gfr + " mL/min/1.73 m2. ";
          this.result_details = "Stage 5 - End-stage CKD";
        }
      break;

      case "FENa":
        var serum_sodium = this.models[0];
        var serum_creatinine  = this.models[1];
        var urine_sodium = this.models[2];
        var urine_creatinine  = this.models[3];
        var FENa = 100 * (serum_creatinine*urine_sodium) / (serum_sodium*urine_creatinine);
        this.result_show = FENa + "%";
        this.result_details = "Fractional Excretion of Sodium (FENa)";
      break;

      case "AnionGap":
        var Na = Number(this.models[0]);
        var Cl  = Number(this.models[1]);
        var hc = Number(this.models[2]);
        var AnionGap = Na - (Cl+hc);
        this.result_show = AnionGap + " mEq/L ";
        this.result_details = " Anion Gap";
      break;
      
      case "AnionGapDeltaGradient":
        var Na = Number(this.models[0]);
        var Cl  = Number(this.models[1]);
        var HCO3 = Number(this.models[2]);
        var BaselineGap = Number(this.models[3]);
        var AnionGap = Na - (Cl + HCO3);
        var DeltaGap = AnionGap - BaselineGap;
        var DeltaHCO3 = 25 - HCO3;
        var DeltaDeltaGradient = DeltaGap - DeltaHCO3;

        this.result_show = "Anion Gap: " + AnionGap + " mEq/L. \n" + "Delta Gap: " + DeltaGap + " mEq/L. \n" + "Delta HCO3: " +DeltaHCO3 + " mEq/L. \n" + "Delta Delta Gradient: " +DeltaDeltaGradient + " mEq/L. ";
        this.result_details = "";
      break;

      case "winters":
        var pCO2 = 1.5 * this.models[0] + 8;
        var pCO2_low = Math.round(pCO2 - 2);
        var pCO2_high = pCO2_low + 4;
        this.result_show = pCO2_low + "-" + pCO2_high + " mm Hg; ";
        this.result_details = "Compensación esperada de pCO2.";
      break;

      case "map":
        var map = ( (1/3) * this.models[0] ) + ( (2/3) * this.models[1] );
        this.result_show = map + " mm Hg; ";
        this.result_details = "Presión Arterial Media (MAP).";
      break;

      case "na_correction":
        var hillier_na_corr = Math.round(parseInt(this.models[0]) + 0.024 * (parseInt(this.models[1]) - 100));
        this.result_show = hillier_na_corr + " mg/dL; ";
        this.result_details = "Sodio corregido (Hillier, 1999).";
      break;

      case "parkland":
        var Weight = Number(this.models[0]);
        var Percent_Nonsuperficial_Burn_Area = Number(this.models[1]);
        var Crystalloid = 4 * Weight * Percent_Nonsuperficial_Burn_Area;
        this.result_show = "Total Crystalloid For First 24 Hours: " + Crystalloid + " mL" ;
        this.result_details = "";
      break;

      case "framingham_risk_score":
        var Age = Number(this.models[0]);
        var Sex = this.models[1];
        var Smoker = this.models[2];
        var total_cholestrol = this.models[3];
        var hdl_cholestrol = this.models[4];
        var systolic_bp = this.models[5];
        var blood_pressure_being_treated_with_medicines = this.models[6];

      break;

      case "gasto_cardiaco":
        var O2 = Number(this.models[0]);
        var Hgb = Number(this.models[1]);
        var O2Sat = Number(this.models[2]);
        var PaO2 = Number(this.models[3]);
        var O2vSat = Number(this.models[4]);
        var PvO2 = Number(this.models[5]);
        var CaO2 = ( Hgb * 13.4 * O2Sat / 100 ) + ( PaO2 * 0.031 )
        var CvO2 = ( Hgb * 13.4 * O2vSat / 100 ) + ( PvO2 * 0.031 )
        var CO = O2 / (CaO2 - CvO2)

        this.result_show = "CaO2: " + CaO2 + " mL/L. \n" + "CvO2: " + CvO2 + " mL/L. \n" + "CO: " + CO + " L/min. \n";
        this.result_details = "";

      break;

      case "BUN":
        var SUN = Number(this.models[0]);
        var Creatinine = Number(this.models[1]);
        var BUN = SUN/Creatinine; 
        this.result_show = "BUN: CrS = " + BUN ;
        if(BUN > 0.2){
            this.result_details = " indica causa prerenal.";
        }else if(BUN < 0.1){
            this.result_details = " indica causa renal.";
        }
      break;


      case "TBW":
        var Height = Number(this.models[0]);
        var Weight = Number(this.models[1]);
        var Sex = this.models[2];
        var Age = Number(this.models[3]);

        // 0 => Male, 1 => Female
        if(Sex==0){
          var TBW = 2.447 - 0.09156 * Age + 0.1074 * Height + 0.3362 * Weight ;
        }else{
          var TBW = -2.097 + 0.1069 * Height + 0.2466 * Weight ;
        }
        this.result_show = "Total Body Water (TBW) = " + TBW + " L";
      
      break;



      case "score":
        var i = 0, score = 0;
        for(var answer of this.formula.questions){
          score += answer.options[this.models[i]].score;
          i++;
        }
        this.result = score;
        this.result_show = "Puntaje: "+score+"; ";
      break;

      //Calculates score but doesnt show "Puntaje"
      case "scoreHide":
        var i = 0, score = 0;
        for(var answer of this.formula.questions){
          score += answer.options[this.models[i]].score;
          i++;
        }
        this.result = score;
      break;

      case "scoreRange":
        var i = 0, score = 0;
        for(var answer of this.formula.questions){
          if(answer.type == 'radio'){
          score += answer.options[this.models[i]].score;}
          else{
            score += 15;
            score -= this.models[i];
          }
          i++;
        }
        this.result = score;
        this.result_show = "Puntaje: "+score+"; ";
      break;
    }
    if(this.formula.results.type === "ranksWithInput"){
     if(this.result>34){
        this.result_details = "85% non-op. 88% post-op.";
     }else if(this.result>29){
      this.result_details = "Approx 73% both.";
     }else if(this.result>24){
      this.result_details = "55% non-op. 35% post-op.";
     }else if(this.result>19){
      this.result_details = "40% non-op. 30% post-op.";
     }else if(this.result>14){
      this.result_details = "24% non-op. 12% post-op.";
     }else if(this.result>9){
      this.result_details = "15% non-op. 7% post-op.";
     }else if(this.result>4){
      this.result_details = "8% non-op. 3% post-op.";
     }else{
      this.result_details = "4% non-op. 1% post-op.";
     }
    }

    if(this.formula.results.type === "ranksAsma"){
      if(this.result>99){
        //Strict Criteria
        if(this.result>109){
          //Positive
          this.result_show = "Positive. ";  
          this.result_details = "By strict criteria; >95% specific for later childhood asthma diagnosis.";
        }
        else{
          //Negative
          this.result_show = "Negative. ";  
          this.result_details = "By strict criteria; less likely to develop childhood asthma.";
        }
      }else{
        //Loose Criteria
        if(this.result>9){
          //Positive
          this.result_show = "Positive. ";  
          this.result_details = "By ‘loose’ criteria; 80% specific for later childhood asthma diagnosis.";
        }
        else{
          //Negative
          this.result_show = "Negative. ";  
          this.result_details = "By ‘loose’ criteria; less likely to develop childhood asthma.";
        }
      }
     }

     if(this.formula.results.type === "ranksAsmaPASS"){
      if(this.result>1){
         this.result_details = "PASS suggests severe asthma - consider admission to PICU.";
      }else{
       this.result_details = "PASS suggests asthma may be treatable as outpatient.";
      }
    }

    if(this.formula.results.type === "ranksRanson"){
        if(this.result<3){
          this.result_details = " severe pancreatitis unlikely, 1% predicted mortality.";
      }else if(this.result<5){
          this.result_details = " severe pancreatitis likely. Consider ICU admission, 15% predicted mortality.";
      }else if(this.result<7){
          this.result_details = " severe pancreatitis likely. Consider ICU admission, 40% predicted mortality.";
      }else{
          this.result_details = " severe pancreatitis likely. Consider ICU admission, 100% predicted mortality.";
        }
    }



    if(this.formula.results.type === "ranksFraminghamHeart"){
      if(this.result>101){
         this.result_details = "Diagnosis of Heart Failure: POSITIVE";
      }else{
       this.result_details = "Diagnosis of Heart Failure: NEGATIVE";
      }
    }



    if(this.formula.results.type === "ranksBraden"){
      if(this.result<13){
         this.result_details = "High Risk.";
      }else if(this.result<16){
       this.result_details = "Moderate Risk.";
      }else if(this.result<18){
       this.result_details = "Mild Risk.";
      }else{
       this.result_details = "Average Risk.";
      }
    }

     if(this.formula.results.type === "ranksBalthazar"){
      if(this.result<4){
         this.result_details = "Mild AP.";
      }else if(this.result<7){
       this.result_details = "Moderate AP.";
      }else{
       this.result_details = "Severe AP.";
      }
     }

     if(this.formula.results.type === "ranksCIWA"){
      if(this.result<9){
         this.result_details = "Patients with scores ≤8 typically do not require medication for withdrawal.";
      }else if(this.result<20){
       this.result_details = "Patients with scores ≥9 may require medication for withdrawal.";
      }
      else{
       this.result_details = "Patients with scores ≥20 frequently require medication for withdrawal, and may also require admission to the ICU for observation for seizures or development of delirium tremens, and more frequent medication dosing.";
      }
    }

    if(this.formula.results.type === "ranksDVT"){
      if(this.result<1){
         this.result_details = "Low Probability of DVT";
      }else if(this.result<3){
       this.result_details = "Moderate Probability of DVT";
      }else{
       this.result_details = "High Probability of DVT";
      }
     }

    if(this.formula.results.type === "ranks"){
      for(var data of this.formula.results.levels){
        if(this.result < data.score){
          this.result_details = data.description;
          break;
        }else if(data.score === "default"){
          this.result_details = data.description;
          break;
        }
      }
    }

    if (this.result_show){
      this.result_specific = this.result_show + this.result_details;
    } else{
      this.result_specific = this.result_details;
    }
    this.showToast(this.result_specific);
  }

}
