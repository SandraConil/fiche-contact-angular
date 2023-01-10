import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg' 


  }


// je veux mettre un toggle aux classe sur l'élément qui contient l'age
  
hidden(){
  const affichAge = document.querySelector(".age") as HTMLParagraphElement;
  affichAge.classList.toggle("visible");
}

}
