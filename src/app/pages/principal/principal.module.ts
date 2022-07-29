import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MaterialModule } from 'src/app/components/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MaterialModule
  ]
})
export class PrincipalModule { }
