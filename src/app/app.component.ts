import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { UserdataService} from './services/userdata.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users:any;
  constructor(private userdata: UserdataService ){
   userdata.users().subscribe((data)=>{
    this.users=data

    console.log(this.users);
   });
  }
  title = 'services';
}
