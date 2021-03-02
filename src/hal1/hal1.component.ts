import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalVarService } from '../app/global-var.service'

@Component({
  selector: 'app-hal1',
  templateUrl: './hal1.component.html',
  styleUrls: ['./hal1.component.css']
})
export class Hal1Component implements OnInit {

  constructor(private route: ActivatedRoute, public globalvar : GlobalVarService) { }

  ngOnInit() {
  }
  judul : string;
  isi : string;
  tanggal : string;
  Input()
  {
    this.globalvar.isijudul(this.judul);
    this.globalvar.isiisi(this.isi);
    this.globalvar.isitanggal(this.tanggal);
  }
}