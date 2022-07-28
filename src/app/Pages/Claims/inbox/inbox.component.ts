import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-claim-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.sass']
})

export class InboxComponent implements AfterViewInit {
  heading = 'Bandeja de Siniestros';
  subheading = 'Aqui puedes revisar todos tus siniestros registrados.';
  icon = 'pe-7s-wallet icon-gradient bg-plum-plate';

  tittles = ['claim_id', 'policy_id', 'client_name', 'account_name', 'status_name', 'date', 'advance', 'action'];
  dataClaims = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataClaims.paginator = this.paginator;
    this.dataClaims.sort = this.sort;
  }

  constructor() { }

  ngOnInit(): void {

  }

}

export interface Element {
  claim_id: string,
  policy_id: string,
  client_name: string,
  account_name: string,
  status_name: string,
  date: string,
  advance: number,
  action: any,
  }

const ELEMENT_DATA: Element[] = [
  { claim_id: 'VID-001', policy_id: 'S4', client_name: 'Maria Sampedro', account_name: 'Banco Pichincha', status_name: 'En Proceso', date: '07-27-2022', advance: 50, action: '' },
  { claim_id: 'VID-002', policy_id: 'S5', client_name: 'Juan Guerra', account_name: 'Diners', status_name: 'En Proceso', date: '07-27-2022', advance: 40, action: '' },
  { claim_id: 'VID-003', policy_id: 'S6', client_name: 'Edison Caicedo', account_name: 'Banco Pichincha', status_name: 'Completo', date: '07-27-2022', advance: 100, action: '' },
  { claim_id: 'VID-004', policy_id: 'S7', client_name: 'George Coronel', account_name: 'Diners', status_name: 'Completo', date: '07-27-2022', advance: 100, action: '' },
  { claim_id: 'VID-005', policy_id: 'S8', client_name: 'Carlos Iza', account_name: 'Banco Pichincha', status_name: 'En Espera', date: '07-27-2022', advance: 10, action: '' },
];
