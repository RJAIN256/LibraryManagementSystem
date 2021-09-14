import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DamagebookserviceService } from '../Services/damagebookservice.service';
import { DamageBook } from '../variables/damagebook';

@Component({
  selector: 'app-updatedamagebook',
  templateUrl: './updatedamagebook.component.html',
  styleUrls: ['./updatedamagebook.component.css']
})
export class UpdatedamagebookComponent implements OnInit {

  obj1: any;
  book: DamageBook[];
  message: string;
  constructor(private damageBook:DamagebookserviceService, private router: Router) {
    this.obj1 = this.damageBook.updateMethod();
  }
  onUpdate(book: DamageBook): any {
    return this.damageBook.onUpdate(this.obj1).subscribe(data => {
      alert("book update successfuly")
      this.router.navigate(['/viewdamagebook'])
    });
  }

  ngOnInit(): void {
  }

}
