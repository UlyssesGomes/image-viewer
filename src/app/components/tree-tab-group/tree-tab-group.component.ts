import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-tab-group',
  templateUrl: './tree-tab-group.component.html',
  styleUrls: ['./tree-tab-group.component.scss']
})
export class TreeTabGroupComponent implements OnInit {

  tabs = [
    {
      index: 0,
      title: 'GENEALOGIA - “A ORIGEM DOS MUDOS”',
      imageName: 'migracao_matrimonio.jpg',
      lensLength: 70,
      subtitleList: [
        {
          name: 'matrimonio/ego',
          description: 'Ego'
        },
        {
          name: 'matrimonio/masculino',
          description: 'Indivíduo do sexo masculino'
        },
        {
          name: 'matrimonio/feminina',
          description: 'Indivíduo do sexo feminino'
        },
        {
          name: 'matrimonio/mudo',
          description: 'Morador "mudo"'
        },
        {
          name: 'matrimonio/muda',
          description: 'Moradora "muda"'
        },
        {
          name: 'matrimonio/falecido',
          description: 'Morte inesperada de um morador do sexo masculino'
        },
        {
          name: 'matrimonio/outside_mudo',
          description: '"Mudo" de "fora" [sítio Tanque, Boqueirão, Paraíba]'
        },
        {
          name: 'matrimonio/x',
          description: 'Casamento com uma pessoa de “fora” e migração para o local de moradia do esposo'
        },
        {
          name: 'matrimonio/ss',
          description: 'Romance passageiro'
        },
        {
          name: 'matrimonio/s',
          description: 'Relação conflituosa'
        },
        {
          name: 'matrimonio/divorcio',
          description: 'Separação do casal'
        }
      ]
    },
    {
      index: 1,
      title: 'GENEALOGIA - MIGRAÇÂO E MATRIMÔNIO',
      imageName: 'origem_mudos.jpg',
      lensLength: 70,
      subtitleList: [
        {
          name: 'migração/circulo',
          description: 'Indivíduo do sexo feminino'
        },
        {
          name: 'migração/circulo-cruz',
          description: 'Moradora “muda”'
        },
        {
          name: 'migração/circulo-ponto',
          description: 'Moradora do sexo feminino que migrou para o Rio de Janeiro ou Brasília'
        },
        {
          name: 'migração/circulo-ponto-amarelo',
          description: 'Migração de uma moradora após se divorciar do marido'
        },
        {
          name: 'migração/circulo-traco',
          description: 'Moradora do sexo feminino de “fora” (sítio Vereda Grande - Barra de Santana - PB ou sítio Tanque - Boqueirão - PB)'
        },
        {
          name: 'migração/divorcio',
          description: 'Relação matrimonial indica a separação do casal'
        },
        {
          name: 'migração/ego',
          description: 'Ego'
        },
        {
          name: 'migração/retangulo-preenchimento',
          description: '“Família com índio”'
        },
        {
          name: 'migração/triangulo',
          description: 'Indivíduo do sexo masculino'
        },
        {
          name: 'migração/triangulo-ponto',
          description: 'Morador do sexo masculino que migrou para o Rio de Janeiro ou Brasília'
        },
        {
          name: 'migração/triangulo-ponto-preenchimento',
          description: 'Morador migrante do sexo masculino que faleceu.'
        },
        {
          name: 'migração/triangulo-preenchimento',
          description: 'Morador do sexo masculino com alguma deficiência'
        },
        {
          name: 'migração/triangulo-traco',
          description: 'Morador do sexo masculino de “fora” (sítio Vereda Grande - Barra de Santana - PB ou sítio Tanque - Boqueirão - PB)'
        }
      ]
    },
    {
      index: 2,
      title: 'CIRCULAÇÃO INTERESTADUAL',
      imageName: 'Circulação_2_1.jpeg',
      lensLength: 100,
      subtitleList: [
      ]
    },
    {
      index: 3,
      title: 'CIRCULAÇÃO INTRAREGIONAL',
      imageName: 'Circução_1_3.jpeg',
      lensLength: 100,
      subtitleList: [
      ]
    },
    {
      index: 4,
      title: 'RELAÇÕES FAMILIARES E MATRIMONIAIS',
      imageName: 'Circução_3_1.jpeg',
      lensLength: 100,
      subtitleList: [
      ]
    },
    {
      index: 5,
      title: 'RELAÇÕES FAMILIARES E MATRIMONIAIS',
      imageName: 'Localização_2.jpeg',
      lensLength: 100,
      subtitleList: [
      ]
    }    
  ];

  tooltip = 'Como usar:\n' + 
  '- Abas: são apresentadadas 6 abas, dependendo da visualização do navegador pode ser preciso ' +
  'clicar na seta para esquerda ou direita para exibir abas ocultas pela rolagem lateral.\n' +
  '- Mover: use o mouse para mover a área em vermelho da miniatura.\n' +
  '- Fixar posição: com o mouse sobre a área vermelha da miniatura clique uma vez pra fixar e outra vez para liberar.';

  constructor() { }

  ngOnInit() {
  }
}
