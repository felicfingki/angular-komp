import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalVarService } from '../app/global-var.service';

@Component({
  selector: 'app-hal3',
  templateUrl: './hal3.component.html',
  styleUrls: ['./hal3.component.css']
})
export class Hal3Component implements OnInit {

  constructor(private route: ActivatedRoute,public globalvar : GlobalVarService) { }
  judulfav :string;
  isifav : string;
  tanggalfav : string;
  ngOnInit() {
    this.judulfav = this.globalvar.getfavjudul();
    this.isifav = this.globalvar.getfavisi();
    this.tanggalfav = this.globalvar.getfavtanggal();
  }

}