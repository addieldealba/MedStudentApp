import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CalculatorDetailsPage } from '../calculator-details/calculator-details';

@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html'
})
export class CalculatorPage {

  public formulas;
  constructor(public navCtrl: NavController) {
    this.formulas = [
      {
        "title": "4 A's para prevención de delirio",
        "when": "Pacientes admitidos en salas geriátricas para detectar delirio.",
        "type": "score",
        "questions":[
          {
            "name": "Alerta",
            "short_name": "alert",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "Normal",
                "score": 0
              },
              {
                "name": "Somnolencia leve durante <10 segundos después de despertarse, luego normal",
                "score": 0
              },
              {
                "name": "Claramente anormal",
                "score": 4
              }
            ]
          },
          {
            "name": "AMT 4",
            "short_name": "amt_4",
            "type": "radio",
            "description":"Edad, fecha de nacimiento, lugar (nombre del hospital o edificio), año actual",
            "options":[
              {
                "name": "Ningún error",
                "score": 0
              },
              {
                "name": "1 Error",
                "score": 1
              },
              {
                "name": "≥2 Errores o inestable",
                "score": 2
              }
            ]
          },
          {
            "type": "radio",
            "name": "Atención",
            "short_name": "attention",
            "description": "Indique al paciente que enumere los meses en orden inverso, a partir de diciembre",
            "options":[
              {
                "name": "Lista ≥7 meses correctamente",
                "score": 0
              },
              {
                "name": "Inicia pero enumera <7 meses o se niega a comenzar",
                "score": 1
              },
              {
                "name": "Inestable (no puede comenzar porque está indispuesto o enfermo, somnoliento, falta de atención)",
                "score": 2
              }
            ]
          },
          {
            "type": "radio",
            "name": "Cambio agudo o curso fluctuante",
            "short_name": "cacf",
            "description": "Evidencia de un cambio significativo o fluctuación en el estado mental en las últimas 2 semanas y aún persiste en las últimas 24 horas",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 4
              }
            ]
          },
        ],
        "results":{
          "type": "ranks",
          "method": "score",
          "levels":[
            {
              "score": 1  ,
              "description": "Es poco probable que se presente delirio o deterioro cognitivo grave (pero aún es posible el delirio si la información de 'cambio agudo o curso fluctuante' es incompleta)"
            },
            {
              "score": 4,
              "description": "Posible deterioro cognitivo"
            },
            {
              "score": "default",
              "description": "Posible delirio y / o deterioro cognitivo"
            }
          ]
        }
      },
      {
        "title": "4 T's para la trombocitopenia inducida por heparina",
        "type": "score",
        "when": "Considere usar el sistema de puntuación 4Ts para estratificar el riesgo de TIH en pacientes con trombocitopenia que actualmente o recientemente recibieron agentes derivados de heparina.",
        "questions":[
          {
            "type": "radio",
            "name": "Trombocitopenia",
            "short_name": "tromb",
            "description":"",
            "options":[
              {
                "name": "Recuento de plaquetas caída >50% Y *plaquetas de nadir ≥20k",
                "score": 2
              },
              {
                "name": "El recuento de plaquetas cae 30-50% O *plaquetas de nadir* 10-19k",
                "score": 1
              },
              {
                "name": "Caída de plaquetas <30% O *plaquetas de nadir* <10k",
                "score": 0
              }
            ]
          },
          {
            "type": "radio",
            "name": "Momento del recuento de plaquetas",
            "short_name": "moment_rec",
            "description": "",
            "options":[
              {
                "name": "Inicio claro entre los días 5 a 10 O caída de plaquetas ≤1 día (exposición previa a heparina en 30 días)",
                "score": 2
              },
              {
                "name": "De acuerdo con los días 5-10 caen, pero no están claros; inicio después del día 10 O caída ≤1 día (exposición previa a heparina hace 30-100 días)",
                "score": 1
              },
              {
                "name": "El conteo de plaquetas cae <4 días sin exposición reciente",
                "score": 0
              }
            ]
          },
          {
            "type": "radio",
            "name": "Trombosis u otras secuelas",
            "short_name": "trom_sql",
            "description": "",
            "options":[
              {
                "name": "Nueva trombosis O necrosis de la piel; *reacción sistémica aguda después del IV bolo de heparina*",
                "score": 2
              },
              {
                "name": "Trombosis progresiva O recurrente; lesiones cutáneas no necrotizantes; sospecha de trombosis (no demostrado)",
                "score": 1
              },
              {
                "name": "Ninguno",
                "score": 0
              }
            ]
          },
          {
            "type": "radio",
            "name": "Otras causas de trombocitopenia",
            "short_name": "other_causes",
            "description": "",
            "options":[
              {
                "name": "Ninguna aparente",
                "score": 2
              },
              {
                "name": "Posible",
                "score": 1
              },
              {
                "name": "Positivo",
                "score": 0
              }
            ]
          }
        ],
        "results":{
          "type": "ranks",
          "method": "score",
          "levels":[
            {
              "score": 4,
              "description": "Baja probabilidad de TIH (≤5% en el estudio original, <1% en el metanálisis)"
            },
            {
              "score": 6,
              "description": "Probabilidad intermedia (~ 14% de probabilidad de TIH)"
            },
            {
              "score": "default",
              "description": "Alta probabilidad (~ 64% de probabilidad de TIH)"
            }
          ]
        }
      },
      {
        "title": "Déficit de sodio en hiponatremia",
        "when": "Calcula la cantidad total de sodio que debe reemplazarse en pacientes con hiponatremia.",
        "type": "ecuation",
        "questions":[
          {
            "name": "Sexo",
            "short_name": "sex",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "Hombre",
                "score": 0
              },
              {
                "name": "Mujer",
                "score": 1
              }
            ]
          },
          {
            "name": "Rangos de edades",
            "short_name": "range_age",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "Niño",
                "score": 0
              },
              {
                "name": "Adulto",
                "score": 1
              },
              {
                "name": "Adulto Mayor",
                "score": 2
              }
            ]
          },
          {
            "type": "input",
            "input": {
              "type": "number",
              "placeholder": "mEq/L",
              "validation": {
                "minLenght": 136,
                "maxLenght": 145
              }
            },
            "name": "Sodio",
            "short_name": "na",
            "description": ""
          },
          {
            "type": "input",
            "input": {
              "type": "number",
              "placeholder": "mEq/L",
              "validation": {
                "minLenght": 100,
                "maxLenght": 170
              }
            },
            "name": "Sodio deseado",
            "short_name": "na_de",
            "description": ""
          },
          {
            "type": "input",
            "input": {
              "type": "number",
              "placeholder": "kg",
              "validation": {
                "minLenght": 45,
                "maxLenght": 113
              }
            },
            "name": "Peso",
            "short_name": "weight",
            "description": ""
          }
        ],
        "results":{
          "type": "result",
          "method": "na_def"
        }
      },
      {
        "title": "Índice de masa corporal (IMC)",
        "type": "ecuation",
        "when": "Algunos medicamentos se calculan utilizando el área de superficie corporal en lugar de peso corporal.",
        "questions":[
          {
            "type": "input",
            "input": {
              "type": "number",
              "placeholder": "kg",
              "validation": {
                "minLenght": 45,
                "maxLenght": 113
              }
            },
            "name": "Peso",
            "short_name": "weight",
            "description": ""
          },
          {
            "type": "input",
            "input": {
              "type": "number",
              "placeholder": "m",
              "validation": {
                "minLenght": 1.52,
                "maxLenght": 2.13
              }
            },
            "name": "Altura",
            "short_name": "height",
            "description": ""
          }
        ],
        "results":{
          "type": "ranks",
          "method": "imc",
          "levels":[
            {
              "score": 18.5,
              "description": "Debajo del peso normal"
            },
            {
              "score": 25,
              "description": "Peso normal"
            },
            {
              "score": 30,
              "description": "Sobrepeso"
            },
            {
              "score": 35,
              "description": "Obesidad de clase I"
            },
            {
              "score": 40,
              "description": "Obesidad de clase II"
            },
            {
              "score": "default",
              "description": "Obesidad de clase III"
            },
          ]
        }
      },
      {
        "title": "Puntuación BISHOP para el parto vaginal y la inducción del parto",
        "when": "Es difícil predecir qué mujeres realizarán la inducción con éxito, y Bishop Score es un sistema estandarizado utilizado para la evaluación.",
        "type": "score",
        "questions":[
          {
            "name": "Dilatación",
            "short_name": "dilation",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "Cerrado",
                "score": 0
              },
              {
                "name": "1-2 cm",
                "score": 1
              },
              {
                "name": "3-4 cm",
                "score": 2
              },
              {
                "name": "≥5 cm",
                "score": 3
              }
            ]
          },
          {
            "name": "Borramiento",
            "short_name": "effac",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "0-30%",
                "score": 0
              },
              {
                "name": "40-50%",
                "score": 1
              },
              {
                "name": "60-70%",
                "score": 2
              },
              {
                "name": "≥80%",
                "score": 3
              }
            ]
          },
          {
            "name": "Estación",
            "short_name": "station",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "-3",
                "score": 0
              },
              {
                "name": "-2",
                "score": 1
              },
              {
                "name": "-1, 0",
                "score": 2
              },
              {
                "name": "+1, +2",
                "score": 3
              }
            ]
          },
          {
            "name": "Posición",
            "short_name": "position",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "Posterior",
                "score": 0
              },
              {
                "name": "Posición media",
                "score": 1
              },
              {
                "name": "Anterior",
                "score": 2
              }
            ]
          },
          {
            "name": "Consistencia",
            "short_name": "consistency",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "Firme",
                "score": 0
              },
              {
                "name": "Moderadamente firme",
                "score": 1
              },
              {
                "name": "Suave",
                "score": 2
              }
            ]
          }
        ],
        "results":{
          "type": "ranks",
          "method": "score",
          "levels":[
            {
              "score": 6,
              "description": "Inducción desfavorable, tasa de fracaso del 19.5%"
            },
            {
              "score": 8,
              "description": "Induccion con una tasa de fracaso del 4.8%"
            },
            {
              "score": "default",
              "description": "Inducción exitosa, la tasa de fracasos es del 0%"
            }
          ]
        }
      },
      {
        "title": "Puntuación de CURB-65 para la gravedad de la neumonía",
        "when": "El CURB-65 es un índice del grado de severidad para las Neumonías adquiridas en la Comunidad, y va asociado a la necesidad de tratamiento.",
        "type": "score",
        "questions":[
          {
            "name": "Confusión",
            "short_name": "confusion",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "BUN > 19 mg/dL (> 7 mmol/L)",
            "short_name": "bun",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "Frecuencia respiratoria ≥ 30",
            "short_name": "resrate",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "Systolic BP < 90 mmHg or Diastolic BP ≤ 60 mmHg",
            "short_name": "bp",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "Edad ≥ 65",
            "short_name": "age",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
        ],
        "results":{
          "type": "ranks",
          "method": "score",
          "levels":[
            {
              "score": 0.1,
              "description": "Riesgo Bajo (2.7% de mortalidad a los 30 días) tratamiento ambulatorio."
            },
            {
              "score": 1.1,
              "description": "Riesgo Moderado (6.8% mortalidad a los 30 días) Ingreso o seguimiento cercano."
            },
            {
              "score": 2.1,
              "description": "Riesgo Severo (14.0% mortalidad a los 30 días) considerar el ingreso en UCI."
            },
            {
              "score": 3.1,
              "description": "Riesgo Alto (27.8% mortalidad a los 30 días) ingreso inmediato en UCI."
            },
            {
              "score": "default",
              "description": "Riesgo Alto (27.8% mortalidad a los 30 días) ingreso inmediato en UCI."
            }
          ]
        }
      },
      {
        "title": "Puntaje de Apgar",
        "when": "Predictora de mortalidad neonatal, se realiza a 1 y 5 minutos de vida extrauterina.",
        "type": "score",
        "questions":[
          {
            "name": "Actividad / tono muscular",
            "short_name": "activity",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "Flexión generalizada, movimientos activos",
                "score": 2
              },
              {
                "name": "Ligera flexión de las extremidades",
                "score": 1
              },
              {
                "name": "Flacidez",
                "score": 0
              }
            ]
          },
          {
            "name": "Pulso",
            "short_name": "pulse",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "≥100 lpm",
                "score": 2
              },
              {
                "name": "<100 latidos por minuto (lpm)",
                "score": 1
              },
              {
                "name": "Ausente",
                "score": 0
              }
            ]
          },
          {
            "name": "Habilidad refleja",
            "short_name": "grimace",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "Estornudo / tos",
                "score": 2
              },
              {
                "name": "Gesticulación",
                "score": 1
              },
              {
                "name": "Ausente",
                "score": 0
              }
            ]
          },
          {
            "name": "Coloración",
            "short_name": "aspect",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "Todo rosado",
                "score": 2
              },
              {
                "name": "Acrocianosis, Extremidades azules, cuerpo rosado",
                "score": 1
              },
              {
                "name": "Cianosis o palidez",
                "score": 0
              }
            ]
          },
          {
            "name": "Esfuerzo respiratorio",
            "short_name": "respirations",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "Llanto regular / llorando",
                "score": 2
              },
              {
                "name": "Irregular / lento",
                "score": 1
              },
              {
                "name": "Ausente",
                "score": 0
              }
            ]
          }
        ],
        "results":{
          "type": "ranks",
          "method": "score",
          "levels":[
            {
              "score": 3.1,
              "description": "Requiere resucitación(Depresión severa)."
            },
            {
              "score": 6.1,
              "description": "Asfixia o acidosis fetal (depresión moderada)."
            },
            {
              "score": "default",
              "description": "Normal."
            }
          ]
        }
      },
      {
        "title": "Escala de Glasgow Coma",
        "when": "Diseñado para su uso en evaluaciones seriadas de pacientes con coma por causas médicas o quirúrgicas para ser ampliamente aplicable.",
        "type": "score",
        "questions":[
          {
            "name": "Mejor respuesta ocular",
            "short_name": "eye_response",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "Espontáneamente",
                "score": 4
              },
              {
                "name": "Al comando verbal",
                "score": 3
              },
              {
                "name": "Hacia el dolor",
                "score": 2
              },
              {
                "name": "Sin abrir ojos",
                "score": 1
              },
              {
                "name": "No evaluable (trauma, edema, etc.)",
                "score": 1
              }
            ]
          },
          {
            "name": "Mejor respuesta verbal",
            "short_name": "verbal_response",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "Orientado",
                "score": 5
              },
              {
                "name": "Confundido",
                "score": 4
              },
              {
                "name": "Palabras inapropiadas",
                "score": 3
              },
              {
                "name": "Sonidos incomprensibles",
                "score": 2
              },
              {
                "name": "Sin respuesta verbal",
                "score": 1
              },
              {
                "name": "Intubado",
                "score": 1
              }
            ]
          },
          {
            "name": "Mejor respuesta motriz",
            "short_name": "motor_response",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "Obedece órdenes",
                "score": 6
              },
              {
                "name": "Localiza el dolor",
                "score": 5
              },
              {
                "name": "Retiro al dolor",
                "score": 4
              },
              {
                "name": "Flexión al dolor",
                "score": 3
              },
              {
                "name": "Extensión al dolor",
                "score": 2
              },
              {
                "name": "Sin respuesta motora",
                "score": 1
              }
            ]
          }
        ],
        "results":{
          "type": "ranks",
          "method": "score",
          "levels":[
            {
              "score": 14.1,
              "description": "Anormal."
            },
            {
              "score": "default",
              "description": "Normal."
            }
          ]
        }
      },
      {
        "title": "Preguntas de CAGE para el uso de alcohol",
        "when": "CAGE debe incluirse entre las preguntas de historia estándar en la atención primaria, el departamento de emergencias, los entornos psiquiátricos y de hospitalización.",
        "type": "score",
        "questions":[
          {
            "name": "¿Alguna vez sintió que necesitaba reducir su consumo de alcohol?",
            "short_name": "cut_down",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "¿Alguna vez alguien te ha molestado al criticar tu consumo de alcohol?",
            "short_name": "criticizing",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "¿Alguna vez te has sentido culpable por beber?",
            "short_name": "guilty",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "¿Alguna vez sintió que necesitaba una bebida a primera hora de la mañana (al abrir los ojos) para estabilizar los nervios o para deshacerse de una resaca?",
            "short_name": "eye_opener",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          }
        ],
        "results":{
          "type": "ranks",
          "method": "score",
          "levels":[
            {
              "score": 1.1,
              "description": "Screening negative / Bebedor social"
            },
            {
              "score": "default",
              "description": "Las puntuaciones de 2 o más tienen un 93% de sensibilidad / 76% de especificidad para la identificación de 'consumo excesivo de alcohol' y un 91% de sensibilidad / 77% de especificidad para la identificación del alcoholismo."
            }
          ]
        }
      },
      {
        "title": "Puntuación de Alvarado para la apendicitis aguda",
        "when": "Cualquier paciente con sospecha de apendicitis (por lo general con dolor abdominal en el cuadrante inferior derecho).",
        "type": "score",
        "questions":[
          {
            "name": "Sensibilidad del cuadrante inferior derecho",
            "short_name": "quad_sens",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Yes",
                "score": 2
              }
            ]
          },
          {
            "name": "Temperatura elevada (37.3 ° C o 99.1 ° F)",
            "short_name": "elev_temp",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Yes",
                "score": 1
              }
            ]
          },
          {
            "name": "Rebote",
            "short_name": "rebote",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Yes",
                "score": 1
              }
            ]
          },
          {
            "name": "Migración del dolor al cuadrante inferior derecho",
            "short_name": "migration_pain",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Yes",
                "score": 1
              }
            ]
          },
          {
            "name": "Anorexia",
            "short_name": "anorexia",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Yes",
                "score": 1
              }
            ]
          },
          {
            "name": "Náuseas o vómitos",
            "short_name": "nausea_vomiting",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Yes",
                "score": 1
              }
            ]
          },
          {
            "name": "Leucocitosis> 10,000",
            "short_name": "leukocytosis",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Yes",
                "score": 2
              }
            ]
          },
          {
            "name": "Cambio de leucocitos a la izquierda",
            "short_name": "leukocytosis_shift",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Yes",
                "score": 1
              }
            ]
          }
        ],
        "results":{
          "type": "ranks",
          "method": "score",
          "levels":[
            {
              "score": 5,
              "description": "Apendicitis poco probable por el puntaje de Alvarado."
            },
            {
              "score": 7,
              "description": "Posible apendicitis por el puntaje Alvarado."
            },
            {
              "score": 9,
              "description": "Muy probable riesgo de apendicitis según el puntaje de Alvarado."
            },
            {
              "score": "default",
              "description": "Apendicitis definitiva por el puntaje de Alvarado."
            }
          ]
        }
      },
      {
        "title": "Corrección del calcio para la hipoalbuminemia",
        "when": "",
        "type": "ecuation",
        "questions":[
          {
            "type": "input",
            "input": {
              "type": "number",
              "placeholder": "mg/dL",
              "validation": {
                "minLenght": 9,
                "maxLenght": 10.5
              }
            },
            "name": "Calcio",
            "short_name": "ca",
            "description": ""
          },
          {
            "type": "input",
            "input": {
              "type": "number",
              "placeholder": "g/dL",
              "validation": {
                "minLenght": 3.5,
                "maxLenght": 5.5
              }
            },
            "name": "Albúmina",
            "short_name": "albumin",
            "description": ""
          },
          {
            "type": "input",
            "input": {
              "type": "number",
              "placeholder": "g/dL",
              "validation": {
                "minLenght": 3.5,
                "maxLenght": 5.5
              }
            },
            "name": "Albúmina normal",
            "short_name": "normal_albumin",
            "description": ""
          }
        ],
        "results":{
          "type": "result",
          "method": "cal_correction"
        }
      },
      {
        "title": "Fórmula de Winters para la compensación de la acidosis metabólica",
        "type": "ecuation",
        "when": "En un estado compensado, un paciente con acidosis metabólica debería ser capaz de compensar desarrollando una alcalosis respiratoria. La fórmula de Winters predice este nivel de compensación 'apropiada'.",
        "questions":[
          {
            "type": "input",
            "input": {
              "type": "number",
              "placeholder": "mEq/L",
              "validation": {
                "minLenght": 23,
                "maxLenght": 28
              }
            },
            "name": "Bicarbonato",
            "short_name": "bicarbonate",
            "description": ""
          }
        ],
        "results":{
          "type": "result",
          "method": "winters"
        }
      },
      {
        "title": "Calculadora de riesgo de la American Diabetes Association (ADA)",
        "when": "",
        "type": "score",
        "questions":[
          {
            "name": "Edad",
            "short_name": "age",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "<40",
                "score": 0
              },
              {
                "name": "40-49",
                "score": 1
              },
              {
                "name": "50-59",
                "score": 2
              },
              {
                "name": "≥60",
                "score": 3
              }
            ]
          },
          {
            "name": "Género",
            "short_name": "gender",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "Femenino",
                "score": 0
              },
              {
                "name": "Masculino",
                "score": 1
              }
            ]
          },
          {
            "name": "Pariente con diabetes de primer grado",
            "short_name": "relative",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "Hipertensión",
            "short_name": "hypertension",
            "type": "radio",
            "description":"Historial de hipertensión, medicación antihipertensiva prescrita y / o presión arterial ≥140 / 90.",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "Físicamente activo",
            "short_name": "physically_active",
            "type": "radio",
            "description":"Reporte del paciente",
            "options":[
              {
                "name": "No",
                "score": 1
              },
              {
                "name": "Sí",
                "score": 0
              }
            ]
          },
          {
            "name": "IMC, kg / m²",
            "short_name": "bmi",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "<25",
                "score": 0
              },
              {
                "name": "25 a <30",
                "score": 1
              },
              {
                "name": "30 a <40",
                "score": 2
              },
              {
                "name": "≥40",
                "score": 3
              }
            ]
          }
        ],
        "results":{
          "type": "ranks",
          "method": "score",
          "levels":[
            {
              "score": 5,
              "description": "Bajo riesgo."
            },
            {
              "score": "default",
              "description": "Alto riesgo. Los puntajes ≥5 deben ser examinados formalmente para detectar diabetes según las pautas de la ADA."
            }
          ]
        }
      },
      {
        "title": "Presión Arterial Media (MAP)",
        "type": "ecuation",
        "when": "El MAP debe calcularse cuando el escenario clínico exige un ajuste de la presión arterial basado en MAP en lugar de PAS, así como para el tratamiento de pacientes con afecciones agudas en los que existe una preocupación por la perfusión apropiada de órganos.",
        "questions":[
          {
            "type": "input",
            "input": {
              "type": "number",
              "placeholder": "mm Hg",
              "validation": {
                "minLenght": 100,
                "maxLenght": 120
              }
            },
            "name": "BP sistólica",
            "short_name": "bp_sys",
            "description": ""
          },
          {
            "type": "input",
            "input": {
              "type": "number",
              "placeholder": "mm Hg",
              "validation": {
                "minLenght": 60,
                "maxLenght": 80
              }
            },
            "name": "BP diastólica",
            "short_name": "bp_dias",
            "description": ""
          }
        ],
        "results":{
          "type": "result",
          "method": "map"
        }
      },
      {
        "title": "Corrección de sodio para la hiperglucemia",
        "type": "ecuation",
        "when": "",
        "questions":[
          {
            "type": "input",
            "input": {
              "type": "number",
              "placeholder": "mmol/L",
              "validation": {
                "minLenght": 136,
                "maxLenght": 145
              }
            },
            "name": "Sodio",
            "short_name": "sodium",
            "description": ""
          },
          {
            "type": "input",
            "input": {
              "type": "number",
              "placeholder": "mg/dL",
              "validation": {
                "minLenght": 70,
                "maxLenght": 105
              }
            },
            "name": "Glucosa",
            "short_name": "glucose",
            "description": ""
          }
        ],
        "results":{
          "type": "result",
          "method": "na_correction"
        }
      },
      {
        "title": "Puntaje rápido de SOFA para sepsis (qSOFA - Quick SOFA)",
        "when": "Identifica a los pacientes fuera de la UCI con sospecha de infección que tienen un alto riesgo de mortalidad intrahospitalaria.",
        "type": "score",
        "questions":[
          {
            "name": "Estado mental alterado",
            "short_name": "ams",
            "type": "radio",
            "description":"Glasgow Coma Scale/Score < 15",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "Frecuencia respiratoria ≥ 22",
            "short_name": "freq",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "PA sistólica ≤ 100",
            "short_name": "sys_pa",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          }
        ],
        "results":{
          "type": "ranks",
          "method": "score",
          "levels":[
            {
              "score": 2,
              "description": "No hay alto riesgo de mortalidad intrahospitalaria."
            },
            {
              "score": "default",
              "description": "Alto riesgo de mortalidad intrahospitalaria (aumento de 3 a 14 veces)."
            }
          ]
        }
      },
      {
        "title": "Puntuación HAS-BLED para el riesgo de hemorragia mayor",
        "when": "La puntuación HAS-BLED puede guiar la decisión de iniciar la anticoagulación en pacientes con fibrilación auricular.",
        "type": "score",
        "questions":[
          {
            "name": "Hipertensión",
            "short_name": "hype",
            "type": "radio",
            "description":"Sin control,> 160 mmHg sistólica",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "Enfermedad renal",
            "short_name": "renal",
            "type": "radio",
            "description":"Diálisis, trasplante, Cr > 2.26 mg/dL o > 200 μmol/L",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "Enfermedad del higado",
            "short_name": "liver",
            "type": "radio",
            "description":"Cirrosis o bilirrubina > 2x normal con AST / ALT / AP > 3x normal",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "Historial de apoplejía",
            "short_name": "stroke",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "Hemorragia mayor previa o predisposición a hemorragia",
            "short_name": "bleeding",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "INR lábil",
            "short_name": "labile",
            "type": "radio",
            "description":"INR inestables / altos, tiempo en rango terapéutico < 60%",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "Edad > 65",
            "short_name": "age",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "Uso de medicamentos que predisponen a la hemorragia",
            "short_name": "medication",
            "type": "radio",
            "description":"Agentes antiplaquetarios, AINE",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "Consumo de alcohol",
            "short_name": "alcohol",
            "type": "radio",
            "description":"≥8 bebidas / semana",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          }
        ],
        "results":{
          "type": "ranks",
          "method": "score",
          "levels":[
            {
              "score": 2,
              "description": "Se debe considerar la anticoagulación: el paciente tiene un riesgo relativamente bajo de hemorragia mayor (~ 1/100 pacientes-años)."
            },
            {
              "score": 3,
              "description": "Se puede considerar la anticoagulación, sin embargo, el paciente tiene un riesgo moderado de hemorragia mayor (~ 2/100 pacientes-años)."
            },
            {
              "score": "default",
              "description": "Se deben considerar alternativas a la anticoagulación: el paciente tiene un alto riesgo de hemorragia mayor."
            }
          ]
        }
      },
      {
        "title": "Puntuación de CHADS(2) para el riesgo de accidente cerebrovascular por fibrilación atrial",
        "when": "La estratificación del riesgo proporcionada por el puntaje CHADS2 puede ayudar a los médicos a tomar decisiones más informadas y personalizadas sobre si los riesgos y los beneficios de iniciar la terapia antitrombótica.",
        "type": "score",
        "questions":[
          {
            "name": "Historial de insuficiencia cardíaca congestiva",
            "short_name": "history",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "Historial de hipertensión",
            "short_name": "hipertension",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "Edad ≥ 75 años",
            "short_name": "age",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "Historial de diabetes mellitus",
            "short_name": "diabetes",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 1
              }
            ]
          },
          {
            "name": "Síntomas de apoplejía o 'TIA' previamente",
            "short_name": "tia",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "No",
                "score": 0
              },
              {
                "name": "Sí",
                "score": 2
              }
            ]
          }
        ],
        "results":{
          "type": "ranks",
          "method": "score",
          "levels":[
            {
              "score": 1,
              "description": "Bajo riesgo de evento tromboembólico. 1.9% de riesgo de evento por año si no se usa warfarina."
            },
            {
              "score": 2,
              "description": "Riesgo intermedio de evento tromboembólico. 2.8% de riesgo de evento por año si no se usa warfarina."
            },
            {
              "score": 3,
              "description": "Riesgo intermedio de evento tromboembólico. 4.0%% de riesgo de evento por año si no se usa warfarina."
            },
            {
              "score": 4,
              "description": "Alto riesgo de evento tromboembólico. 5.9% de riesgo de evento por año si no se usa warfarina."
            },
            {
              "score": 5,
              "description": "Alto riesgo de evento tromboembólico. 8.5% de riesgo de evento por año si no se usa warfarina."
            },
            {
              "score": "default",
              "description": "Alto riesgo de evento tromboembólico. 18.2%% de riesgo de evento por año si no se usa warfarina."
            }
          ]
        }
      },
      {
        "title": "Puntuación HEART para eventos cardiacos mayores",
        "when": "Uso en pacientes ≥21 años que presentan síntomas sugestivos de SCA. No utilizar si la elevación del segmento ST ≥1 mm u otros cambios nuevos de ECG, hipotensión, esperanza de vida menor a 1 año o enfermedad médica / quirúrgica / psiquiátrica no cardíaca determinada por el proveedor para requerir ingreso.",
        "type": "score",
        "questions":[
          {
            "name": "Historial",
            "short_name": "history",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "Ligeramente sospechoso",
                "score": 0
              },
              {
                "name": "Moderadamente sospechoso",
                "score": 1
              },
              {
                "name": "Muy sospechoso",
                "score": 2
              }
            ]
          },
          {
            "name": "EKG",
            "short_name": "ekg",
            "type": "radio",
            "description":"1 punto: sin depresión del ST pero cambios en la repolarización de LBBB, LVH (por ejemplo: digoxina); 2 puntos: depresión / elevación del ST no debida a LBBB, LVH o digoxina",
            "options":[
              {
                "name": "Normal",
                "score": 0
              },
              {
                "name": "Distorsión de la repolarización no específica",
                "score": 1
              },
              {
                "name": "Depresión significativa del ST",
                "score": 2
              }
            ]
          },
          {
            "name": "Edad",
            "short_name": "age",
            "type": "radio",
            "description":"",
            "options":[
              {
                "name": "<45",
                "score": 0
              },
              {
                "name": "45-64",
                "score": 1
              },
              {
                "name": "≥65",
                "score": 2
              }
            ]
          },
          {
            "name": "Factores de riesgo",
            "short_name": "risk",
            "type": "radio",
            "description":"Factores de riesgo: HTA, hipercolesterolemia, DM, obesidad (IMC> 30 kg / m²), tabaquismo (actual o dejar de fumar ≤3 meses), antecedentes familiares positivos (padres o hermanos con ECV antes de los 65 años); enfermedad aterosclerótica: IM previo, PCI / CABG, CVA / TIA o enfermedad arterial periférica",
            "options":[
              {
                "name": "Sin factores de riesgo conocidos",
                "score": 0
              },
              {
                "name": "1-2 factores de riesgo",
                "score": 1
              },
              {
                "name": "≥3 factores de riesgo o antecedentes de enfermedad aterosclerótica",
                "score": 2
              }
            ]
          },
          {
            "name": "Troponina inicial",
            "short_name": "troponin",
            "type": "radio",
            "description":"Utilice ensayos locales y los cortes correspondientes",
            "options":[
              {
                "name": "≤ límite normal",
                "score": 0
              },
              {
                "name": "1-2 × límite normal",
                "score": 1
              },
              {
                "name": "> 2 × límite normal",
                "score": 2
              }
            ]
          }
        ],
        "results":{
          "type": "ranks",
          "method": "score",
          "levels":[
            {
              "score": 4,
              "description": "0.9 - 1.7% de riesgo de evento cardíaco adverso."
            },
            {
              "score": 7,
              "description": "12 - 16.6% de riesgo de evento cardíaco adverso."
            },
            {
              "score": "default",
              "description": "50 - 65% de riesgo de evento cardíaco adverso."
            }
          ]
        }
      } ,
