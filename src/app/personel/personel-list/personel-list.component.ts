import { Component, OnInit } from '@angular/core';
import { PersonelService } from 'src/_service/personel.service';
import { Ipersonel } from 'src/_model/ipersonel';

@Component({
  selector: 'app-personel-list',
  templateUrl: './personel-list.component.html',
  styleUrls: ['./personel-list.component.css']
})
export class PersonelListComponent implements OnInit {
personelList: Ipersonel[];
secPersonel: Ipersonel;
  constructor(private personelService: PersonelService) { }

  ngOnInit() {
this.getPersonel();
  }
  getPersonel() {
    this.personelService.getPersonel().subscribe((personel: Ipersonel[]) => {
      this.personelList = personel;
    }, err => {
      console.log('Failed');
    });
}
getPer(p: Ipersonel) {
this.secPersonel = p;
}
}
