import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  constructor() {
    setTimeout(() => {
      // alert('khan');
      // this.trigger.emit();
      // alert(this.titleInApp);
    }, 2000);
  }
  @Input() titleInApp: String;
  @Output() trigger = new EventEmitter();

  ngOnInit(): void {}
}
