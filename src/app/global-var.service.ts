import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarService {

  
  constructor() { }
  datajudul = [];
  dataisi = [];
  datatanggal = [];
  counter : number =0;
  public isijudul(judul2 : string)
  {
    this.datajudul.push(judul2);
    this.counter=this.counter+1;
  }
  public isiisi(isi2 : string)
  {
    this.dataisi.push(isi2);
  }
  public isitanggal(tanggal2 : string)
  {
    this.datatanggal.push(tanggal2);
  }
  public getjudul()
  {
    return(this.datajudul);
  }
  public getisi()
  {
    return(this.dataisi);
  }
  public gettanggal()
  {
    return(this.datatanggal);
  }
}