import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-listar-cafe',
  templateUrl: './listar-cafe.component.html',
  styleUrls: ['./listar-cafe.component.css'],
})
export class ListarCafeComponent implements OnInit {
  cafes: Array<Cafe> = [];
  blend: number = 0;
  cafeOrigen: number = 0;

  constructor(private cafeService: CafeService) {}

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      for (var _i = 0; _i < cafes.length; _i++) {
        if (cafes[_i].tipo == 'Blend') {
          this.blend++;
        } else {
          this.cafeOrigen++;
        }
      }
    });
  }

  ngOnInit() {
    this.getCafes();
  }
}
