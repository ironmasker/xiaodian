import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  archive;

  ngOnInit() {

    let year = this.route.snapshot.paramMap.get('year');
    let month = this.route.snapshot.paramMap.get('month');
    this.archive = {
      year: year,
      month: month
    }
  }

}
