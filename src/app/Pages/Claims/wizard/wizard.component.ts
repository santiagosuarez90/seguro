import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {DateAdapter, ErrorStateMatcher, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DropzoneConfigInterface, DropzoneDirective } from 'ngx-dropzone-wrapper';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
// @ts-ignore
import { default as _rollupMoment } from 'moment';

import Swal from 'sweetalert2';

const moment = _rollupMoment || _moment;

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-claim-wizard',
  templateUrl: './wizard.component.html',
  styles: [`
    .wizard-tab-content {
      padding: 16px;
    }`
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})

export class WizardComponent implements OnInit {
  heading = 'Siniestro';
  subheading = 'Registrar un nuevo siniestro.';
  icon = 'pe-7s-wallet icon-gradient bg-plum-plate';

  formHolder: FormGroup;
  formAffected: FormGroup;
  formClaim: FormGroup;
  formPolicy: FormGroup;
  formResume: FormGroup;

  public config: DropzoneConfigInterface = {
    clickable: true,
    uploadMultiple : true,
    maxFiles: 6,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    addRemoveLinks: true,
    autoProcessQueue: true,
  };

  constructor(private formBuilder: FormBuilder) {

  }

  codeOne = this.generateRandom();
  codeSecond = this.generateRandom();

  cities = [
    { value: '01', name: 'Quito' },
    { value: '02', name: 'Cuenca' },
    { value: '03', name: 'Loja' }
  ];

  causes = [
    { value: '01', name: 'INFARTO AL CORAZON' },
    { value: '02', name: 'DERRAME CEREBRAL' },
    { value: '03', name: 'DIABETES' }
  ];

  relationships = [
    { value: '01', name: 'MAMÁ' },
    { value: '02', name: 'PAPÁ' },
    { value: '03', name: 'HIJO' },
    { value: '04', name: 'HIJA' }
  ];

  products = [
    { value: '01', name: 'Crédito Desgravamen BP' },
    { value: '02', name: 'Crédito Desgravamen AA' },
    { value: '03', name: 'Crédito Desgravamen CC' },
  ];

  matcher = new MyErrorStateMatcher();

  public onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }

  public onUploadError(args: any): void {
    console.log('onUploadError:', args);
  }

  public onUploadSuccess(args: any): void {
    console.log('onUploadSuccess:', args);
  }

  ngOnInit() {
    this.formHolder = this.formBuilder.group({
      holderIdentification: ['', Validators.required],
      holderBirthDay: [new Date(), Validators.required],
      holderName: ['', Validators.required],
      holderLastName: ['', Validators.required],
      holderAddress: ['', Validators.required],
      holderEmail: ['', Validators.required],
      holderPhone: ['', Validators.required],
      holderCity: ['01', Validators.required],
    });

    this.formAffected = this.formBuilder.group({
      affectedIdentification: ['', Validators.required],
      affectedBirthDay: [new Date(), Validators.required],
      affectedName: ['', Validators.required],
      affectedLastName: ['', Validators.required],
      affectedAddress: ['', Validators.required],
      affectedEmail: ['', Validators.required],
      affectedPhone: ['', Validators.required],
      affectedCity: ['01', Validators.required],
    });

    this.formClaim = this.formBuilder.group({
      claimDate: [new Date(), Validators.required],
      claimCity: ['01', Validators.required],
      claimDescription: ['', Validators.required],
      claimDead: ['01', Validators.required],
      claimContactIdentification: ['', Validators.required],
      claimContactBirthday: [new Date(), Validators.required],
      claimContactName: ['', Validators.required],
      claimContactLastName: ['', Validators.required],
      claimContactRelationship: ['04', Validators.required],
      claimContactAddress: ['', Validators.required],
      claimContactCity: ['01', Validators.required],
      claimContactEmail: ['', Validators.required],
      claimContactPhone: ['', Validators.required],
    });

    this.formPolicy = this.formBuilder.group({
    });

    this.formResume = this.formBuilder.group({
    });
  }

  holderSearch = function(event) {
    event.preventDefault();

    if (this.formHolder.get('holderIdentification').value === '1801821388') {
      this.formHolder.patchValue({
        holderBirthDay: moment("15-08-1958", "DD-MM-YYYY"),
        holderName: 'Wilfrido Napolitano',
        holderLastName: 'Moreno Moreno',
        holderAddress: '10 de Agosto N34-23 y 6 de Diciembre, Edf, Ecensse',
        holderEmail: 'wilfrido.moreno@gmail.com',
        holderPhone: '0999765456'
      });
    }
  };

  affectedSearch = function(event) {
    event.preventDefault();

    if (this.formAffected.get('affectedIdentification').value === '1801821388') {
      this.formAffected.patchValue({
        affectedBirthDay: moment("15-08-1958", "DD-MM-YYYY"),
        affectedName: 'Wilfrido Napolitano',
        affectedLastName: 'Moreno Moreno',
        affectedAddress: '10 de Agosto N34-23 y 6 de Diciembre, Edf, Ecensse',
        affectedEmail: 'wilfrido.moreno@gmail.com',
        affectedPhone: '0999765456'
      });
    }
  };

  create = function (){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'El siniestro fue reportado exitosamente.',
      showConfirmButton: false,
      timer: 2500
    });

    // this.stepper.reset();
    this.formHolder.reset();
    this.formAffected.reset();
    this.formClaim.reset();
    this.formPolicy.reset();
    this.formResume.reset();
  }

  generateRandom(){
    return Math.floor(Math.random() * 1000000);
  }
}
