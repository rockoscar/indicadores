import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { Chart } from 'chart.js';
import { IndicadorServicio } from '../../servicios/indicador-servicios';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
   providers: [IndicadorServicio],
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

 // @ViewChild('canvas') canvas: ElementRef;
  
  chart = []

  public fechas: any
  public recibe: any
  public recibe2: any

  constructor(
    private _IndicadorServicio: IndicadorServicio,
    private cdRef:ChangeDetectorRef //creo este ni lo usas
  ) {
    this.fechas = []
    this.recibe = []
    this.recibe2 = []
   }

  ngOnInit() {
    this._IndicadorServicio.listaIndi().subscribe(
      response => {
        if(!response.indicadores){
          alert("No hay indiacadores")
        }else{   
          let x
          for(let indicador of response.indicadores){
            if (indicador.resultado != null){
              x = indicador.resultado *1
              this.fechas.push(indicador.fecha)
            }
            if (x < 100)
            this.recibe.push(x)         
          }    
        }
      },
      error => {
        console.log(<any>error);
      }            
    );

//grafica con la barras con una imagen de relleno
/*
var img = new Image();
img.src = 'https://i.ebayimg.com/images/g/NykAAOSwgyxWVjsk/s-l300.jpg';

img.onload = function() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var fillPattern = ctx.createPattern(img, 'repeat');
    
    var chart = new Chart(ctx, {
       type: 'bar',
        data: {
            labels: ['Item 1', 'Item 2', 'Item 3'],
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: fillPattern
            }]
        }
    });
};
*/

var chartPluginLineaHorizontal = {
  afterDraw: function(chartobj) {
    if (chartobj.options.lineaHorizontal) {
      var ctx = chartobj.chart.ctx;
      var valorY = chartobj.scales["y-axis-0"].getPixelForValue(chartobj.options.lineaHorizontal);
      ctx.beginPath();
      ctx.moveTo(0, valorY);
      ctx.lineTo(chartobj.chart.width, valorY);
      ctx.strokeStyle = "red";
      ctx.stroke();
    }
  }
}
Chart.pluginService.register(chartPluginLineaHorizontal);


//grafica de barras funcional 

    var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
   // type: 'line',

    // The data for our dataset
   // type: 'polarArea', usar ese para mostrar todos los procesos y su resutlado
   type: 'bar',
   
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            
        }]
    },
    
    
    options: {
      lineaHorizontal: 15,
       //events: ['click'], hace que solo salga info cuando das click
       /* pone de color los titulos de las graficas
       legend: {
            display: true,
            labels: {
                fontColor: 'green'
            }
        },
        */
        /* pone un titulo en la grafica
        title: {
            display: true,
            position: 'left',
            text: 'Custom Chart Title'
        },
        */
        
        scales: {
          /* ajusta el ancho de la barras
            xAxes: [{
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            gridLines: {
                offsetGridLines: true
            }
        }],
        */
            yAxes: [{
             // stacked: true,
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


    //  grafica con lineas
  /*
    this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
              { 
                data: [12, 19, 3, 5, 2, 3],
                borderColor: "#3cba9f",
                fill: false
              },
              
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
                
              }],
            }
          }
        });
        */
       // this.cdRef.detectChanges();


   
 }//del oniint
}//de la clase