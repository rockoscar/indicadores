import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsuarioServicio } from '../../servicios/usuario-servicios';
import { User } from '../../modelos/usuario/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [UsuarioServicio],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public identity;
  public usuario;
  public token;
  public status;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UsuarioServicio
  ) {
    this.usuario = new User();
   }

  ngOnInit() {
     //si ya esta logeado no manda a otra dirección
    this.identity = this._userService.getIdentity();
  
    if(this.identity){
      this._router.navigate(['/ventas']);
    }
  }

  onSubmit(loginForm){
    
    this._userService.signup(this.usuario).subscribe (
      response => {
        this.identity = response.usuariob;
        localStorage.setItem('identity', JSON.stringify(this.identity));
        if(!this.identity || !this.identity._id){
          alert('El usuario no se ha logeado correctamente');
            }else{
                this._userService.signup(this.usuario, 'true').subscribe (
                            response => {
                                this.token = response.token;
                                //validamos el token
                            if(this.token.length <= 0){
                                alert('El token no se ha generado correctamente');
                            }else{
                                //mostrar el token
                                //console.log(this.token);
                                localStorage.setItem('token', this.token);
                                this.status='success';

                                this._router.navigate(['/dashboard']);

                            }
                        },
                        error =>{
                            console.log(<any>error);
                            //console.log("mal");


                            

                        }
                    );
                }
            },
            //en caso de falle el logeo
            error =>{
              loginForm.reset();
                var errorMessage = <any>error;
                if(errorMessage !=  null){
                    var body = JSON.parse(error._body);
                    this.status='error';
                    
                }
                
            }
        );
        
    }

}