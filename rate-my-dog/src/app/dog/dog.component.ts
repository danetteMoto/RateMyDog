import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export class Dog {
  constructor(
    public status: string,
    public message: string,
  ) {
  }
}

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})

export class DogComponent {
  dogs: Dog[] = [];

  constructor(
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.getDogs();
  }

  public getDogs(): void {
    console.log("getDogs");
    this.httpClient.get<any>('https://dog.ceo/api/breeds/image/random').subscribe(
      response => {
        console.log(response);
        this.dogs.push(response);
        console.log(this.dogs);
        lastDogImageUrl = response.message;
      }
    )
  }

  public getDogImageURL(): String {
    return lastDogImageUrl;
  }
}

var lastDogImageUrl = "";