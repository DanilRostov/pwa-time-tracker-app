import { 
  Component, 
  OnInit, 
  Input,
} from '@angular/core';
import { TYPES } from 'src/app/consts/tasks';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() public type: string;
  @Input() public tasks: [];
  public types = TYPES;

  constructor() { }

  ngOnInit() {
  }

}
