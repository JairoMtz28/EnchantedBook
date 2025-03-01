import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonText,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonList,
    IonItem,
    IonLabel,
    IonText,
    NgFor,
  ],
})
export class Tab2Page implements OnInit {
  encantamientos: Encantamiento[] = [
    {
      titulo: 'Aeroimpulso',
      nivMax: 'III',
      objetos: ['/assets/images/mace.png'],

      efecto: 'Es un encantamiento exclusivo para la maza que crea un potente efecto de propulsión vertical al ejecutar un ataque smash, actuando básicamente como una carga de viento más potente.',
      peso: 2,
      obtencion: 'Únicamente se puede encontrar en arcas ominosas, en forma de libro encantado.',
    },
    {
      titulo: 'Afinidad acuática',
      nivMax: 'I',
      objetos: [
        '/assets/images/themes/diamond/helmet.png',
        '/assets/images/turtle_shell.png',
      ],

      efecto: 'Es un encantamiento de casco que aumenta la velocidad de rotura bajo el agua.',
      peso: 2,
      obtencion: 'Mesa de encantamientos',
    },
    {
      titulo: 'Agilidad acuática',
      nivMax: 'III',
      objetos: ['/assets/images/themes/diamond/boots.png'],

      efecto: 'Es un encantamiento de botas que aumenta la velocidad de desplazamiento bajo el agua.',
      peso: 2,
      obtencion: 'Mesa de encantamientos',
    },
    {
      titulo: 'Aspecto ígneo',
      nivMax: 'II',
      objetos: ['/assets/images/themes/diamond/sword.png'],

      efecto: 'Es un encantamiento para espadas que prende fuego al objetivo.',
      peso: 2,
      obtencion: 'Mesa de encantamientos',
    },
    {
      titulo: 'Atracción',
      nivMax: 'III',
      objetos: ['/assets/images/fishing_rod.png'],

      efecto: 'Es un encantamiento de caña de pescar que disminuye el tiempo de espera para una mordida al anzuelo.',
      peso: 2,
      obtencion: 'Mesa de encantamientos',
    },
    {
      titulo: 'Barrido',
      nivMax: 'III',
      objetos: ['/assets/images/themes/diamond/sword.png'],

      efecto: 'Es un encantamiento de espada que incrementa el daño del ataque de barrido.',
      peso: 2,
      obtencion: 'Mesa de encantamientos',
    },
    {
      titulo: 'Botín',
      nivMax: 'III',
      objetos: ['/assets/images/themes/diamond/sword.png'],

      efecto: 'Es un encantamiento para las espadas que puede hacer que las criaturas dejen caer más elementos y aumenten las posibilidades de caídas raras. Las gotas adicionales no afectan la experiencia.',
      peso: 2,
      obtencion: '',
    },
    {
      titulo: 'Caída de pluma',
      nivMax: 'IV',
      objetos: ['/assets/images/themes/diamond/boots.png'],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Carga rápida',
      nivMax: 'III',
      objetos: ['/assets/images/crossbow.png'],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Conductividad',
      nivMax: 'I',
      objetos: ['/assets/images/trident.png'],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Densidad',
      nivMax: 'V',
      objetos: ['/assets/images/mace.png'],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Eficiencia',
      nivMax: 'V',
      objetos: [
        '/assets/images/themes/diamond/pickaxe.png',
        '/assets/images/themes/diamond/axe.png',
        '/assets/images/themes/diamond/shovel.png',
        '/assets/images/themes/diamond/hoe.png',
        '/assets/images/shears.png',
      ],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Empalamiento',
      nivMax: 'V',
      objetos: ['/assets/images/trident.png'],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Empuje',
      nivMax: 'II',
      objetos: ['/assets/images/themes/diamond/sword.png'],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Espinas',
      nivMax: 'III',
      objetos: [
        '/assets/images/themes/diamond/helmet.png',
        '/assets/images/themes/diamond/chestplate.png',
        '/assets/images/themes/diamond/leggings.png',
        '/assets/images/themes/diamond/boots.png',
        '/assets/images/turtle_shell.png',
      ],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Filo',
      nivMax: 'V',
      objetos: [
        '/assets/images/themes/diamond/sword.png',
        '/assets/images/themes/diamond/axe.png',
      ],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Fortuna',
      nivMax: 'III',
      objetos: [
        '/assets/images/themes/diamond/pickaxe.png',
        '/assets/images/themes/diamond/axe.png',
        '/assets/images/themes/diamond/shovel.png',
      ],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Fuego',
      nivMax: 'I',
      objetos: ['/assets/images/bow.png'],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Golpeo',
      nivMax: 'V',
      objetos: [
        '/assets/images/themes/diamond/sword.png',
        '/assets/images/themes/diamond/axe.png',
      ],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Fisura',
      nivMax: 'IV',
      objetos: ['/assets/images/mace.png'],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Infinidad',
      nivMax: 'I',
      objetos: ['/assets/images/bow.png'],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Irrompibilidad',
      nivMax: 'III',
      objetos: [
        '/assets/images/themes/diamond/sword.png',
        '/assets/images/themes/diamond/pickaxe.png',
        '/assets/images/themes/diamond/axe.png',
        '/assets/images/themes/diamond/shovel.png',
        '/assets/images/themes/diamond/hoe.png',
        '/assets/images/themes/diamond/helmet.png',
        '/assets/images/themes/diamond/chestplate.png',
        '/assets/images/themes/diamond/leggings.png',
        '/assets/images/themes/diamond/boots.png',
        '/assets/images/turtle_shell.png',
        '/assets/images/trident.png',
        '/assets/images/bow.png',
        '/assets/images/crossbow.png',
        '/assets/images/shears.png',
        '/assets/images/flint_and_steel.png',
        '/assets/images/fishing_rod.png',
        '/assets/images/shield.png',
        '/assets/images/elytra.png',
      ],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Lealtad',
      nivMax: 'III',
      objetos: ['/assets/images/trident.png'],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Maldición de desaparición',
      nivMax: 'I',
      objetos: [
        '/assets/images/themes/diamond/sword.png',
        '/assets/images/themes/diamond/pickaxe.png',
        '/assets/images/themes/diamond/axe.png',
        '/assets/images/themes/diamond/shovel.png',
        '/assets/images/themes/diamond/hoe.png',
        '/assets/images/themes/diamond/helmet.png',
        '/assets/images/themes/diamond/chestplate.png',
        '/assets/images/themes/diamond/leggings.png',
        '/assets/images/themes/diamond/boots.png',
        '/assets/images/turtle_shell.png',
        '/assets/images/trident.png',
        '/assets/images/bow.png',
        '/assets/images/crossbow.png',
        '/assets/images/shears.png',
        '/assets/images/flint_and_steel.png',
        '/assets/images/fishing_rod.png',
        '/assets/images/shield.png',
        '/assets/images/elytra.png',
      ],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Maldición de ligamiento',
      nivMax: 'I',
      objetos: [
        '/assets/images/themes/diamond/helmet.png',
        '/assets/images/themes/diamond/chestplate.png',
        '/assets/images/themes/diamond/leggings.png',
        '/assets/images/themes/diamond/boots.png',
        '/assets/images/turtle_shell.png',
        '/assets/images/elytra.png',
      ],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Multidisparo',
      nivMax: 'I',
      objetos: ['/assets/images/crossbow.png'],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Paso helado',
      nivMax: 'II',
      objetos: ['/assets/images/themes/diamond/boots.png'],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Perdición de los artrópodos',
      nivMax: 'V',
      objetos: [
        '/assets/images/themes/diamond/sword.png',
        '/assets/images/themes/diamond/axe.png',
      ],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Perforación',
      nivMax: 'IV',
      objetos: ['/assets/images/crossbow.png'],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Poder',
      nivMax: 'V',
      objetos: ['/assets/images/bow.png'],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Propulsión acuática',
      nivMax: 'III',
      objetos: ['/assets/images/trident.png'],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Protección',
      nivMax: 'IV',
      objetos: [
        '/assets/images/themes/diamond/helmet.png',
        '/assets/images/themes/diamond/chestplate.png',
        '/assets/images/themes/diamond/leggings.png',
        '/assets/images/themes/diamond/boots.png',
        '/assets/images/turtle_shell.png',
      ],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Protección contra el fuego',
      nivMax: 'IV',
      objetos: [
        '/assets/images/themes/diamond/helmet.png',
        '/assets/images/themes/diamond/chestplate.png',
        '/assets/images/themes/diamond/leggings.png',
        '/assets/images/themes/diamond/boots.png',
        '/assets/images/turtle_shell.png',
      ],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Protección contra explosiones',
      nivMax: 'IV',
      objetos: [
        '/assets/images/themes/diamond/helmet.png',
        '/assets/images/themes/diamond/chestplate.png',
        '/assets/images/themes/diamond/leggings.png',
        '/assets/images/themes/diamond/boots.png',
        '/assets/images/turtle_shell.png',
      ],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Protección contra proyectiles',
      nivMax: 'IV',
      objetos: [
        '/assets/images/themes/diamond/helmet.png',
        '/assets/images/themes/diamond/chestplate.png',
        '/assets/images/themes/diamond/leggings.png',
        '/assets/images/themes/diamond/boots.png',
        '/assets/images/turtle_shell.png',
      ],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Reparación',
      nivMax: 'I',
      objetos: [
        '/assets/images/themes/diamond/sword.png',
        '/assets/images/themes/diamond/pickaxe.png',
        '/assets/images/themes/diamond/axe.png',
        '/assets/images/themes/diamond/shovel.png',
        '/assets/images/themes/diamond/hoe.png',
        '/assets/images/themes/diamond/helmet.png',
        '/assets/images/themes/diamond/chestplate.png',
        '/assets/images/themes/diamond/leggings.png',
        '/assets/images/themes/diamond/boots.png',
        '/assets/images/turtle_shell.png',
        '/assets/images/bow.png',
        '/assets/images/crossbow.png',
        '/assets/images/shears.png',
        '/assets/images/flint_and_steel.png',
        '/assets/images/fishing_rod.png',
        '/assets/images/shield.png',
        '/assets/images/elytra.png',
      ],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Respiración',
      nivMax: 'III',
      objetos: [
        '/assets/images/themes/diamond/helmet.png',
        '/assets/images/turtle_shell.png',
      ],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Retroceso',
      nivMax: 'II',
      objetos: ['/assets/images/bow.png'],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Sigilo veloz',
      nivMax: 'III',
      objetos: ['/assets/images/themes/diamond/leggings.png'],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Suerte marina',
      nivMax: 'III',
      objetos: ['/assets/images/fishing_rod.png'],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Toque de seda',
      nivMax: 'I',
      objetos: [
        '/assets/images/themes/diamond/pickaxe.png',
        '/assets/images/themes/diamond/axe.png',
        '/assets/images/themes/diamond/shovel.png',
        '/assets/images/themes/diamond/hoe.png',
        '/assets/images/shears.png',
      ],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
    {
      titulo: 'Velocidad del alma',
      nivMax: 'III',
      objetos: ['/assets/images/themes/diamond/boots.png'],

      efecto: '',
      peso: 0,
      obtencion: '',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  verEncantamiento(libro: any) {
    // Navega a la página destino con los datos del encantamiento
    this.router.navigate(['/detalles'], { state: { data: libro } });
  }
}

interface Encantamiento {
  titulo: string;
  nivMax: string;
  objetos: string[];

  efecto: string;
  peso: number;
  obtencion: string;
}