//==================================== <CodePerfect> ==========================================
{
  "title": "Aclaramiento de creatinina Cockroft-Gault",
  "when": "Assessing a patient's renal function.Prescribing a drug that is renally metabolized.",
  "type": "score",
  "questions":[
    {
      "name": "Sexo",
      "short_name": "sex",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "Hombre",
          "score": 0
        },
        {
          "name": "Mujer",
          "score": 1
        }
      ]
    },
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "Years",
        "validation": {
          "minLenght": 0,
          "maxLenght": 100
        }
      },
      "name": "Age",
      "short_name": "age",
      "description": ""
    },
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "Kg",
        "validation": {
          "minLenght": 0,
          "maxLenght": 200
        }
      },
      "name": "Weight",
      "short_name": "Weight",
      "description": ""
    },
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "0.7-1.3 (mg/dL)",
        "validation": {
          "minLenght": 0.7,
          "maxLenght": 1.3
        }
      },
      "name": "Creatinine",
      "short_name": "",
      "description": ""
    }
  ],
  "results":{
    "type": "result",
    "method": "creatinine_clearance"
  }
},
{
  "title": "Aclaramiento de creatinina",
  "when": "",
  "type": "score",
  "questions":[
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "mg/dL"
      },
      "name": "Urine Creat",
      "short_name": "",
      "description": ""
    },
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "mg/dL"
      },
      "name": "Serum Creat",
      "short_name": "",
      "description": ""
    },
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "mL"
      },
      "name": "Days Urine Volume",
      "short_name": "",
      "description": ""
    }
  ],
  "results":{
    "type": "result",
    "method": "creat_clear"
  }
},
{
  "title": "Estimación de la filtración glomerular MDRD",
  "when": "Only for chronic kidney disease (CKD); not accurate for acute renal failure. Also, note that a later study indicates the MDRD may underestimate the actual GFR in healthy patients by up to 29%. This calculator uses the 4-variable equation from Levey 2006, as it has been recalibrated for differences in the lab testing of creatinine.",
  "type": "score",
  "questions":[
    {
      "name": "Sexo",
      "short_name": "sex",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "Hombre",
          "score": 0
        },
        {
          "name": "Mujer",
          "score": 1
        }
      ]
    },
    {
      "name": "Black Race",
      "short_name": "Black Race",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "Yes",
          "score": 0
        },
        {
          "name": "No",
          "score": 1
        }
      ]
    },
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "Years",
        "validation": {
          "minLenght": 0,
          "maxLenght": 100
        }
      },
      "name": "Age",
      "short_name": "age",
      "description": ""
    },
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "Norm:0.7-1.3 (mg/dL)",
        "validation": {
          "minLenght": 0.7,
          "maxLenght": 1.3
        }
      },
      "name": "Creatinine",
      "short_name": "",
      "description": ""
    }
  ],
  "results":{
    "type": "result",
    "method": "mdrd"
  }
},
{
  "title": "Escala Silverman-Andersen",
  "when": "This Silverman score calculator evaluates the respiratory function of the pediatric patient and whether they are in respiratory distress. In the text below the form, there is more information on the score and its usage.",
  "type": "score",
  "questions":[
    {
      "name": "Upper chest retraction",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "Synchronized",
          "score": 0
        },
        {
          "name": "Lag on inspiration",
          "score": 1
        },
        {
          "name": "See-saw respiration",
          "score": 2
        }
      ]
    },
    {
      "name": "Lower chest retraction",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "None",
          "score": 0
        },
        {
          "name": "Just Visible",
          "score": 1
        },
        {
          "name": "Marked",
          "score": 2
        }
      ]
    },
    {
      "name": "Xiphoid retraction",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "None",
          "score": 0
        },
        {
          "name": "Just Visible",
          "score": 1
        },
        {
          "name": "Marked",
          "score": 2
        }
      ]
    },
    {
      "name": "Nasal flaring",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "None",
          "score": 0
        },
        {
          "name": "Minimal",
          "score": 1
        },
        {
          "name": "Marked",
          "score": 2
        }
      ]
    },
    {
      "name": "Expiratory grunt",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "None",
          "score": 0
        },
        {
          "name": "Audible with stethoscope",
          "score": 1
        },
        {
          "name": "Audible with naked ear",
          "score": 2
        }
      ]
    }
  ],
  "results":{
    "type": "ranks",
    "method": "score",
    "levels":[
      {
        "score": 1,
        "description": " none to mild respiratory distress."
      },
      {
        "score": 2,
        "description": " none to mild respiratory distress."
      },
      {
        "score": 3,
        "description": " none to mild respiratory distress."
      },
      {
        "score": 4,
        "description": " none to mild respiratory distress."
      },
      {
        "score": 5,
        "description": " moderate respiratory distress."
      },
      {
        "score": 6,
        "description": " moderate respiratory distress."
      },
      {
        "score": 7,
        "description": " moderate respiratory distress."
      },
      {
        "score": 8,
        "description": " impending respiratory failure."
      },
      {
        "score": 9,
        "description": " impending respiratory failure."
      },
      {
        "score": 10,
        "description": " impending respiratory failure."
      },
      {
        "score": 11,
        "description": " impending respiratory failure."
      }
    ]
  }
},
{
  "title": "TFG formula Schwartz",
  "when": "Use in infants, children, and adolescents with or without chronic kidney disease (CKD).",
  "type": "score",
  "questions":[
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "Norm:63-203 (cm)",
        "validation": {
          "minLenght": 63,
          "maxLenght": 203
        }
      },
      "name": "Height",
      "short_name": "Height",
      "description": ""
    },
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "0.7-1.3 (mg/dL)",
        "validation": {
          "minLenght": 0.7,
          "maxLenght": 1.3
        }
      },
      "name": "Serum creatinine",
      "short_name": "",
      "description": ""
    }
  ],
  "results":{
    "type": "result",
    "method": "gfr"
  }
},
{
  "title": "FeNa",
  "when": "Patients with oliguria and/or acute kidney injury of unclear etiology.",
  "type": "score",
  "questions":[
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "Norm:136-145 (mmol/L)",
        "validation": {
          "minLenght": 136,
          "maxLenght": 145
        }
      },
      "name": "Serium Sodium",
      "short_name": "",
      "description": ""
    },
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "0.7-1.3 (mg/dL)",
        "validation": {
          "minLenght": 0.7,
          "maxLenght": 1.3
        }
      },
      "name": "Serum creatinine",
      "short_name": "",
      "description": ""
    },
     {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "Norm:100-260 (mmol/L)",
        "validation": {
          "minLenght": 100,
          "maxLenght": 260
        }
      },
      "name": "Urine Sodium",
      "short_name": "",
      "description": ""
    },
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "20-370 (mg/dL)",
        "validation": {
          "minLenght": 20,
          "maxLenght": 370
        }
      },
      "name": "Urine creatinine",
      "short_name": "",
      "description": ""
    }
  ],
  "results":{
    "type": "result",
    "method": "FENa"
  }
},
{
  "title": "Anion Gap",
  "when": "",
  "type": "score",
  "questions":[
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "mEq/L"
      },
      "name": "Na",
      "short_name": "",
      "description": ""
    },
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "mEq/L"
      },
      "name": "Cl",
      "short_name": "",
      "description": ""
    },
     {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "mEq/L"
      },
      "name": "HCO3",
      "short_name": "",
      "description": ""
    }
  ],
  "results":{
    "type": "result",
    "method": "AnionGap"
  }
},
{
  "title": "Anion Gap + Delta Gap",
  "when": "",
  "type": "score",
  "questions":[
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "mEq/L"
      },
      "name": "Na",
      "short_name": "",
      "description": ""
    },
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "mEq/L"
      },
      "name": "Cl",
      "short_name": "",
      "description": ""
    },
     {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "mEq/L"
      },
      "name": "HCO3",
      "short_name": "",
      "description": ""
    },
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "mEq/L"
      },
      "name": "Baseline Gap",
      "short_name": "",
      "description": ""
    }
  ],
  "results":{
    "type": "result",
    "method": "AnionGapDeltaGradient"
  }
},
{
  "title": "APACHE II",
  "when": "",
  "type": "score",
  "questions":[
    {
      "name": "Temperature (Degrees C)",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": ">=41",
          "score": 4
        },
        {
          "name": "39-40.9",
          "score": 3
        },
        {
          "name": "38.5-38.9",
          "score": 1
        },
        {
          "name": "36-38.4",
          "score": 0
        },
        {
          "name": "34-35.9",
          "score": 1
        },
        {
          "name": "32-33.9",
          "score": 2
        },
        {
          "name": "30-31.9",
          "score": 3
        },
        {
          "name": "<=29.9",
          "score": 4
        }
      ]
    },
    {
      "name": "Mean Arterial Pressure (mmHg)",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": ">=160",
          "score": 4
        },
        {
          "name": "130-159",
          "score": 3
        },
        {
          "name": "110-129",
          "score": 2
        },
        {
          "name": "70-109",
          "score": 0
        },
        {
          "name": "50-69",
          "score": 2
        },
        {
          "name": "<=49",
          "score": 4
        }
      ]
    },
    {
      "name": "Heart Rate",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": ">=180",
          "score": 4
        },
        {
          "name": "140-179",
          "score": 3
        },
        {
          "name": "110-139",
          "score": 2
        },
        {
          "name": "70-109",
          "score": 0
        },
        {
          "name": "55-69",
          "score": 2
        },
        {
          "name": "40-54",
          "score": 3
        },
        {
          "name": "<=39",
          "score": 4
        }
      ]
    },
    {
      "name": "Respiratory Rate",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": ">=50",
          "score": 4
        },
        {
          "name": "35-49",
          "score": 3
        },
        {
          "name": "25-34",
          "score": 1
        },
        {
          "name": "12-24",
          "score": 0
        },
        {
          "name": "10-11",
          "score": 1
        },
        {
          "name": "6-9",
          "score": 2
        },
        {
          "name": "<=5",
          "score": 4
        }
      ]
    },
      {
      "name": "A-aPO2(FiO2>50%) or PaO2(FiO2<50%)",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": ">=500",
          "score": 4
        },
        {
          "name": "350-499",
          "score": 3
        },
        {
          "name": "200-349",
          "score": 2
        },
        {
          "name": "<200 or PaO2 > 70",
          "score": 0
        },
        {
          "name": "PaO2 61-70",
          "score": 1
        },
        {
          "name": "PaO2 55-60",
          "score": 3
        },
        {
          "name": "PaO2 <55",
          "score": 4
        }
      ]
    },
    {
      "name": "Arterial pH or HCO3",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": ">=7.7 ; >=52",
          "score": 4
        },
        {
          "name": "7.6-7.69 ; 41-51.9",
          "score": 3
        },
        {
          "name": "7.5-7.59;32-40.9",
          "score": 1
        },
        {
          "name": "7.33-7.49; 32-40.9",
          "score": 0
        },
        {
          "name": "7.25-7.32; 18-22.9",
          "score": 2
        },
        {
          "name": "7.15-7.24; 15-17.9",
          "score": 3
        },
        {
          "name": "<7.15; <15",
          "score": 4
        }
      ]
    },
    {
      "name": "Serum Na+ (mEq/L)",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": ">=180",
          "score": 4
        },
        {
          "name": "160-179",
          "score": 3
        },
        {
          "name": "155-159",
          "score": 2
        },
        {
          "name": "150-154",
          "score": 1
        },
        {
          "name": "130-149",
          "score": 0
        },
        {
          "name": "120-129",
          "score": 2
        },
        {
          "name": "111-119",
          "score": 3
        },
        {
          "name": "<=110",
          "score": 4
        }
      ]
    },
    {
      "name": "Serum K+ (mEq/L)",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": ">=7",
          "score": 4
        },
        {
          "name": "6-6.9",
          "score": 3
        },
        {
          "name": "5.5-5.9",
          "score": 1
        },
        {
          "name": "3.5-5.4",
          "score": 0
        },
        {
          "name": "3-3.4",
          "score": 1
        },
        {
          "name": "2.5-2.9",
          "score": 2
        },
        {
          "name": "<2.5",
          "score": 4
        }
      ]
    },
    {
      "name": "Serum Creatinine (ARF means Acute Renal Failure)",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": ">=3.5",
          "score": 4
        },
        {
          "name": ">3.5 in ARF",
          "score": 8
        },
        {
          "name": "2-3.4",
          "score": 3
        },
        {
          "name": "2-3.4 in ARF",
          "score": 6
        },
        {
          "name": "1.5-1.9",
          "score": 2
        },
        {
          "name": "1.5-1.9 in ARF",
          "score": 4
        },
        {
          "name": "0.6-1.4",
          "score": 0
        },
        {
          "name": "0.6",
          "score": 2
        }
      ]
    },
    {
      "name": "Hematocrit",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": ">=60",
          "score": 4
        },
        {
          "name": "50-59.9",
          "score": 2
        },
        {
          "name": "46-49.9",
          "score": 1
        },
        {
          "name": "30-45-.9",
          "score": 0
        },
        {
          "name": "20-29.9",
          "score": 2
        },
        {
          "name": "<20",
          "score": 4
        }
      ]
    },
    {
      "name": "WBC Count(10^3/#gl)",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": ">=40",
          "score": 4
        },
        {
          "name": "20-39.9",
          "score": 2
        },
        {
          "name": "15-19.9",
          "score": 1
        },
        {
          "name": "3-14.9",
          "score": 0
        },
        {
          "name": "1-2.9",
          "score": 2
        },
        {
          "name": "<1",
          "score": 4
        }
      ]
    },
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": ""
      },
      "name": "Glasgow Coma Score",
      "short_name": "",
      "description": ""
    },
    {
      "name": "Age (years)",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": ">=75",
          "score": 6
        },
        {
          "name": "65-74",
          "score": 5
        },
        {
          "name": "55-64",
          "score": 3
        },
        {
          "name": "45-54",
          "score": 2
        },
        {
          "name": "<=44",
          "score": 0
        }
      ]
    },
    {
      "name": "Chronic Health Problems: 1) Cirrhosis of the liver confirmed by biopsy 2) New York Heart Association Class IV 3) Severe COPD -- Hypercapnia, home O2 use, or pulmonary hypertension 4) On regular dialysis or 5) Immunocompromised",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "None",
          "score": 0
        },
        {
          "name": "Non-Surgical",
          "score": 5
        },
        {
          "name": "Emergent Operation",
          "score": 5
        },
        {
          "name": "Elective Operation",
          "score": 2
        }      
    ]
    }
  ],
  "results":{
    "type": "ranksWithInput",
    "method": "scoreRange"
  }
},
{
  "title": "Reanimación con liquidos Parkland",
  "when": "",
  "type": "score",
  "questions":[
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "Kg"
      },
      "name": "Weight",
      "short_name": "",
      "description": ""
    },
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "Percent"
      },
      "name": "Percent Nonsuperficial Burn Area",
      "short_name": "",
      "description": ""
    }
  ],
  "results":{
    "type": "result",
    "method": "parkland"
  }
},{
  "title": "Criterios de Centor",
  "when": "Children with pharyngitis, primarily; the risk of GAS decreases significantly with age into adulthood.",
  "type": "score",
  "questions":[
    {
      "name": "Age",
      "short_name": "",
      "type": "radio",
      "description":"Group A streptococcus (GAS) rare under 3",
      "options":[
        {
          "name": "3-14 years",
          "score": 1
        },
        {
          "name": "15-44 years",
          "score": 0
        },
        {
          "name": ">= 45 years",
          "score": -1
        }
      ]
    },
    {
      "name": "Exudate or swelling on tonsils",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    },
    {
      "name": "Tender/swollen anterior cervical lymph nodes",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    },
    {
      "name": "Temp >38°C (100.4°F)",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    },
    {
      "name": "Cough",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "Cough Present",
          "score": 0
        },
        {
          "name": "Cough Absent",
          "score": 1
        }
      ]
    }
  ],
  "results":{
    "type": "ranks",
    "method": "score",
    "levels":[
      {
        "score": 1,
        "description": "1-2.5% likelihood of sterp. No further testing or antibiotics."
      }
      ,{
        "score": 2,
        "description": "5-10% likelihood of sterp. No further testing or antibiotics."
      },
      {
        "score": 3,
        "description": "11-17% likelihood of sterp. Optional rapid strep testing and/or culture."
      },
      {
        "score": 4,
        "description": "28-35% likelihood of sterp. Consider rapid strep testing and/or culture."
      },
      {
        "score": 5,
        "description": "51-53% likelihood of sterp. Consider rapid strep testing and/or culture. Empiric antibiotics may be appropriate depending on the specific scenario."
      },
      {
        "score": 6,
        "description": "51-53% likelihood of sterp. Consider rapid strep testing and/or culture. Empiric antibiotics may be appropriate depending on the specific scenario."
      },
      {
        "score": "default",
        "description": ""
      }
    ]
  }
},
{
  "title": "Criterios de Framingham",
  "when": "Patients with signs and symptoms of heart failure (HF).",
  "type": "score",
  "questions":[
    {
      "name": "Acute pulmonary edema",
      "short_name": "",
      "type": "radio",
      "description":"Major Criteria",
      "options":[
        {
          "name": "Yes",
          "score": 100
        },
        {
          "name": "No",
          "score": 0
        }
      ]
    },
    {
      "name": "Cardiomegaly",
      "short_name": "",
      "type": "radio",
      "description":"Major Criteria",
      "options":[
        {
          "name": "Yes",
          "score": 100
        },
        {
          "name": "No",
          "score": 0
        }
      ]
    },
    {
      "name": "Hepatojugular reflux",
      "short_name": "",
      "type": "radio",
      "description":"Major Criteria",
      "options":[
        {
          "name": "Yes",
          "score": 100
        },
        {
          "name": "No",
          "score": 0
        }
      ]
    },
    {
      "name": "Neck vein distention",
      "short_name": "",
      "type": "radio",
      "description":"Major Criteria",
      "options":[
        {
          "name": "Yes",
          "score": 100
        },
        {
          "name": "No",
          "score": 0
        }
      ]
    },
    {
      "name": "Paroxysmal nocturnal dyspnea or orthopnea",
      "short_name": "",
      "type": "radio",
      "description":"Major Criteria",
      "options":[
        {
          "name": "Yes",
          "score": 100
        },
        {
          "name": "No",
          "score": 0
        }
      ]
    },
    {
      "name": "Pulmonary rales",
      "short_name": "",
      "type": "radio",
      "description":"Major Criteria",
      "options":[
        {
          "name": "Yes",
          "score": 100
        },
        {
          "name": "No",
          "score": 0
        }
      ]
    },
    {
      "name": "Weight loss >4.5 kg in 5 days in response to treatment",
      "short_name": "",
      "type": "radio",
      "description":"Major Criteria",
      "options":[
        {
          "name": "Yes",
          "score": 100
        },
        {
          "name": "No",
          "score": 0
        }
      ]
    },
    {
      "name": "Third Heart Sound (S3 gallop rhythm)",
      "short_name": "",
      "type": "radio",
      "description":"Major Criteria",
      "options":[
        {
          "name": "Yes",
          "score": 100
        },
        {
          "name": "No",
          "score": 0
        }
      ]
    },
    {
      "name": "Ankle edema",
      "short_name": "",
      "type": "radio",
      "description":"Minor Criteria",
      "options":[
        {
          "name": "Yes",
          "score": 1
        },
        {
          "name": "No",
          "score": 0
        }
      ]
    },
    {
      "name": "Dyspnea on exertion",
      "short_name": "",
      "type": "radio",
      "description":"Minor Criteria",
      "options":[
        {
          "name": "Yes",
          "score": 1
        },
        {
          "name": "No",
          "score": 0
        }
      ]
    },
    {
      "name": "Hepatomegaly",
      "short_name": "",
      "type": "radio",
      "description":"Minor Criteria",
      "options":[
        {
          "name": "Yes",
          "score": 1
        },
        {
          "name": "No",
          "score": 0
        }
      ]
    },
    {
      "name": "Nocturnal cough",
      "short_name": "",
      "type": "radio",
      "description":"Minor Criteria",
      "options":[
        {
          "name": "Yes",
          "score": 1
        },
        {
          "name": "No",
          "score": 0
        }
      ]
    },
    {
      "name": "Pleural effusion",
      "short_name": "",
      "type": "radio",
      "description":"Minor Criteria",
      "options":[
        {
          "name": "Yes",
          "score": 1
        },
        {
          "name": "No",
          "score": 0
        }
      ]
    },
    {
      "name": "Tachycardia (HR >120)",
      "short_name": "",
      "type": "radio",
      "description":"Minor Criteria",
      "options":[
        {
          "name": "Yes",
          "score": 1
        },
        {
          "name": "No",
          "score": 0
        }
      ]
    }
  ],
  "results":{
    "type": "ranksFraminghamHeart",
    "method": "scoreHide",
    "levels":[
    ]
  }
},
// {
//   "title": "Framingham Risk Score for Hard Coronary Heart Disease",
//   "when": "Patients aged 30-79 years with no prior history of coronary heart disease.Do not use in patients with intermittent claudication or diabetes.",
//   "type": "score",
//   "questions":[
//     {
//       "type": "input",
//       "input": {
//         "type": "number",
//         "placeholder": "Years",
//         "validation": {
//           "minLenght": 0,
//           "maxLenght": 100
//         }
//       },
//       "name": "Age",
//       "short_name": "age",
//       "description": ""
//     },
//     {
//       "name": "Sexo",
//       "short_name": "sex",
//       "type": "radio",
//       "description":"",
//       "options":[
//         {
//           "name": "Female",
//           "score": 1
//         },
//         {
//           "name": "Male",
//           "score": 1
//         }
//       ]
//     },
//     {
//       "name": "Smoker",
//       "short_name": "",
//       "type": "radio",
//       "description":"",
//       "options":[
//         {
//           "name": "Yes",
//           "score": 1
//         },
//         {
//           "name": "No",
//           "score": 1
//         }
//       ]
//     },
//     {
//       "type": "input",
//       "input": {
//         "type": "number",
//         "placeholder": "Norm: 3.9-5.2 mmol/L",
//         "validation": {
//           "minLenght": 3.9,
//           "maxLenght": 5.2
//         }
//       },
//       "name": "Total Cholestrol",
//       "short_name": "",
//       "description": ""
//     },
//     {
//       "type": "input",
//       "input": {
//         "type": "number",
//         "placeholder": "mmol/L",
//         "validation": {
//           "minLenght": 3.9,
//           "maxLenght": 5.2
//         }
//       },
//       "name": "HDL Cholestrol",
//       "short_name": "",
//       "description": ""
//     },
//     {
//       "type": "input",
//       "input": {
//         "type": "number",
//         "placeholder": "Norm: 100-120 mm Hg",
//         "validation": {
//           "minLenght": 100,
//           "maxLenght": 120
//         }
//       },
//       "name": "Systolic BP",
//       "short_name": "",
//       "description": ""
//     },
//     {
//       "name": "Blood pressure being treated with medicines",
//       "short_name": "",
//       "type": "radio",
//       "description":"",
//       "options":[
//         {
//           "name": "Yes",
//           "score": 1
//         },
//         {
//           "name": "No",
//           "score": 1
//         }
//       ]
//     }

