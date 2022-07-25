import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { PageTitleNewModule } from '../../../Layout/Components/page-title-new/page-title.module';
import { WizardComponent } from './wizard.component';
import { WizardRoutingModule } from './wizard-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  imports: [
    CommonModule,
    WizardRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCardModule,
    MatStepperModule,
    MatIconModule,
    MatDatepickerModule,
    PageTitleNewModule,
    MatSelectModule,
    MatTabsModule,
    MatCheckboxModule,
  ],
  declarations: [WizardComponent]
})
export class WizardModule { }
