import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MaterialModule } from 'src/app/components/material.module';
import { FormsModule } from '@angular/forms';
import { QuestionsComponent } from './questions/questions.component';


@NgModule({
  declarations: [
    HomeComponent,
    CalculatorComponent,
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MaterialModule, 
    FormsModule
  ]
})
export class PrincipalModule { }
