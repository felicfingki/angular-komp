import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalVarService } from '../app/global-var.service';

@Component({
  selector: 'app-hal2',
  templateUrl: './hal2.component.html',
  styleUrls: ['./hal2.component.css']
})
export class Hal2Component implements OnInit {

  constructor(private route: ActivatedRoute,public globalvar : GlobalVarService) { }
  judul : string[];
  isi : string[];
  tanggal : string[];
  ngOnInit() {
    this.judul = this.globalvar.getjudul();
    this.isi = this.globalvar.getisi();
    this.tanggal = this.globalvar.gettanggal();
  }
  Fav(j : string, i : string, t : string)
  {
    this.globalvar.setall(j,i,t);
  }

}