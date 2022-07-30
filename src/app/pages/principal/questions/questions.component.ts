import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  message:string="";


  answer(){
    if(this.message){
      this.message = "";
    this.snack.open("Mensaje enviado","Cerrar");
    }else{
      this.snack.open("Debe agregar un mensaje","Cerrar");
    }
    
  }

}
