import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'angular2-moment'; // optional, provides moment-style pipes for date formatting
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CustomerCareComponent } from './customer-care/customer-care.component';
import { BasicComponent } from './basic/basic.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthService } from './auth.service';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { CurrenyCalculatorComponent } from './curreny-calculator/curreny-calculator.component';
import { CheckBalComponent } from './check-bal/check-bal.component';
import { LocationComponent } from './location/location.component';
import { CreateAccComponent } from './create-acc/create-acc.component';
import { ConformComponent } from './conform/conform.component';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterationComponent,
    HomepageComponent,
    CustomerCareComponent,
    BasicComponent,
    ChatbotComponent,
    CheckOutComponent,
    ServicesComponent,
    ContactUsComponent,
    LoanCalculatorComponent,
    CurrenyCalculatorComponent,
    CheckBalComponent,
    LocationComponent,
    CreateAccComponent,
    ConformComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    NgIdleKeepaliveModule.forRoot(),
    MomentModule,
    ModalModule.forRoot()
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

