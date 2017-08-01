
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  containerData: Object[] = [
    { "Name": "Task ", "Category": "Product 1", "Complete" : 0},
    { "Name": "Task ", "Category": "Product 2", "Complete" : 0},
    { "Name": "Task ", "Category": "Product 3", "Complete" : 1},
    { "Name": "Task ", "Category": "Product 4", "Complete" : 0},
    
  ];
  
  newTaskName : string ="";
  newTaskCategory : string ="";

  addTodo(){
    this.containerData.push({ "Name":this.newTaskName, "Category": this.newTaskCategory, "Complete" :0 });
    this.newTaskName = "";
    this.newTaskCategory ="";
  }

  deleteTodo(index){
    this.containerData.splice(index, 1);
  }

  updateTask(){
    for (var i = this.containerData.length - 1; i >= 0; i--) {
      var obj = this.containerData[i];
      if (obj["Complete"] == 1) {
        this.containerData.splice(i,1);
      }
    }
  }

}