//   ],
//   "results":{
//     "type": "result",
//     "method": "framingham_risk_score"
//   }
// },
{
  "title": "Gasto cardiaco",
  "when": "",
  "type": "score",
  "questions":[
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "mL/min"
      },
      "name": "O2 Consumption",
      "short_name": "",
      "description": ""
    },
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "gm/dL"
      },
      "name": "Hgb",
      "short_name": "",
      "description": ""
    },
     {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "%"
      },
      "name": "O2Sat",
      "short_name": "",
      "description": ""
    },
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "mmHg"
      },
      "name": "PaO2",
      "short_name": "",
      "description": ""
    },
     {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "%"
      },
      "name": "O2vSat",
      "short_name": "",
      "description": ""
    },
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "mmHg"
      },
      "name": "PvO2",
      "short_name": "",
      "description": ""
    }
  ],
  "results":{
    "type": "result",
    "method": "gasto_cardiaco"
  }
},
{
  "title": "Escala Braden-Bergstrom (Evaluación deriesgo para úlceras por presión)",
  "when": "Identifies patients at risk for pressure ulcers.",
  "type": "score",
  "questions":[
    {
      "name": "Sensory perception",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "No impairment: responds to verbal commands, able to feel and express pain/discomfort",
          "score": 4
        },
        {
          "name": "Slightly limited: responds to verbal commands but cannot always communicate discomfort or need to be turned, OR has sensory impairment limiting ability to feel pain/discomfort in 1-2 extremities",
          "score": 3
        },
        {
          "name": "Very limited: responds only to pain, cannot communicate discomfort except by moaning or restlessness, OR has sensory impairment limiting ability to feel pain/discomfort over half of body",
          "score": 2
        },
        {
          "name": "Completely limited: unresponsive to painful stimuli due to diminished consciousness or sedation, OR limited ability to feel pain over most of body",
          "score": 1
        }
      ]
    },
    {
      "name": "Moisture",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "Rarely moist: skin usually dry, linen only requires changing at routine intervals",
          "score": 4
        },
        {
          "name": "Occasionally moist: requiring extra linen change approximately once a day",
          "score": 3
        },
        {
          "name": "Very moist: skin is often but not always moist; linen must be changed at least once a shift",
          "score": 2
        },
        {
          "name": "Constantly moist: skin is kept moist almost constantly by perspiration, urine, etc; dampness detected every time patient is moved/turned",
          "score": 1
        }
      ]
    },
    {
      "name": "Activity",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "Walks frequently: walks outside room ≥2x/day and inside room at least once every 2 hrs during waking hours",
          "score": 4
        },
        {
          "name": "Walks occasionally: during day but for very short distances with or without assistance; spends majority of shift in bed/chair",
          "score": 3
        },
        {
          "name": "Chairfast: ability to walk severely limited or non-existent; cannot bear own weight and/or must be assisted into chair/wheelchair",
          "score": 2
        },
        {
          "name": "Bedfast: confined to bed",
          "score": 1
        }
      ]
    },
    {
      "name": "Mobility",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "No limitation: makes major and frequent changes in position without assistance",
          "score": 4
        },
        {
          "name": "Slightly limited: makes frequent though slight changes in body or extremity position independently",
          "score": 3
        },
        {
          "name": "Very limited: makes occasional slight changes in body or extremity position but unable to make frequent or significant changes independently",
          "score": 2
        },
        {
          "name": "Completely immobile: does not make even slight changes in body or extremity position without assistance",
          "score": 1
        }
      ]
    },
    {
      "name": "Nutrition",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "Excellent: eats most of every meal; never refuses a meal; usually eats ≥4 servings of meat and dairy products; occasionally eats between meals; supplementation not required",
          "score": 4
        },
        {
          "name": "Adequate: eats over half of most meals; eats 4 servings protein (meat or dairy) daily; occasionally refuses meal but will usually take supplement when offered; or is on a tube feeding/TPN regimen which probably meets most of nutritional needs",
          "score": 3
        },
        {
          "name": "Probably inadequate: rarely eats complete meal and generally eats only about ½ of any food offered; protein intake includes only 3 servings of meat or dairy products daily; occasionally will take dietary supplement; or receives less than optimum amount of liquid diet/tube feeding",
          "score": 2
        },
        {
          "name": "Very poor: never eats complete meal; rarely eats >⅓ of any food offered; eats ≤2 servings protein (meat or dairy) daily; takes fluids poorly; does not take liquid dietary supplement; or is NPO and/or maintained on clear liquids or IV for >5 days",
          "score": 1
        }
      ]
    },
    {
      "name": "Friction and shear",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "No apparent problem: moves in bed/chair independently, has sufficient muscle strength to lift up completely during move, maintains good position in bed/chair",
          "score": 3
        },
        {
          "name": "Potential problem: moves feebly or requires minimum assistance; during a move, skin probably slides to some extent against sheets, chair restraints, or other devices; maintains relatively good position in chair or bed most of the time but occasionally slides down",
          "score": 2
        },
        {
          "name": "Problem: requires moderate to maximum assistance in moving; complete lifting without sliding against sheets is impossible; frequently slides down in bed or chair, requiring frequent repositioning with maximum assistance; spasticity, contractures, or agitation leads to almost constant friction",
          "score": 1
        }
      ]
    }
  ] ,
  "results":{
    "type": "ranksBraden",
    "method": "score"
  }
},
{
  "title": "Clasificación Child-Pugh (Severidad de cirrosis hepática)",
  "when": "Estimates cirrhosis severity.",
  "type": "score",
  "questions":[
    {
      "name": "Bilirubin (Total)",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "<2 mg/dL (<34.2 µmol/L)",
          "score": 1
        },
        {
          "name": "2-3 mg/dL (34.2-51.3 µmol/L)",
          "score": 2
        },
        {
          "name": ">3 mg/dL (>51.3 µmol/L)",
          "score": 3
        }
      ]
    },
    {
      "name": "Albumin",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": ">3.5 g/dL (>35 g/L)",
          "score": 1
        },
        {
          "name": "2.8-3.5 g/dL (28-35 g/L)",
          "score": 2
        },
        {
          "name": "<2.8 g/dL (<28 g/L)",
          "score": 3
        }
      ]
    },
    {
      "name": "INR",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": " < 1.7 ",
          "score": 1
        },
        {
          "name": " 1.7 - 2.2 ",
          "score": 2
        },
        {
          "name": " > 2.2 ",
          "score": 3
        }
      ]
    },
    {
      "name": "Ascites",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "Absent",
          "score": 1
        },
        {
          "name": "Slight",
          "score": 2
        },
        {
          "name": "Moderate",
          "score": 3
        }
      ]
    },
    {
      "name": "Encephalopathy",
      "short_name": "",
      "type": "radio",
      "description":"",
      
      "options":[
        {
          "name": "No Encephalopathy",
          "score": 1
        },
        {
          "name": "Grade 1-2",
          "score": 2
        },
        {
          "name": "Grade 3-4",
          "score": 3
        }
      ]
    } 
    
  ],
  "results":{
    "type": "ranks",
    "method": "score",
     "levels":[
    //   {
    //     "score": 0,
    //     "description": " normal consciousness, personality,neurological examination, electroencephalogram."
    //   },
    //   {
    //     "score": 1,
    //     "description": " restless, sleep disturbed,irritable/agitated, tremor, impaired handwriting, 5 cps waves."
    //   },
    //   {
    //     "score": 2,
    //     "description": " lethargic, time-disoriented,inappropriate, asterixis, ataxia, slow triphasic waves."
    //   },
    //   {
    //     "score": 3,
    //     "description": " somnolent, stuporous, place-disoriented, hyperactive reflexes, rigidity, slower waves."
    //   },
    //   {
    //     "score": 4,
    //     "description": " unrousable coma, no personality/behavior, decerebrate, slow 2-3 cps delta activity."
    //   }
     ]
  }
},
{
  "title": "Relación nitrógeno ureico/creatinina",
  "when": "",
  "type": "score",
  "questions":[
    {
    "type": "input",
    "input": {
      "type": "number",
      "placeholder": "mg/dL",
    },
      "name": "SUN (B)",
      "short_name": "",
      "description": ""
    },
    {
    "type": "input",
    "input": {
      "type": "number",
      "placeholder": "mg/dL",
    },
      "name": "Creatinine (S)",
      "short_name": "",
      "description": ""
    }
  ],
  "results":{
    "type": "result",
    "method": "BUN"
  }
},
{
  "title": "Escala CIWA-Ar",
  "when": "Patients in a variety of settings, including outpatient, emergency, psychiatric, and general medical-surgical units, for whom there is clinical concern for alcohol withdrawal.",
  "type": "score",
  "questions":[
    {
      "name": "Nausea/vomiting",
      "short_name": "",
      "type": "radio",
      "description":"Ask 'Do you feel sick to your stomach? Have you vomited?'",
      "options":[
        {
          "name": "No nausea and no vomiting",
          "score": 0
        },
        {
          "name": "Mild nausea and no vomiting",
          "score": 1
        },
        {
          "name": "(More severe symptoms)",
          "score": 2
        },
        {
          "name": "(More severe symptoms)",
          "score": 3
        },
        {
          "name": "Intermittent nausea with dry heaves",
          "score": 4
        },
        {
          "name": "(More severe symptoms)",
          "score": 5
        },
        {
          "name": "(More severe symptoms)",
          "score": 6
        },
        {
          "name": "Constant nausea, frequent dry heaves and vomiting",
          "score": 7
        }
      ]
    },
    {
      "name": "Tremor",
      "short_name": "",
      "type": "radio",
      "description":"Arms extended and fingers spread apart",
      "options":[
        {
          "name": "No tremor",
          "score": 0
        },
        {
          "name": "Not visible, but can be felt fingertip to fingertip",
          "score": 1
        },
        {
          "name": "(More severe symptoms)",
          "score": 2
        },
        {
          "name": "(More severe symptoms)",
          "score": 3
        },
        {
          "name": "Moderate, with patient's arms extended",
          "score": 4
        },
        {
          "name": "(More severe symptoms)",
          "score": 5
        },
        {
          "name": "(More severe symptoms)",
          "score": 6
        },
        {
          "name": "Severe, even with arms not extended",
          "score": 7
        }
      ]
    },
    {
      "name": "Paroxysmal sweats",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "No sweat visible",
          "score": 0
        },
        {
          "name": "Barely perceptible sweating, palms moist",
          "score": 1
        },
        {
          "name": "(More severe symptoms)",
          "score": 2
        },
        {
          "name": "(More severe symptoms)",
          "score": 3
        },
        {
          "name": "Beads of sweat obvious on forehead",
          "score": 4
        },
        {
          "name": "(More severe symptoms)",
          "score": 5
        },
        {
          "name": "(More severe symptoms)",
          "score": 6
        },
        {
          "name": "Drenching sweats",
          "score": 7
        }
      ]
    },
    {
      "name": "Anxiety",
      "short_name": "",
      "type": "radio",
      "description":"Ask, 'Do you feel nervous?'",
      "options":[
        {
          "name": "No anxiety, at ease",
          "score": 0
        },
        {
          "name": "Mildly anxious",
          "score": 1
        },
        {
          "name": "(More severe symptoms)",
          "score": 2
        },
        {
          "name": "(More severe symptoms)",
          "score": 3
        },
        {
          "name": "Moderately anxious, or guarded, so anxiety is inferred",
          "score": 4
        },
        {
          "name": "(More severe symptoms)",
          "score": 5
        },
        {
          "name": "(More severe symptoms)",
          "score": 6
        },
        {
          "name": "Equivalent to acute panic states as seen in severe delirium or acute schizophrenic reactions",
          "score": 7
        }
      ]
    },
    {
      "name": "Agitation",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "Normal activity",
          "score": 0
        },
        {
          "name": "Somewhat more activity than normal activty",
          "score": 1
        },
        {
          "name": "(More severe symptoms)",
          "score": 2
        },
        {
          "name": "(More severe symptoms)",
          "score": 3
        },
        {
          "name": "Moderately fidgety and restless",
          "score": 4
        },
        {
          "name": "(More severe symptoms)",
          "score": 5
        },
        {
          "name": "(More severe symptoms)",
          "score": 6
        },
        {
          "name": "Paces back and forth during most of the interview, or constantly thrashes about",
          "score": 7
        }
      ]
    },
    {
      "name": "Tactile disturbances",
      "short_name": "",
      "type": "radio",
      "description":"Ask, 'Have you any itching, pins and needles sensations, any burning, any numbness, or do you feel bugs crawling on or under your skin?'",
      "options":[
        {
          "name": "None",
          "score": 0
        },
        {
          "name": "Very mild itching, pin and needles, burning, or numbness",
          "score": 1
        },
        {
          "name": "Mild itching, pin and needles, burning, or numbness",
          "score": 2
        },
        {
          "name": "Moderate itching, pin and needles, burning, or numbness",
          "score": 3
        },
        {
          "name": "Moderately severe hallucinations",
          "score": 4
        },
        {
          "name": "Severe hallucinations",
          "score": 5
        },
        {
          "name": "Extremely severe hallucinations",
          "score": 6
        },
        {
          "name": "Continuous hallucinations",
          "score": 7
        }
      ]
    },
    {
      "name": "Auditory disturbances",
      "short_name": "",
      "type": "radio",
      "description":"Ask, 'Are you more aware of sounds around you? Are they harsh? Do they frighten you? Are you hearing anything that is disturbing to you? Are you hearing things you know are not there?'",
      "options":[
        {
          "name": "Not present",
          "score": 0
        },
        {
          "name": "Very mild harshness or ability or frighten",
          "score": 1
        },
        {
          "name": "Mild harshness or ability or frighten",
          "score": 2
        },
        {
          "name": "Moderate harshness or ability or frighten",
          "score": 3
        },
        {
          "name": "Moderately severe hallucinations",
          "score": 4
        },
        {
          "name": "Severe hallucinations",
          "score": 5
        },
        {
          "name": "Extremely severe hallucinations",
          "score": 6
        },
        {
          "name": "Continuous hallucinations",
          "score": 7
        }
      ]
    },
    {
      "name": "Visual disturbances",
      "short_name": "",
      "type": "radio",
      "description":"Ask 'Does the light appear to be too bright? Is its color different? Does it hurt your eyes? Are you seeing anything that is disturbing to you? Are you seeing things you know are not there?'",
      "options":[
        {
          "name": "Not present",
          "score": 0
        },
        {
          "name": "Very mild sensitivity",
          "score": 1
        },
        {
          "name": "Mild sensitivity",
          "score": 2
        },
        {
          "name": "Moderate sensitivity",
          "score": 3
        },
        {
          "name": "Moderately severe hallucinations",
          "score": 4
        },
        {
          "name": "Severe hallucinations",
          "score": 5
        },
        {
          "name": "Extremely severe hallucinations",
          "score": 6
        },
        {
          "name": "Continuous hallucinations",
          "score": 7
        }
      ]
    },
    {
      "name": "Headache/fullness in head",
      "short_name": "",
      "type": "radio",
      "description":"Ask 'Does your head feel different? Does it feel like there is a band around your head?' Do not rate for dizziness or lightheadedness. Otherwise, rate 'severity.'",
      "options":[
        {
          "name": "Not present",
          "score": 0
        },
        {
          "name": "Very mild",
          "score": 1
        },
        {
          "name": "Mild",
          "score": 2
        },
        {
          "name": "Moderate",
          "score": 3
        },
        {
          "name": "Moderately severe",
          "score": 4
        },
        {
          "name": "Severe",
          "score": 5
        },
        {
          "name": "Very severe",
          "score": 6
        },
        {
          "name": "Extremely Severe",
          "score": 7
        }
      ]
    },
    {
      "name": "Orientation/clouding of sensorium",
      "short_name": "",
      "type": "radio",
      "description":"Ask 'What day is this? Where are you? Who am I?'",
      "options":[
        {
          "name": "Oriented, can do serial additions",
          "score": 0
        },
        {
          "name": "Can't do serial additions or is uncertain about date",
          "score": 1
        },
        {
          "name": "Disoriented for date by no more than 2 calendar days",
          "score": 2
        },
        {
          "name": "Disoriented for date by more than 2 calendar days",
          "score": 3
        },
        {
          "name": "Disoriented to place or person",
          "score": 4
        }
      ]
    }
  ],
  "results":{
    "type": "ranksCIWA",
    "method": "score",
    "levels": []
  }
},
{
  "title": "Criterios de Baltazar",
  "when": "The Balthazar score is used to evaluate disease severity in patients with acute pancreatitis. The model is also known as the Computed Tomography Severity Index (CTSI) and has two components: 1. Balthazar grade: from A to E, increasing in severity; 2. Necrosis Score: from no necrosis to over 50% necrosis.",
  "type": "score",
  "questions":[
    {
      "name": "Balthazar Grade",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "Grade A - Normal CT (0 points)",
          "score": 0
        },
        {
          "name": "Grade B Focal or diffuse enlargement (1 point)",
          "score": 1
        },
        {
          "name": "Grade C Pancreatic gland abnormalities (2 points)",
          "score": 2
        },
        {
          "name": "Grade D Fluid collection (3 points)",
          "score": 3
        },
        {
          "name": "Grade E Two or more fluid collections (4 points)",
          "score": 4
        }
      ]
    },
    {
      "name": "Necrosis Score",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "No necrosis (0 points)",
          "score": 0
        },
        {
          "name": "0 to 30% necrosis (2 points)",
          "score": 2
        },
        {
          "name": "30 to 50% necrosis (4 points)",
          "score": 4
        },
        {
          "name": "Over 50% necrosis (6 points)",
          "score": 6
        }
      ]
    }
  ],
  "results":{
    "type": "ranksBalthazar",
    "method": "score",
    "levels": []
  }
},
{
  "title": "Criterios de Ranson",
  "when": "Calculated on admission, and at 48 hours, to estimate mortality from pancreatitis.",
  "type": "score",
  "questions":[
    {
      "name": "WBC > 16k",
      "short_name": "",
      "type": "radio",
      "description":"On admission",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    },
    {
      "name": "Age > 55",
      "short_name": "",
      "type": "radio",
      "description":"On admission",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    },
    {
      "name": "Glucose >200 mg/dL (>10 mmol/L)",
      "short_name": "",
      "type": "radio",
      "description":"On admission",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    },
    {
      "name": "AST > 250",
      "short_name": "",
      "type": "radio",
      "description":"On admission",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    },
    {
      "name": "LDH > 350",
      "short_name": "",
      "type": "radio",
      "description":"On admission",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    },
    {
      "name": "Hct drop >10% from admission",
      "short_name": "",
      "type": "radio",
      "description":"48 hours into admission",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    },
    {
      "name": "BUN increase >5 mg/dL (>1.79 mmol/L) from admission",
      "short_name": "",
      "type": "radio",
      "description":"48 hours into admission",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    },
    {
      "name": "Ca <8 mg/dL (<2 mmol/L) within 48 hours",
      "short_name": "",
      "type": "radio",
      "description":"48 hours into admission",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    },
    {
      "name": "Arterial pO2 <60 mmHg within 48 hours",
      "short_name": "",
      "type": "radio",
      "description":"48 hours into admission",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    },
    {
      "name": "Base deficit (24 - HCO3) >4 mg/dL within 48 hours",
      "short_name": "",
      "type": "radio",
      "description":"48 hours into admission",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    },
    {
      "name": "Fluid needs > 6L within 48 hours",
      "short_name": "",
      "type": "radio",
      "description":"48 hours into admission",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    }
  ],
  "results":{
    "type": "ranksRanson",
    "method": "score"
  }
},
{
  "title": "Regla predictora Wells para el diagnóstico de Trombosis Venosa Profunda",
  "when": "",
  "type": "score",
  "questions":[
    {
      "name": "Paralysis, paresis or recent orthopedic casting of lower extremity",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    },
    {
      "name": "Recently bedridden (more than 3 days) or major surgery within past 4 weeks",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    },
    {
      "name": "Localized tenderness in deep vein system",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    },
    {
      "name": "Swelling of entire leg",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    },
    {
      "name": "	Calf swelling 3 cm greater than other leg (measured 10 cm below the tibial tuberosity)",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    },
    {
      "name": "Pitting edema greater in the symptomatic leg",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    },
    {
      "name": "Collateral non varicose superficial veins",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    },
    {
      "name": "Active cancer or cancer treated within 6 months",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 1
        }
      ]
    },
    {
      "name": "	Alternative diagnosis more likely than DVT (Baker's cyst, cellulitis, muscle damage, superficial venous thrombosis, post phlebitic syndrome, inguinal lymphadenopathy, external venous compression)",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": -2
        }
      ]
    }
      
    
  ],
  "results":{
    "type": "ranksDVT",
    "method": "score",
    "levels":[]
  }

},
{
  "title": "Indice predictivo de asma",
  "when": "Children/infants 3 years or younger with wheezing episodes.",
  "type": "score",
  "questions":[
    {
      "name": "Wheezing episodes/year",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": ">=3",
          "score": 100
        },
        {
          "name": "<3",
          "score": 0
        }
      ]
    },
    {
      "name": "Parent with asthma",
      "short_name": "",
      "type": "radio",
      "description":"Major Criteria",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 10
        }
      ]
    },
    {
      "name": "Patient with eczema",
      "short_name": "",
      "type": "radio",
      "description":"Major Criteria",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 10
        }
      ]
    },
    {
      "name": "Patient has allergic rhinitis",
      "short_name": "",
      "type": "radio",
      "description":"Minor Criteria",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 5
        }
      ]
    },
    {
      "name": "Wheezing apart from colds",
      "short_name": "",
      "type": "radio",
      "description":"Minor Criteria",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 5
        }
      ]
    },
    {
      "name": "Eosinophilia (≥4% on CBC)",
      "short_name": "",
      "type": "radio",
      "description":"Minor Criteria",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Sí",
          "score": 5
        }
      ]
    }
  ],
  "results":{
    "type": "ranksAsma",
    "method": "scoreHide",
    "levels":[
    ]
  }
},
{
  "title": "Índice de severidad de exacerbaciones en asma",
  "when": "Pediatric patients (1-18 years old) with asthma exacerbations.",
  "type": "score",
  "questions":[
    {
      "name": "Wheezing",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "None or mild",
          "score": 0
        },
        {
          "name": "Moderate",
          "score": 1
        },
        {
          "name": "Severe wheezing or absent due to poor air movement",
          "score": 2
        }
      ]
    },
    {
      "name": "Work of breathing",
      "short_name": "",
      "type": "radio",
      "description":"Use of accessory muscles, retractions",
      "options":[
        {
          "name": "Normal or mildly diminished",
          "score": 0
        },
        {
          "name": "Moderate",
          "score": 1
        },
        {
          "name": "Severe",
          "score": 2
        }
      ]
    },
    {
      "name": "Prolongation of expiration",
      "short_name": "",
      "type": "radio",
      "description":"Ratio of expiration to inspiration",
      "options":[
        {
          "name": "Normal or mildly prolonged",
          "score": 0
        },
        {
          "name": "Moderately prolonged",
          "score": 1
        },
        {
          "name": "Severely prolonged",
          "score": 2
        }
      ]
    }

  ],
  "results":{
    "type": "ranksAsmaPASS",
    "method": "score",
    "levels":[
    ]
  }
},
{
  "title": "Escala ABCD2 para la calificación de factores de riesgo para EVC",
  "when": "The ABCD2 score can help physicians risk stratify stroke in patients presenting with a TIA.",
  "type": "score",
  "questions":[
    {
      "name": "Age ≥ 60 years",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Yes",
          "score": 1
        }
      ]
    },
    {
      "name": "BP ≥ 140/90 mmHg",
      "short_name": "",
      "type": "radio",
      "description":"Initial BP. Either SBP ≥ 140 or DBP ≥ 90.",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Yes",
          "score": 1
        }
      ]
    },
    {
      "name": "Clinical features of the TIA",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "Unilateral weakness",
          "score": 2
        },
        {
          "name": "Speech disturbance without weakness",
          "score": 1
        },
        {
          "name": "Other symptoms",
          "score": 0
        }
      ]
    },
    {
      "name": "Duration of symptoms",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "<10 minutes",
          "score": 0
        },
        {
          "name": "10-59 minutes",
          "score": 1
        },
        {
          "name": "≥ 60 minutes",
          "score": 2
        }
      ]
    },
    {
      "name": "History of diabetes",
      "short_name": "",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "No",
          "score": 0
        },
        {
          "name": "Yes",
          "score": 1
        }
      ]
    }

  ],
  "results":{
    "type": "ranks",
    "method": "score",
    "levels":[
      {
        "score": 1,
        "description": "Per the validation study, 0-3 points: Low Risk. 2-Day Stroke Risk: 1.0%. 7-Day Stroke Risk: 1.2%. 90-Day Stroke Risk: 3.1%"
      },
      {
        "score": 2,
        "description": "Per the validation study, 0-3 points: Low Risk. 2-Day Stroke Risk: 1.0%. 7-Day Stroke Risk: 1.2%. 90-Day Stroke Risk: 3.1%"
      },
      {
        "score": 3,
        "description": "Per the validation study, 0-3 points: Low Risk. 2-Day Stroke Risk: 1.0%. 7-Day Stroke Risk: 1.2%. 90-Day Stroke Risk: 3.1%"
      },
      {
        "score": 4,
        "description": "Per the validation study, 0-3 points: Low Risk. 2-Day Stroke Risk: 1.0%. 7-Day Stroke Risk: 1.2%. 90-Day Stroke Risk: 3.1%"
      },
      {
        "score": 5,
        "description": "Per the validation study, 4-5 points: Moderate Risk. 2-Day Stroke Risk: 4.1%. 7-Day Stroke Risk: 5.9%. 90-Day Stroke Risk: 9.8%"
      },
      {
        "score": 6,
        "description": "Per the validation study, 4-5 points: Moderate Risk. 2-Day Stroke Risk: 4.1%. 7-Day Stroke Risk: 5.9%. 90-Day Stroke Risk: 9.8%"
      },
      {
        "score": 7,
        "description": "Per the validation study, 6-7 points: High Risk. 2-Day Stroke Risk:. 8.1%7-Day Stroke Risk: 11.7%. 90-Day Stroke Risk: 17.8%"
      },
      {
        "score": 8,
        "description": "Per the validation study, 6-7 points: High Risk. 2-Day Stroke Risk: 8.1%. 7-Day Stroke Risk: 11.7%. 90-Day Stroke Risk: 17.8%"
      }
    ]
  }
  },
{
  "title": "Total Body Water (Watson Formula)",
  "when": "",
  "type": "score",
  "questions":[
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "cm"
      },
      "name": "Height",
      "short_name": "Height",
      "description": ""
    },
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "Kg",
        "validation": {
          "minLenght": 0,
          "maxLenght": 200
        }
      },
      "name": "Weight",
      "short_name": "Weight",
      "description": ""
    },
    {
      "name": "Sexo",
      "short_name": "sex",
      "type": "radio",
      "description":"",
      "options":[
        {
          "name": "Hombre",
          "score": 0
        },
        {
          "name": "Mujer",
          "score": 1
        }
      ]
    },
    {
      "type": "input",
      "input": {
        "type": "number",
        "placeholder": "Years",
        "validation": {
          "minLenght": 0,
          "maxLenght": 100
        }
      },
      "name": "Age",
      "short_name": "age",
      "description": ""
    }
  ],
  "results":{
    "type": "result",
    "method": "TBW"
  }
}



];

  }

  openCalculator(formula){
    this.navCtrl.push(CalculatorDetailsPage, {
      "formula": formula
    });
  }

}
