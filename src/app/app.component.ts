import { Component, OnInit } from '@angular/core';
import { JiraService } from './providers/jira.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private jiraService: JiraService) {

  }

  ngOnInit() {
    this.jiraService.session().subscribe(data => {
      console.log(data);
    });
  }
}
