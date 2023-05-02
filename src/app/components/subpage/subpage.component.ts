import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.component.html',
  styleUrls: ['./subpage.component.css']
})

export class SubpageComponent {
  constructor(private http$: HttpClient) {}
  public throwError(): void {
    throw new Error('analytics error');
  }

  public throwHttpError(): void {
    this.http$.get('www.nemletezourl.com').subscribe(
    )
  }
}
