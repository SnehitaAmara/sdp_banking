import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { CheckBalComponent } from './check-bal/check-bal.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ConformComponent } from './conform/conform.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateAccComponent } from './create-acc/create-acc.component';
import { CurrenyCalculatorComponent } from './curreny-calculator/curreny-calculator.component';
import { CustomerCareComponent } from './customer-care/customer-care.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {path : '', component: BasicComponent},
  {path :'login' , component:LoginComponent},
  {path :'registeration' , component:RegisterationComponent},
  {path : 'homepage', component:HomepageComponent},
  {path : 'customer_care', component:CustomerCareComponent},
  {path : 'chatbot', component:ChatbotComponent},
  {path : 'check-out', component:CheckOutComponent},
  {path :'services', component:ServicesComponent},
  {path :'contact-us', component:ContactUsComponent},
  {path : 'curreny-calculator' , component:CurrenyCalculatorComponent},
  {path : 'check-balance' , component:CheckBalComponent},
  {path : 'location' , component:LocationComponent},
  {path : 'loan', component:LoanCalculatorComponent},
  {path : 'create_acc', component:CreateAccComponent},
  {path : 'conformation', component:ConformComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
