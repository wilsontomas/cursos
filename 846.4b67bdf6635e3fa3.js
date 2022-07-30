"use strict";(self.webpackChunkcursos=self.webpackChunkcursos||[]).push([[846],{5846:(v,g,i)=>{i.r(g),i.d(g,{PrincipalModule:()=>A});var C=i(6895),h=i(9197),t=i(4650),u=i(3683),Z=i(4859),y=i(3336),c=i(9549),f=i(4144),s=i(3546),d=i(4006);let _=(()=>{class e{constructor(){this.ventas=0,this.costoHora=0,this.cantidadHora=0,this.totalHora=this.costoHora*this.cantidadHora,this.actividad=0,this.web=0,this.herramientas=0,this.publicidad=0,this.total=0,this.totalUnidad=0}ngOnInit(){}calcular(){this.cantidadHora&&this.costoHora&&this.ventas&&(this.totalHora=this.cantidadHora*this.costoHora,this.total=this.totalHora+this.actividad+this.web+this.herramientas+this.publicidad,this.totalUnidad=this.total/this.ventas)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-calculator"]],decls:60,vars:10,consts:[[1,"calc-container"],[1,"login-content"],["color","primary",1,"login-toolbar"],["matPrefix",""],["autofocus","","type","number","matInput","","placeholder","Ventas Estimadas",3,"ngModel","ngModelChange"],["autofocus","","type","number","matInput","","placeholder","Costo por Hora",3,"ngModel","ngModelChange"],["autofocus","","type","number","matInput","","placeholder","Cantidad de Horas",3,"ngModel","ngModelChange"],["autofocus","","type","number","disabled","true","matInput","","placeholder","Total por horas",3,"ngModel","ngModelChange"],["autofocus","","type","number","matInput","","placeholder","Gastos de actividad",3,"ngModel","ngModelChange"],["autofocus","","type","number","matInput","","placeholder","Gastos Web",3,"ngModel","ngModelChange"],["autofocus","","type","number","matInput","","placeholder","Herramientas",3,"ngModel","ngModelChange"],["autofocus","","type","number","matInput","","placeholder","Publividad",3,"ngModel","ngModelChange"],["autofocus","","type","number","disabled","true","matInput","","placeholder","Costo Total",3,"ngModel","ngModelChange"],["autofocus","","type","number","disabled","true","matInput","","placeholder","Valor por Unidad",3,"ngModel","ngModelChange"],[1,"socialMediaFlex"],["type","button","mat-raised-button","","color","primary",2,"width","50%",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"br"),t.TgZ(3,"mat-toolbar",2),t._uU(4,"Calculadora"),t.qZA(),t._UZ(5,"br"),t.TgZ(6,"mat-card")(7,"mat-card-title"),t._uU(8,"Costo del Docente y Horas Totales"),t.qZA(),t.TgZ(9,"mat-form-field")(10,"mat-icon",3),t._uU(11,"equalizer"),t.qZA(),t.TgZ(12,"input",4),t.NdJ("ngModelChange",function(a){return n.ventas=a}),t.qZA()(),t.TgZ(13,"mat-form-field")(14,"mat-icon",3),t._uU(15,"attach_money"),t.qZA(),t.TgZ(16,"input",5),t.NdJ("ngModelChange",function(a){return n.costoHora=a}),t.qZA()(),t.TgZ(17,"mat-form-field")(18,"mat-icon",3),t._uU(19,"av_timer"),t.qZA(),t.TgZ(20,"input",6),t.NdJ("ngModelChange",function(a){return n.cantidadHora=a}),t.qZA()(),t.TgZ(21,"mat-form-field")(22,"mat-icon",3),t._uU(23,"monetization_on"),t.qZA(),t.TgZ(24,"input",7),t.NdJ("ngModelChange",function(a){return n.totalHora=a}),t.qZA()(),t._UZ(25,"br"),t.qZA(),t._UZ(26,"br"),t.TgZ(27,"mat-card")(28,"mat-card-title"),t._uU(29,"Gastos variados"),t.qZA(),t.TgZ(30,"mat-form-field")(31,"mat-icon",3),t._uU(32,"poll"),t.qZA(),t.TgZ(33,"input",8),t.NdJ("ngModelChange",function(a){return n.actividad=a}),t.qZA()(),t.TgZ(34,"mat-form-field")(35,"mat-icon",3),t._uU(36,"domain"),t.qZA(),t.TgZ(37,"input",9),t.NdJ("ngModelChange",function(a){return n.web=a}),t.qZA()(),t.TgZ(38,"mat-form-field")(39,"mat-icon",3),t._uU(40,"edit"),t.qZA(),t.TgZ(41,"input",10),t.NdJ("ngModelChange",function(a){return n.herramientas=a}),t.qZA()(),t.TgZ(42,"mat-form-field")(43,"mat-icon",3),t._uU(44,"chrome_reader_mode"),t.qZA(),t.TgZ(45,"input",11),t.NdJ("ngModelChange",function(a){return n.publicidad=a}),t.qZA()()(),t._UZ(46,"br"),t.TgZ(47,"mat-card")(48,"mat-form-field")(49,"mat-icon",3),t._uU(50,"monetization_on"),t.qZA(),t.TgZ(51,"input",12),t.NdJ("ngModelChange",function(a){return n.total=a}),t.qZA()(),t.TgZ(52,"mat-form-field")(53,"mat-icon",3),t._uU(54,"monetization_on"),t.qZA(),t.TgZ(55,"input",13),t.NdJ("ngModelChange",function(a){return n.totalUnidad=a}),t.qZA()(),t.TgZ(56,"div",14)(57,"button",15),t.NdJ("click",function(){return n.calcular()}),t._uU(58,"Calcular"),t.qZA()()(),t._UZ(59,"br"),t.qZA()()),2&o&&(t.xp6(12),t.Q6J("ngModel",n.ventas),t.xp6(4),t.Q6J("ngModel",n.costoHora),t.xp6(4),t.Q6J("ngModel",n.cantidadHora),t.xp6(4),t.Q6J("ngModel",n.totalHora),t.xp6(9),t.Q6J("ngModel",n.actividad),t.xp6(4),t.Q6J("ngModel",n.web),t.xp6(4),t.Q6J("ngModel",n.herramientas),t.xp6(4),t.Q6J("ngModel",n.publicidad),t.xp6(6),t.Q6J("ngModel",n.total),t.xp6(4),t.Q6J("ngModel",n.totalUnidad))},dependencies:[u.Ye,Z.lW,y.Hw,c.KE,c.qo,f.Nt,s.a8,s.n5,d.Fj,d.wV,d.JJ,d.On],styles:[".calc-container[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;width:100%;align-items:center;display:flex;background-image:url(home.6060121da28c0ce7.jpg)}form[_ngcontent-%COMP%]{width:100%}.login-content[_ngcontent-%COMP%]{width:400px;display:block;margin:0 auto}.login-toolbar[_ngcontent-%COMP%]{justify-content:center;height:-moz-fit-content;height:fit-content;padding:3%}.mat-form-field[_ngcontent-%COMP%]{width:100%;display:block}.mat-raised-button[_ngcontent-%COMP%]{width:100%;height:60px;margin-top:15px}.socialMediaFlex[_ngcontent-%COMP%]{display:flex;justify-content:space-around}"]}),e})(),p=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:32,vars:0,consts:[[1,"home-container"],[1,"login-content"],["color","primary",1,"login-toolbar"],[1,"example-card"],["mat-card-image","","src","assets/card1.jpg","alt","Photo of a Shiba Inu"],["mat-card-image","","src","assets/card2.jpg","alt","Photo of a Shiba Inu"],["mat-card-image","","src","assets/card3.jpg","alt","Photo of a Shiba Inu"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"br"),t.TgZ(3,"mat-toolbar",2),t._uU(4,"Inicio"),t.qZA(),t.TgZ(5,"mat-card",3)(6,"mat-card-header")(7,"mat-card-title"),t._uU(8,"Calculo Presupuestario de Cursos Virtuales"),t.qZA()(),t._UZ(9,"img",4),t.TgZ(10,"mat-card-content")(11,"p"),t._uU(12," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. "),t.qZA()()(),t._UZ(13,"br"),t.TgZ(14,"mat-card",3)(15,"mat-card-header")(16,"mat-card-title"),t._uU(17,"Considera el Nivel del Docente y mas."),t.qZA()(),t._UZ(18,"img",5),t.TgZ(19,"mat-card-content")(20,"p"),t._uU(21," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. "),t.qZA()()(),t._UZ(22,"br"),t.TgZ(23,"mat-card",3)(24,"mat-card-header")(25,"mat-card-title"),t._uU(26,"Agiliza la creacion de Cursos Virtuales."),t.qZA()(),t._UZ(27,"img",6),t.TgZ(28,"mat-card-content")(29,"p"),t._uU(30," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. "),t.qZA()()(),t._UZ(31,"br"),t.qZA()())},dependencies:[u.Ye,s.a8,s.dk,s.dn,s.n5,s.G2],styles:[".home-container[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;width:100%;align-items:center;display:flex;background-image:url(home.6060121da28c0ce7.jpg)}form[_ngcontent-%COMP%]{width:100%}.bg-image[_ngcontent-%COMP%]{background-image:url(register.6fb626f626e05673.jpg);background-repeat:no-repeat}.login-content[_ngcontent-%COMP%]{width:400px;display:block;margin:0 auto}.login-toolbar[_ngcontent-%COMP%]{justify-content:center;height:-moz-fit-content;height:fit-content;padding:3%}.mat-form-field[_ngcontent-%COMP%]{width:100%;display:block}.mat-raised-button[_ngcontent-%COMP%]{width:100%;height:60px;margin-top:15px}.socialMediaFlex[_ngcontent-%COMP%]{display:flex;justify-content:space-around}"]}),e})();var M=i(7009),m=i(9652);const b=[{path:"",component:p},{path:"home",component:p},{path:"calculator",component:_},{path:"questions",component:(()=>{class e{constructor(o){this.snack=o,this.message=""}ngOnInit(){}answer(){this.message?(this.message="",this.snack.open("Mensaje enviado","Cerrar")):this.snack.open("Debe agregar un mensaje","Cerrar")}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(M.ux))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-questions"]],decls:64,vars:1,consts:[[1,"ques-container"],[1,"login-content"],["color","primary",1,"login-toolbar"],["hideToggle",""],["MatLabel",""],["matInput","","rows","4",3,"ngModel","ngModelChange"],[1,"socialMediaFlex"],["type","button","mat-raised-button","","color","primary",2,"width","50%",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"br"),t.TgZ(3,"mat-toolbar",2),t._uU(4,"Preguntas Frecuentes"),t.qZA(),t.TgZ(5,"mat-card")(6,"mat-accordion")(7,"mat-expansion-panel",3)(8,"mat-expansion-panel-header")(9,"mat-panel-title")(10,"b"),t._uU(11,"\xbfQu\xe9 beneficios tiene adquirir este producto o servicio?"),t.qZA()()(),t._UZ(12,"hr"),t.TgZ(13,"p"),t._uU(14,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."),t.qZA()()(),t.TgZ(15,"mat-accordion")(16,"mat-expansion-panel",3)(17,"mat-expansion-panel-header")(18,"mat-panel-title")(19,"b"),t._uU(20,"\xbfRealmente necesito este producto o servicio?"),t.qZA()()(),t._UZ(21,"hr"),t.TgZ(22,"p"),t._uU(23,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."),t.qZA()()(),t.TgZ(24,"mat-accordion")(25,"mat-expansion-panel",3)(26,"mat-expansion-panel-header")(27,"mat-panel-title")(28,"b"),t._uU(29,"\xbfC\xf3mo funciona?"),t.qZA()()(),t._UZ(30,"hr"),t.TgZ(31,"p"),t._uU(32,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."),t.qZA()()(),t.TgZ(33,"mat-accordion")(34,"mat-expansion-panel",3)(35,"mat-expansion-panel-header")(36,"mat-panel-title")(37,"b"),t._uU(38,"\xbfCu\xe1nto dinero cuesta la adquisici\xf3n de este producto?"),t.qZA()()(),t._UZ(39,"hr"),t.TgZ(40,"p"),t._uU(41,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."),t.qZA()()(),t.TgZ(42,"mat-accordion")(43,"mat-expansion-panel",3)(44,"mat-expansion-panel-header")(45,"mat-panel-title")(46,"b"),t._uU(47,"\xbfEn cu\xe1nto tiempo tendr\xe9 listo mi producto?"),t.qZA()()(),t._UZ(48,"hr"),t.TgZ(49,"p"),t._uU(50,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."),t.qZA()()()(),t._UZ(51,"br"),t.TgZ(52,"mat-card")(53,"mat-card-title"),t._uU(54,"Realize una pregunta"),t.qZA(),t.TgZ(55,"mat-form-field")(56,"label",4),t._uU(57,"Haz una pregunta"),t.qZA(),t.TgZ(58,"textarea",5),t.NdJ("ngModelChange",function(a){return n.message=a}),t.qZA()(),t.TgZ(59,"div",6)(60,"button",7),t.NdJ("click",function(){return n.answer()}),t._uU(61,"Enviar"),t.qZA()(),t._UZ(62,"br"),t.qZA(),t._UZ(63,"br"),t.qZA()()),2&o&&(t.xp6(58),t.Q6J("ngModel",n.message))},dependencies:[u.Ye,Z.lW,c.KE,f.Nt,s.a8,s.n5,m.pp,m.ib,m.yz,m.yK,d.Fj,d.JJ,d.On],styles:[".ques-container[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;width:100%;align-items:center;display:flex;background-image:url(ques.3533bb112eb9148a.jpg)}form[_ngcontent-%COMP%]{width:100%}.login-content[_ngcontent-%COMP%]{width:400px;display:block;margin:0 auto}.login-toolbar[_ngcontent-%COMP%]{justify-content:center;height:-moz-fit-content;height:fit-content;padding:3%}.mat-form-field[_ngcontent-%COMP%]{width:100%;display:block}.mat-raised-button[_ngcontent-%COMP%]{width:100%;height:60px;margin-top:15px}.socialMediaFlex[_ngcontent-%COMP%]{display:flex;justify-content:space-around}"]}),e})()},{path:"**",component:p,pathMatch:"full"}];let T=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h.Bz.forChild(b),h.Bz]}),e})();var U=i(412);let A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[C.ez,T,U.q,d.u5]}),e})()}}]);